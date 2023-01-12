import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  margin-right: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.accentColor};
  }

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
