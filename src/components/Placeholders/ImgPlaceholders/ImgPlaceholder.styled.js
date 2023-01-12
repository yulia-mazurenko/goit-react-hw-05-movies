import styled from 'styled-components';

export const ImgPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.sizes.placeholder};
  height: ${p => p.theme.sizes.placeholder};
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.poster};
`;

export const Text = styled.p`
  text-align: center;
`;
