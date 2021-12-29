/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"

import "../assets/css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <div>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
