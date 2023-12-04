import React, { useEffect } from "react"
import axios from "axios"

const SearchResults = () => {
  const { search } = useParams()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND}/find/${search}`)
  }, [])
  return <div>SearchResults</div>
}

export default SearchResults
