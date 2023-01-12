import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${p => p.theme.space[3]}px;
  width: 350px;
`;

export const SearchFormButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 32px;
  height: 26px;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};

  &:hover {
    opacity: 1;
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};

  width: 100%;

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  &:hover,
  &:focus,
  &:active {
    border-color: ${p => p.theme.colors.accentColor};
    border-width: 3px;
  }

  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
