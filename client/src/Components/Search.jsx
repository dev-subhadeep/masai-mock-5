import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Container,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

const Search = () => {
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/search/${search}`)
  }
  return (
    <Container>
      <FormControl>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search user"
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Container>
  )
}

export default Search
