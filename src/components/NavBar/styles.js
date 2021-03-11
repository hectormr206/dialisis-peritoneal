import styled from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 8px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 3px 4px;
  justify-content: space-around;
  width: 94%;
  height: 60px;
  box-shadow: -1px -1px 3px rgba(255,255,255,0.9),
              2px 2px 6px rgba(184,185,190,0.8);
  border-radius: 6px;
  z-index: 1000;
`
export const NavLink = styled(NavLinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96%;
  color: rgba(79, 91, 98, 0.3);
  text-decoration: none;
  &[aria-current] {
    color: rgba(79, 91, 98, 0.9);
    border-radius: 6px;
    box-shadow: inset -1px -1px 3px rgba(255,255,255,0.9),
                inset 2px 2px 6px rgba(184,185,190,0.8);
    &:after {
      position: absolute;
      bottom: 0;
      ${fadeIn({ time: '0.5s' })};
      content: '-';
      font-size: 34px;
      line-height: 20px;
    }
  }
  &:hover {
    color: rgba(79, 91, 98, 0.2);
  }
`