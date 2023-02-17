import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  getTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getPositivePercentage = () => {
    return Math.round((this.state.good * 100) / this.getTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section>Please leave feedback</Section>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.getTotalFeedback()}
          positivePercentage={this.getPositivePercentage()}
        />
      </>
    );
  }
}
