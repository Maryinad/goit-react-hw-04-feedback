import React from 'react';
import PropTypes from 'prop-types';
import { Section, Btn } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Section>
      {options.map(option => (
        <Btn key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </Btn>
      ))}
    </Section>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
