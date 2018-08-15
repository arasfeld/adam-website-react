import React from 'react';
import styled from 'styled-components';

import { secondaryText } from 'static/colors';
import {
  fontFamily,
  fontWeightLight,
  fontWeightRegular,
} from 'static/typography';

const FirstName = styled.span`
  color: ${secondaryText};
  font-family: ${fontFamily};
  font-size: 34px;
  font-weight: ${fontWeightRegular};
  margin-right: 5px;
`;

const LastName = styled.span`
  color: ${secondaryText};
  font-family: ${fontFamily};
  font-size: 34px;
  font-weight: ${fontWeightLight};
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
