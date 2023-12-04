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

import axios from "axios"

const Contact = ({ _id, name, email, phone, label, handleDelete }) => {
  const deleteContact = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND}/contact/delete/${_id}`)
      .then((res) => {
        handleDelete()
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
            <Button colorScheme="green">Edit</Button>
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
