import styled from 'styled-components';

export const PhotoActorPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.sizes.photo_placeholder_w};
  height: ${p => p.theme.sizes.photo_placeholder_h};
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.poster};
`;

export const Text = styled.p`
  text-align: center;
`;
