import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"
import Contacts from "./Components/ViewContacts"

function App() {
  return (
    <ChakraProvider>
      <Contacts />
    </ChakraProvider>
  )
}

export default App
