import React from "react"
import { Routes, Route } from "react-router-dom"

import ContactsPage from "../Pages/ContactsPage"
import EditContact from "./EditContact"
import SearchResults from "../Pages/SearchResults"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/edit/:_id" element={<EditContact />} />
        <Route path="/search/:search" element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
