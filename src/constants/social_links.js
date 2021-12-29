import React from "react"
import {
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com",
    },
    {
        id: 3,
        icon: <FaInstagram className="social-icon"></FaInstagram>,
        url: "https://www.instagram.com",
    },
    {
        id: 4,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://www.twitter.com",
    },
]

export default data