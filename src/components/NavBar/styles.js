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
  width: 100%;
  height: var(--footer-height);
  z-index: 1000;
`

export const NavLink = styled(NavLinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 96%;
  text-decoration: none;
  &[aria-current] {
    color: #909090;
    border: 1px solid #909090;
    border-radius: 6px;
    &:after {
      position: absolute;
      bottom: 0;
      ${fadeIn({ time: '0.5s' })};
      color: #fff;
      line-height: 20px;
    }
  }
`
