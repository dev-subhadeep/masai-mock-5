import React, { useEffect, useState } from "react"
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
} from "@chakra-ui/react"

import axios from "axios"
import Contact from "./Contact"

const Contacts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}/contact`)
      .then((res) => setData(res.data.contacts))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Label</Th>
              <Th>Action</Th>
            </Tr>
            {data.length
              ? data.map((contact) => (
                  <Contact key={contact._id} {...contact} />
                ))
              : ""}
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Contacts
