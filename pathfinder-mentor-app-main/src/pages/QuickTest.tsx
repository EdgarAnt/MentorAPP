import React from 'react';
import PathfinderApp from '../components/PathfinderApp';
import { quickQuestions } from '../data/questions';

const QuickTest: React.FC = () => {
  return <PathfinderApp questions={quickQuestions} />;
};

export default QuickTest; 