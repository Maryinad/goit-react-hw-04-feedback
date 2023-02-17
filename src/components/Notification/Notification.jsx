import React from 'react';
import { Title } from './Notification.styled';
import PropTypes from 'prop-types';

export function Notification({ children }) {
  return <Title>{children}</Title>;
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
};
