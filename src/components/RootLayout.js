import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
function RootLayout() {
  return (
    <div>
        <NavBarPanel/>
        <main>
            <Outlet/>
        </main>
    </div>
    
  )
}

export default RootLayout