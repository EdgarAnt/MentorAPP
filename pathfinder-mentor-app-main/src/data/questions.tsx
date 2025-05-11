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
  },
  {
    id: 2,
    text: "¿Cómo te ves trabajando en el futuro?",
    options: [
      { id: 'a', text: "En un laboratorio o centro de investigación" },
      { id: 'b', text: "En un estudio de diseño o taller" },
      { id: 'c', text: "En un hospital o centro educativo" },
      { id: 'd', text: "En una oficina o empresa" }
    ]
  },
  {
    id: 3,
    text: "¿Qué tipo de problemas te gustaría resolver?",
    options: [
      { id: 'a', text: "Problemas científicos o técnicos" },
      { id: 'b', text: "Problemas creativos o artísticos" },
      { id: 'c', text: "Problemas sociales o humanos" },
      { id: 'd', text: "Problemas empresariales o financieros" }
    ]
  },
  {
    id: 4,
    text: "¿Qué ambiente de trabajo prefieres?",
    options: [
      { id: 'a', text: "Un ambiente estructurado y metódico" },
      { id: 'b', text: "Un ambiente creativo y flexible" },
      { id: 'c', text: "Un ambiente colaborativo y social" },
      { id: 'd', text: "Un ambiente dinámico y competitivo" }
    ]
  },
  {
    id: 5,
    text: "¿Qué te motiva más en tu trabajo?",
    options: [
      { id: 'a', text: "Descubrir nuevas cosas" },
      { id: 'b', text: "Crear algo único" },
      { id: 'c', text: "Ayudar a otros" },
      { id: 'd', text: "Lograr objetivos" }
    ]
  }
]; 

