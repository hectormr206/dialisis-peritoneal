import styled from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 3px 4px;
  justify-content: space-around;
  width: 100%;
  height: var(--footer-height);
  background: rgba(0,0,0,0.2);
  z-index: 1000;
`

export const NavLink = styled(NavLinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 96%;
  color: var(--color-secondary);
  text-decoration: none;
  border: 1px solid transparent;
  &[aria-current] {
    border-color: var(--color-primary);
    border-radius: 6px;
    color: var(--color-primary);
    &:after {
      position: absolute;
      bottom: 0;
      ${fadeIn({ time: '0.5s' })};
      line-height: 20px;
    }
  }
`
