import React, { useState, useEffect } from 'react';
import MentorCharacter from './MentorCharacter';
import QuestionScreen from './QuestionScreen';
import { toast } from '@/components/ui/use-toast';
import { questions as defaultQuestions } from '@/data/questions.tsx';
import { runPrologConsult } from '../hooks/interpreterProlog';

interface PathfinderAppProps {
  questionCount?: number;
  questions?: typeof defaultQuestions;
}

const PathfinderApp: React.FC<PathfinderAppProps> = ({ questionCount, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mentorExpression, setMentorExpression] = useState<'neutral' | 'happy' | 'thinking' | 'excited'>('neutral');
  const [answers, setAnswers] = useState<{questionId: number, optionId: string}[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [carreraMasAfin, setCarreraMasAfin] = useState<string | null>(null);

  // Usar solo las preguntas necesarias
  const questionsToShow = questions
    ? questions
    : (questionCount ? defaultQuestions.slice(0, questionCount) : defaultQuestions);

  useEffect(() => {
    // Mentor expressions based on question progress
    if (currentQuestionIndex === 0) {
      setMentorExpression('happy');
    } else if (currentQuestionIndex === questionsToShow.length - 1) {
      setMentorExpression('excited');
    } else {
      setMentorExpression(currentQuestionIndex % 2 === 0 ? 'neutral' : 'thinking');
    }
  }, [currentQuestionIndex, questionsToShow.length]);

  const handleSelectOption = async (questionId: number, optionId: string) => {
    console.log('Seleccionada opción:', { questionId, optionId });
    
    const newAnswers = [...answers, { questionId, optionId }];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questionsToShow.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 500);
    } else {
      setIsComplete(true);
      
      try {
        // Construir la consulta Prolog
        const prologQuery = `
          inicializar_puntajes,
          ${newAnswers.map(a => `procesar_respuesta(${a.questionId}, '${a.optionId}'),`).join('\n')}
          carrera_mas_afin(Carrera).
        `;

        console.log('Query Prolog:', prologQuery);

        const result = await runPrologConsult(prologQuery);
        console.log('Resultado Prolog:', result);
        
        if (result) {
          // Extraer el nombre de la carrera del resultado
          const carreraMatch = result.match(/Carrera = ([a-z_]+)/);
          if (carreraMatch) {
            const carrera = carreraMatch[1].replace(/_/g, ' ');
            setCarreraMasAfin(carrera);
            toast({
              title: "¡Evaluación completada!",
              description: `Basado en tus respuestas, la carrera más afín para ti es: ${carrera}`,
              duration: 5000,
            });
          } else {
            throw new Error('Formato de resultado inválido');
          }
        } else {
          throw new Error('No se pudo determinar la carrera');
        }
      } catch (error) {
        console.error('Error al procesar respuestas:', error);
        toast({
          title: "Error",
          description: "Hubo un error al procesar tus respuestas. Por favor, intenta de nuevo.",
          duration: 5000,
        });
      }
    }
  };

  console.log('questionsToShow:', questionsToShow);
  console.log('currentQuestionIndex:', currentQuestionIndex);

  return (
    <div className="app-background">
      <div className="container px-4 py-8 md:py-12 min-h-screen">
        <header className="w-full mx-auto flex flex-col items-center text-center mb-8 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Leo Mentor</h1>
          <p className="text-lg text-gray-600">Descubre tu carrera ideal a través de preguntas simples</p>
        </header>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          <MentorCharacter 
            className=""
          />
          
          {!isComplete ? (
            questionsToShow[currentQuestionIndex] ? (
              <QuestionScreen 
                question={questionsToShow[currentQuestionIndex]}
                onSelectOption={handleSelectOption}
                isLastQuestion={currentQuestionIndex === questionsToShow.length - 1}
              />
            ) : (
              <div className="text-red-500 font-bold text-center">No hay preguntas para mostrar.</div>
            )
          ) : (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 max-w-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-mentor-primary mb-4">¡Análisis completado!</h2>
              {carreraMasAfin ? (
                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    Basado en tus respuestas, la carrera más afín para ti es:
                  </p>
                  <h3 className="text-3xl font-bold text-mentor-primary mb-4">{carreraMasAfin}</h3>
                </div>
              ) : (
                <p className="text-gray-700 mb-6">
                  Procesando tus respuestas...
                </p>
              )}

              <button 
                className="bg-mentor-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-600 transition-colors mx-auto block"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswers([]);
                  setIsComplete(false);
                  setCarreraMasAfin(null);
                  setMentorExpression('happy');
                }}
              >
                Comenzar de nuevo
              </button>
            </div>
          )}
        </div>
        
        <footer className="text-center text-gray-500 text-sm mt-60 mb-4">
          <p>Pathfinder Mentor - Una herramienta educativa para orientación vocacional</p>
        </footer>
      </div>
    </div>
  );
};

export default PathfinderApp;
