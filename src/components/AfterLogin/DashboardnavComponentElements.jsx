import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {MdSearch, MdYoutubeSearchedFor} from 'react-icons/md';


export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`

export const NavItem = styled.li`
  height: 80px;
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Rightside = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* margin-left: 0px; */
  cursor: pointer;
  border-radius: 50px;


`
export const SearchInput = styled.input`
  padding: 10px 10px;
  border-radius: 4px;
  background-color: 'transparent';

`
export const SearchButton = styled.button`
  background: #01bf71;
  padding: 10px 10px;
  border: none;
  border-radius: 2px;
  color: #010606;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #10de8a;
    color: #fff;
  }
`
export const ArrowForward = styled(MdYoutubeSearchedFor)`

  font-size: 14px;
`
export const ArrowRight = styled(MdSearch)`

  font-size: 14px;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR) `
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01B56B;
  }

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  margin-right: -100px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #10de8a;
    color: #fff;
  }
`
export const Navlink = styled(LinkR)`
   color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01B56B;
  }
`
