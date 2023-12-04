import React from "react"
import Contacts from "../Components/ViewContacts"
import Search from "../Components/Search"

import { Container, Box } from "@chakra-ui/react"

const ContactsPage = () => {
  return (
    <Container maxW="1200px" mt={"100px"}>
      <Box my={"20px"}>
        <Search />
      </Box>
      <Box my={"10px"}>
        <Contacts />
      </Box>
    </Container>
  )
}

export default ContactsPage
