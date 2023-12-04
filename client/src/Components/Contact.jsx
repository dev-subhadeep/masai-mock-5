import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import axios from "axios"

const Contact = ({ _id, name, email, phone, label, handleDelete }) => {
  const navigate = useNavigate()
  const deleteContact = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND}/contact/delete/${_id}`)
      .then((res) => {
        navigate("/")
      })
  }
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{phone}</Td>
      <Td>{label}</Td>
      <Td>
        <Flex>
          <Box mx={2}>
            <Button
              colorScheme="green"
              onClick={() => navigate(`/edit/${_id}`)}
            >
              Edit
            </Button>
          </Box>
          <Box mx={2}>
            <Button colorScheme="red" onClick={deleteContact}>
              Delete
            </Button>
          </Box>
        </Flex>
      </Td>
    </Tr>
  )
}

export default Contact
