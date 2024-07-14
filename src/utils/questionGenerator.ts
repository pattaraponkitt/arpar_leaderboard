import { Question } from '../types';

const questions: Question[] = [
  
];

export function getRandomQuestions(): Question[] {
  return questions.sort(() => 0.5 - Math.random()).slice(0, 20);
}