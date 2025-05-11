import React from 'react';

interface Question {
  id: number;
  text: React.ReactNode;
  options: {
    id: string;
    text: string;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "¡Hola! Soy tu guía para descubrir tu carrera ideal. Para empezar, ¿qué te gusta más hacer en tu tiempo libre?",
    options: [
      { id: 'a', text: "Resolver problemas matemáticos" },
      { id: 'b', text: "Diseñar y crear cosas" },
      { id: 'c', text: "Ayudar a otras personas" },
      { id: 'd', text: "Analizar datos y tendencias" }
    ]
    },  {
      id: 2,
      text: "question 2",
      options: [
        { id: 'a', text: "Resolver problemas matemáticos" },
        { id: 'b', text: "Diseñar y crear cosas" },
        { id: 'c', text: "Ayudar a otras personas" },
        { id: 'd', text: "Analizar datos y tendencias" }
      ]
    }
]; 

