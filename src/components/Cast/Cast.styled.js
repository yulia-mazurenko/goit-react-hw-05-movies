import styled from 'styled-components';

export const CastTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const CastText = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
`;

export const CastCard = styled.li`
  display: flex;
  flex-direction: column;

  width: 150px;
`;
