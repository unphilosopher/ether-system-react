import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Heading } from '../components/typography/Heading';
import { Spacer } from '../components/layout/Spacer';

import fonts from '../base/typography/fonts';
import colors from '../base/color/colors';

const HeaderLink = styled.a`
  ${fonts.primaryRegular};
  color: ${colors.gray70};
  text-decoration: none;
`;

const StyleGuideHeader = () => (
  <Fragment>
    <Spacer size="small" />
    <Heading size="small">Ether System Demo</Heading>
    <Spacer />
    <HeaderLink href="https://ether.thescenery.co">&larr; Back to the Ether site</HeaderLink>
    <Spacer size="small" />
  </Fragment>
);

export default StyleGuideHeader;
