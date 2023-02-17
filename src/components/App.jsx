import React, { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case good:
        setGood(prevState => prevState + 1);
        break;

      case neutral:
        setNeutral(prevState => prevState + 1);
        break;

      case bad:
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }

    // this.setState(prevState => {
    //   return {
    //     [event.target.name]: prevState[event.target.name] + 1,
    //   };
    // });
  };

  const getTotalFeedback = () => {
    return good + neutral + bad;
  };

  const getPositivePercentage = () => {
    return Math.round((good * 100) / getTotalFeedback());
  };

  return (
    <>
      <Section>Please leave feedback</Section>
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={Object.keys({ good, neutral, bad })}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={getTotalFeedback()}
        positivePercentage={getPositivePercentage()}
      />
    </>
  );
}
