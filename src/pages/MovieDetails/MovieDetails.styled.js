import styled from 'styled-components';

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100px;
  height: 26px;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-color: ${p => p.theme.colors.muted};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: ${p => p.theme.shadows.normal};

  &:hover {
    opacity: 1;
    color: ${p => p.theme.colors.accentColor};
  }
`;
