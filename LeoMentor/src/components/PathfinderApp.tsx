import React, { useState, useEffect } from 'react';
import MentorCharacter from './MentorCharacter';
import QuestionScreen from './QuestionScreen';
import { toast } from '@/components/ui/use-toast';
import { questions as defaultQuestions } from '@/data/questions.tsx';
import { runPrologConsult } from '../hooks/interpreterProlog';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

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
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

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

  const pdfLinks: Record<string, string> = {
    matematicas: 'https://www.cucei.udg.mx/carreras/matematicas/sites/default/files/adjuntos/mapa_curricular_lima_2023b.pdf',
    biologia: 'http://www.pregrado.udg.mx/sites/default/files/planesEstudio/plan_de_estudios_2017_0.pdf',
    fisica: 'https://www.cucei.udg.mx/carreras/fisica/sites/default/files/malla_fisica_oct_19.pdf',
    computacion: 'https://www.cucei.udg.mx/carreras/computacion/es/malla-curricular-icom-2021',
    'ing biomedica': 'https://www.cucei.udg.mx/carreras/biomedica/sites/default/files/malla_biomedica_2020.pdf',
    'ing electronica': 'https://www.cucei.udg.mx/carreras/electronica/sites/default/files/adjuntos/malla_ing_junio2016.pdf',
    'ing industrial': 'https://www.cucei.udg.mx/carreras/industrial/sites/default/files/adjuntos/malla_2018a.pdf',
    historia: 'http://www.pregrado.udg.mx/sites/default/files/planesEstudio/trayectoria_curricular_de_la_licenciatura_en_historia.pdf',
    'arte y diseño': 'https://cuaad.udg.mx/sites/default/files/plan_de_estudios_dati_idml.pdf',
    medicina: 'http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/licenciatura-en-medico-cirujano-y-partero/unidades-aprendizaje',
    'mecanica electrica': 'https://www.cucei.udg.mx/sites/default/files/ing_mecanica.pdf',
  };

  const detallesLinks: Record<string, string> = {
    computacion: 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-en-computacion',
    matematicas: 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-matematicas',
    fisica: 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-fisica',
    'ingenieria biomedica': 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-biomedica',
    'ing electronica': 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/ingenieria-en-electronica-y-sistemas-inteligentes',
    'ing industrial': 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-industrial',
    'historia y humanidades': 'http://www.cucsh.udg.mx/licenciaturas/licenciatura-en-historia',
    'arte y diseño': 'https://cuaad.udg.mx/?q=presentacion-0',
    medicina: 'http://pregrado.udg.mx/Centros/Tem%C3%A1ticos/CUCS/licenciatura-en-medico-cirujano-y-partero',
    'mecanica electronica': 'https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-mecanica-electrica',
    biologia: 'https://cucba.udg.mx/oferta-academica/licenciaturas/licenciatura-en-biologia',
  };

  const gifs: Record<string, string> = {
    matematicas: '/assets/Gifs/Matematicas_Fisica.gif',
    biologia: '/assets/Gifs/Biologo_Medidcina_Biomedica.gif',
    fisica: '/assets/Gifs/Matematicas_Fisica.gif',
    computacion: '/assets/Gifs/Computacion.gif',
    ing_biomedica: '/assets/Gifs/Biologo_Medidcina_Biomedica.gif',
    ing_electronica: '/assets/Gifs/Electronica_Mecanica.gif',
    ing_industrial: '/assets/Gifs/Ingenieria_Industrial.png',
    historia_humanidades: '/assets/Gifs/Historia_Humanidades.png',
    arte_diseno: '/assets/Gifs/Arte_Diseno.gif',
    medicina: '/assets/Gifs/Biologo_Medidcina_Biomedica.gif',
    ing_mecanica: '/assets/Gifs/Electronica_Mecanica.gif',
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isComplete ? '#F6F5FE' : '#F1F1FD' }}>
      {/* Flecha atrás */}
      <button
        className="absolute top-4 left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
        onClick={() => navigate('/')}
        aria-label="Volver al inicio"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-mentor-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div className="container px-4 py-8 md:py-12 flex-1">
        <header className="w-full mx-auto flex flex-col items-center text-center mb-8 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Leo Mentor</h1>
          <p className="text-lg text-gray-600">Descubre tu carrera ideal a través de preguntas simples</p>
        </header>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          {!isComplete ? (
            <MentorCharacter className="" />
          ) : (
            carreraMasAfin && gifs[carreraMasAfin.toLowerCase().replace(/ /g, '_')] ? (
              <img
                src={gifs[carreraMasAfin.toLowerCase().replace(/ /g, '_')]}
                alt={`Gif de ${carreraMasAfin}`}
                className="max-h-96"
              />
            ) : (
              <MentorCharacter className="" />
            )
          )}
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
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 max-w-3xl animate-fade-in mb-6">
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
                  className="bg-mentor-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-600 transition-colors mx-auto block mb-6"
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
              {/* Botones debajo del cuadro blanco, alineados con el cuadro */}
              <div className="flex justify-center gap-8 mt-0 mb-4 animate-fade-in">
                <button
                  className="bg-white text-mentor-primary font-semibold text-lg px-8 py-4 rounded-xl shadow border border-purple-100 hover:bg-indigo-50 transition-colors"
                  onClick={() => setOpenModal(true)}
                >
                  Plan de estudios
                </button>
                <button className="bg-white text-mentor-primary font-semibold text-lg px-8 py-4 rounded-xl shadow border border-purple-100 hover:bg-indigo-50 transition-colors"
                  onClick={() => {
                    if (carreraMasAfin && detallesLinks[carreraMasAfin.toLowerCase()]) {
                      window.open(detallesLinks[carreraMasAfin.toLowerCase()], '_blank');
                    } else {
                      alert('No hay detalles disponibles para esta carrera.');
                    }
                  }}
                >
                  Más Detalles
                </button>
              </div>
              {/* Modal para mostrar el PDF */}
              <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col">
                  <DialogTitle className="text-white">Malla curricular de {carreraMasAfin}</DialogTitle>
                  {carreraMasAfin && pdfLinks[carreraMasAfin.toLowerCase()] ? (
                    (() => {
                      let url = pdfLinks[carreraMasAfin.toLowerCase()];
                      const carreraKey = carreraMasAfin.toLowerCase();
                      if (carreraKey === 'computacion') {
                        url = '/assets/Carreras/Computacion.pdf';
                      } else if (carreraKey === 'medicina') {
                        url = '/assets/Carreras/Medicina.pdf';
                      }
                      const isPdf = url.toLowerCase().endsWith('.pdf');
                      return (
                        <>
                          <iframe
                            src={url}
                            title={`Malla curricular de ${carreraMasAfin}`}
                            className="w-full h-full rounded-lg border"
                            allow="fullscreen"
                          />
                          <div className="mt-2 text-center">
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-mentor-primary underline hover:text-indigo-700"
                            >
                              ¿No puedes ver {isPdf ? 'el PDF' : 'la página'}? Ábrelo en una nueva pestaña
                            </a>
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    <div className="text-center text-red-500 py-8">No hay malla curricular disponible para esta carrera.</div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm mt-30 mb-8">
        <p>Leo Mentor - Una herramienta educativa para orientación vocacional</p>
      </footer>
    </div>
  );
};

export default PathfinderApp;
