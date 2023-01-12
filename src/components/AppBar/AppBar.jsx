import Box from '../Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box as="header">
      <Box as="nav" p={4} pl={5}>
        {navItems.map(({ href, text }) => {
          return (
            <NavItem
              key={href}
              to={href}
              className={({ isActive }) => (isActive ? '.active' : undefined)}
            >
              {text}
            </NavItem>
          );
        })}
      </Box>
    </Box>
  );
};
