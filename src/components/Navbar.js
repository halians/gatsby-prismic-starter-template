import React from "react"
import logo from "../assets/images/Maivita_logo.jpg"
import {FaAlignRight, FaHome} from "react-icons/fa"
import pageLinks from "../constants/links"
import {Link} from "gatsby"
import styled from "styled-components"

const Navbar = ({toggleSidebar}) => {
    return <NavWrapper>
        <NavCenter>
            <NavHeader>
                <Link to="/">
                    <Logo src={logo} alt="maivita"/>
                </Link>
                <ToggleButton onClick={toggleSidebar}>
                    <FaAlignRight/>
                </ToggleButton>
            </NavHeader>
            <NavLinks>
                {pageLinks.map((link) => {
                    return (<Link key={link.id} to={link.url}>
                        {link.text === "koti" ? <FaHome size={28}/> : link.text}
                    </Link>)
                })}
            </NavLinks>
        </NavCenter>
    </NavWrapper>
}

const Logo = styled.img`
  width: 200px;
  margin-top: 0.375rem;

  @media screen and (max-width: 767px) {
    width: 160px;
  }
`

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`

const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    a {
      margin-right: 2rem;
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    a:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px var(--clr-primary-5);
    }
  }
`

const ToggleButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export default Navbar