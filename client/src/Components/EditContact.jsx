import React, { useEffect, useState } from "react"
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react"

import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const EditContact = () => {
  const toast = useToast()
  let { _id } = useParams()
  const [formData, setFormData] = useState({})
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND}/contact/${_id}`).then((res) => {
      setFormData({
        name: res.data.contact.name,
        email: res.data.contact.email,
        phone: res.data.contact.phone,
        label: res.data.contact.label,
      })
    })
  }, [])

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleUpdate = () => {
    axios({
      method: "patch",
      data: formData,
      url: `${import.meta.env.VITE_BACKEND}/contact/update/${_id}`,
    }).then((res) => {
      toast({
        title: res.data.message,
        // description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate("/")
    })
  }
  return (
    <Container>
      <Input
        value={formData.name}
        onChange={(e) => handleChange(e)}
        name="name"
      />

      <Input
        value={formData.email}
        onChange={(e) => handleChange(e)}
        name="email"
      />

      <Input
        value={formData.phone}
        onChange={(e) => handleChange(e)}
        name="phone"
      />

      <Select
        placeholder={formData.label}
        onChange={(e) => handleChange(e)}
        name="label"
      >
        <option value="Work">Work</option>
        <option value="School">School</option>
        <option value="Friends">Friends</option>
        <option value="Family">Family</option>
      </Select>
      <Button onClick={handleUpdate}>Update Contact</Button>
    </Container>
  )
}

export default EditContact
