import React from 'react';

import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ children }) {
  return <Title>{children}</Title>;
}

Section.propTypes = {
  children: PropTypes.string.isRequired,
};
