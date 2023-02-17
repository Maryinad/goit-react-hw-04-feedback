import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

import { Title, Text } from './Statistics';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total > 0 ? (
    <>
      <Title>Statistics</Title>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}</Text>
    </>
  ) : (
    <Notification>There is no feedback</Notification>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
