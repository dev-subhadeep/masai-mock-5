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

const Contact = ({ _id, name, email, phone, label }) => {
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
            <Button colorScheme="red">Delete</Button>
          </Box>
        </Flex>
      </Td>
    </Tr>
  )
}

export default Contact
