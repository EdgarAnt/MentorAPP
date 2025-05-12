import React from 'react';
import MentorCharacter from '../components/MentorCharacter';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-mentor-primary mb-4 mt-8 text-center">
        ¡Bienvenido a Pathfinder Mentor!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Descubre tu carrera ideal con la ayuda de nuestro mentor león. Responde unas preguntas y te orientaremos hacia la mejor opción para ti.
      </p>
      <div className="mb-8">
        <MentorCharacter className="w-64 h-64 mx-auto" />
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          className="bg-mentor-primary text-white text-xl px-10 py-4 rounded-2xl font-semibold shadow-lg hover:bg-indigo-600 transition-colors"
          onClick={() => navigate('/test')}
        >
          Hacer test
        </button>
        <button
          className="bg-white border-2 border-mentor-primary text-mentor-primary text-xl px-10 py-4 rounded-2xl font-semibold shadow-lg hover:bg-purple-100 transition-colors"
          onClick={() => navigate('/quick')}
        >
          Encuesta rápida (10 preguntas)
        </button>
      </div>
    </div>
  );
};

export default Index;
