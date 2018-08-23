import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

const FirstName = styled.span`
  color: ${theme.palette.secondaryText};
  font-size: 34px;
  font-weight: ${theme.typography.fontWeightRegular};
  margin-right: 5px;
`;

const LastName = styled.span`
  color: ${theme.palette.secondaryText};
  font-size: 34px;
  font-weight: ${theme.typography.fontWeightLight};
`;

function Name() {
  return (
    <div>
      <FirstName>ADAM</FirstName>
      <LastName>RASFELD</LastName>
    </div>
  );
}

export default Name;
