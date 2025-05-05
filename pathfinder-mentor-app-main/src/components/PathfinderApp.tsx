import React, { useState, useEffect } from 'react';
import MentorCharacter from './MentorCharacter';
import QuestionScreen from './QuestionScreen';
import { toast } from '@/components/ui/use-toast';

// Dummy questions data
const questions = [
  {
    id: 1,
    text: "¡Hola! Soy tu guía para descubrir tu carrera ideal. Para empezar, ¿qué te gusta más hacer en tu tiempo libre?",
    options: [
      "Resolver problemas matemáticos",
      "Crear arte o diseñar",
      "Ayudar a otras personas",
      "Explorar la naturaleza",
      "Leer o escribir",
      "Programar o usar tecnología"
    ]
  },
  {
    id: 2,
    text: "¡Interesante elección! Ahora dime, ¿qué materia escolar disfrutas más?",
    options: [
      "Matemáticas",
      "Arte o Música",
      "Ciencias Sociales",
      "Educación Física",
      "Literatura o Idiomas",
      "Informática o Tecnología",
      "Ciencias Naturales",
      "Historia"
    ]
  },
  {
    id: 3,
    text: "¿Cómo te ves trabajando en el futuro?",
    options: [
      "En una oficina con computadoras",
      "En espacios creativos",
      "Ayudando directamente a personas",
      "Al aire libre",
      "Investigando en un laboratorio",
      "Enseñando a otros"
    ]
  },
  {
    id: 4,
    text: "¿Qué habilidad crees que es tu mayor fortaleza?",
    options: [
      "Análisis y lógica",
      "Creatividad e imaginación",
      "Comunicación y empatía",
      "Organización y planificación",
      "Investigación y curiosidad",
      "Liderazgo y trabajo en equipo"
    ]
  },
  {
    id: 5,
    text: "Y por último, ¿qué valor es más importante para ti en tu futura carrera?",
    options: [
      "Innovación",
      "Expresión personal",
      "Ayudar a otros",
      "Estabilidad económica",
      "Reconocimiento",
      "Equilibrio vida-trabajo"
    ]
  }
];

const PathfinderApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mentorExpression, setMentorExpression] = useState<'neutral' | 'happy' | 'thinking' | 'excited'>('neutral');
  const [answers, setAnswers] = useState<{questionId: number, optionIndex: number}[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Mentor expressions based on question progress
    if (currentQuestionIndex === 0) {
      setMentorExpression('happy');
    } else if (currentQuestionIndex === questions.length - 1) {
      setMentorExpression('excited');
    } else {
      setMentorExpression(currentQuestionIndex % 2 === 0 ? 'neutral' : 'thinking');
    }
  }, [currentQuestionIndex]);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    const newAnswers = [...answers, { questionId, optionIndex }];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 500);
    } else {
      // Complete the questionnaire
      setIsComplete(true);
      
      toast({
        title: "¡Evaluación completada!",
        description: "Hemos analizado tus respuestas y pronto te mostraremos resultados personalizados.",
        duration: 5000,
      });
    }
  };

  return (
    <div className="app-background">
      <div className="container px-4 py-8 md:py-12 min-h-screen">
        <header className="w-full mx-auto flex flex-col items-center text-center mb-8 pl-72">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Pathfinder Mentor</h1>
          <p className="text-lg text-gray-600">Descubre tu carrera ideal a través de preguntas simples</p>
        </header>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          <MentorCharacter 
            expression={mentorExpression} 
            className="w-40 md:w-60"
          />
          
          {!isComplete ? (
            <QuestionScreen 
              question={questions[currentQuestionIndex]}
              onSelectOption={handleSelectOption}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          ) : (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 max-w-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-mentor-primary mb-4">¡Análisis completado!</h2>
              <p className="text-gray-700 mb-6">
                Basado en tus respuestas, podríamos recomendar carreras en los siguientes campos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sample results - in a real app these would be calculated based on answers */}
                <div className="bg-mentor-light p-4 rounded-xl">
                  <h3 className="font-bold text-mentor-primary">Ingeniería y Tecnología</h3>
                  <p className="text-sm text-gray-700 mt-1">Compatibilidad: 85%</p>
                </div>
                <div className="bg-mentor-light p-4 rounded-xl">
                  <h3 className="font-bold text-mentor-primary">Diseño y Artes Creativas</h3>
                  <p className="text-sm text-gray-700 mt-1">Compatibilidad: 70%</p>
                </div>
                <div className="bg-mentor-light p-4 rounded-xl">
                  <h3 className="font-bold text-mentor-primary">Ciencias de la Educación</h3>
                  <p className="text-sm text-gray-700 mt-1">Compatibilidad: 65%</p>
                </div>
                <div className="bg-mentor-light p-4 rounded-xl">
                  <h3 className="font-bold text-mentor-primary">Ciencias Ambientales</h3>
                  <p className="text-sm text-gray-700 mt-1">Compatibilidad: 60%</p>
                </div>
              </div>
              <button 
                className="mt-8 bg-mentor-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-600 transition-colors mx-auto block"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswers([]);
                  setIsComplete(false);
                  setMentorExpression('happy');
                }}
              >
                Comenzar de nuevo
              </button>
            </div>
          )}
        </div>
        
        <footer className="text-center text-gray-500 text-sm mt-20 mb-4 pl-72">
          <p>Pathfinder Mentor - Una herramienta educativa para orientación vocacional</p>
        </footer>
      </div>
    </div>
  );
};

export default PathfinderApp;
