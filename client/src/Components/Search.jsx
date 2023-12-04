import React from "react"
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

const Search = () => {
  const handleClick = () => {}
  return (
    <Container>
      <FormControl>
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" placeholder="Search user" />
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
