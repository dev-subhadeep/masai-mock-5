import React from "react"
import { Routes, Route } from "react-router-dom"

import ContactsPage from "../Pages/ContactsPage"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
