import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"
import Contacts from "./Components/ViewContacts"
import ContactsPage from "./Pages/ContactsPage"
import MainRoutes from "./Components/MainRoutes"

function App() {
  return (
    <ChakraProvider>
      <MainRoutes />
    </ChakraProvider>
  )
}

export default App
