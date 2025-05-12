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
    text: "¡Hola! Soy tu guía para descubrir tu carrera ideal. Para empezar, ¿qué materias disfrutas más de la preparatoria?",
    options: [
      { id: 'a', text: "Matemáticas" },
      { id: 'b', text: "Biología" },
      { id: 'c', text: "Física" },
      { id: 'd', text: "Computación" },
      { id: 'f', text: "Historia" },
      { id: 'g', text: "Arte" }
    ]
  },
  {
    id: 2,
    text: "¿Cuál de estas actividades te atrae más?",
    options: [
      { id: 'a', text: "Resolver problemas y ecuaciones lógicas" },
      { id: 'b', text: "Experimentar y entender el cuerpo humano" },
      { id: 'c', text: "Diseñar o arreglar dispositivos electrónicos" },
      { id: 'd', text: "Programar aplicaciones o videojuegos" },
      { id: 'f', text: "Leer, escribir y analizar textos" },
      { id: 'g', text: "Investigar y comprender la historia" }
    ]
  },
  {
    id: 3,
    text: "¿Qué te parece más atractivo?",
    options: [
      { id: 'a', text: "Desarrollar programas y herramientas" },
      { id: 'b', text: "Trabajar en equipos interdisciplinarios de salud" },
      { id: 'c', text: "Resolver problemas complejos con tecnología (robots, vehículos autónomos)" },
      { id: 'd', text: "Aplicar las ciencias para soluciones sostenibles en la industria" },
      { id: 'e', text: "Crear nuevas formas de comunicar ideas o narrativas" },
      { id: 'f', text: "Investigar nuevas formas de preservar el medio ambiente o la cultura" }
    ]
  },
  {
    id: 4,
    text: "¿Cómo te imaginas trabajando en el futuro?",
    options: [
      { id: 'a', text: "En un ambiente de oficina, programando software" },
      { id: 'b', text: "En un laboratorio, investigando nuevos medicamentos o tecnologías" },
      { id: 'c', text: "En un taller, diseñando dispositivos electrónicos" },
      { id: 'd', text: "En una empresa de robótica o IA" },
      { id: 'e', text: "En una agencia creativa de proyectos artísticos o diseño" },
      { id: 'f', text: "Investigando el pasado (historia, literatura)" },
      { id: 'g', text: "En ingeniería para mejorar procesos industriales" }
    ]
  },
  {
    id: 5,
    text: "¿Qué tan importante para ti es la innovación y el impacto social?",
    options: [
      { id: 'a', text: "Muy importante, quiero impactar positivamente" },
      { id: 'b', text: "Importa, pero valoro estabilidad laboral" },
      { id: 'c', text: "Prefiero algo que me dé satisfacción personal" },
      { id: 'd', text: "Siento más atracción por la innovación pura" }
    ]
  },
  {
    id: 6,
    text: "¿Te consideras una persona creativa o analítica?",
    options: [
      { id: 'a', text: "Creativa" },
      { id: 'b', text: "Analítica" },
      { id: 'c', text: "Un poco de ambos" }
    ]
  },
  {
    id: 7,
    text: "¿Prefieres el trabajo en equipo o independiente?",
    options: [
      { id: 'a', text: "Trabajo en equipo" },
      { id: 'b', text: "De manera independiente" },
      { id: 'c', text: "Me adapto a ambas" }
    ]
  },
  {
    id: 8,
    text: "¿Te gustaría algo de TI, salud o productos innovadores?",
    options: [
      { id: 'a', text: "Me interesa TI (programación, software…)" },
      { id: 'b', text: "Me atrae la salud (biomedicina)" },
      { id: 'c', text: "Me apasionan robots o sistemas inteligentes" },
      { id: 'd', text: "Tecnologías para la industria" },
      { id: 'e', text: "Algo más humano o artístico" }
    ]
  },
  {
    id: 9,
    text: "¿Cómo organizas tus apuntes?",
    options: [
      { id: 'a', text: "Con ecuaciones, tablas, diagramas numéricos" },
      { id: 'b', text: "Con esquemas de ciclos de vida y fotos" },
      { id: 'c', text: "Con gráficos de vectores o circuitos" },
      { id: 'd', text: "Con fragmentos de código" },
      { id: 'e', text: "Con resúmenes narrativos o bocetos" }
    ]
  },
  {
    id: 10,
    text: "¿Qué tipo de proyecto te motiva más?",
    options: [
      { id: 'a', text: "Modelar estadísticamente un fenómeno" },
      { id: 'b', text: "Investigar el comportamiento de células o ecosistemas" },
      { id: 'c', text: "Diseñar un experimento de física aplicada" },
      { id: 'd', text: "Programar un prototipo funcional" },
      { id: 'e', text: "Planificar o ejecutar una exposición / texto creativo" }
    ]
  },
  {
    id: 11,
    text: "Al resolver un problema complejo, te sientes:",
    options: [
      { id: 'a', text: "Entusiasmado por manipular fórmulas" },
      { id: 'b', text: "Atraído por la biología del sistema" },
      { id: 'c', text: "Interesado en medir con instrumental físico" },
      { id: 'd', text: "Inspirado para crear un algoritmo" },
      { id: 'e', text: "Motivado a contar la historia / valor estético" }
    ]
  },
  {
    id: 12,
    text: "Si participas en un laboratorio, prefieres:",
    options: [
      { id: 'a', text: "Analizar datos y ecuaciones" },
      { id: 'b', text: "Cultivar células/preparaciones biológicas" },
      { id: 'c', text: "Montar sensores y registrar magnitudes físicas" },
      { id: 'd', text: "Automatizar recolección de datos con código" },
      { id: 'e', text: "Documentar con fotos, bocetos, textos" }
    ]
  },
  {
    id: 13,
    text: "¿Qué charla te gustaría escuchar?",
    options: [
      { id: 'a', text: "Nuevos métodos de cálculo y modelado" },
      { id: 'b', text: "Avances en biotecnología y salud" },
      { id: 'c', text: "Últimos descubrimientos en física de partículas" },
      { id: 'd', text: "Tendencias en inteligencia artificial / software" },
      { id: 'e', text: "Historia del arte o técnicas narrativas" }
    ]
  },
  {
    id: 14,
    text: "¿En qué ámbito te gustaría trabajar?",
    options: [
      { id: 'a', text: "Financiación, estadística o investigación matemática" },
      { id: 'b', text: "Hospitales, laboratorios de biología o biomedicina" },
      { id: 'c', text: "Laboratorio de física experimental o tecnologías limpias" },
      { id: 'd', text: "Empresas de TI, desarrollo de apps o videojuegos" },
      { id: 'e', text: "Estudios de diseño, museos, editoriales" }
    ]
  },
  {
    id: 15,
    text: "Al leer un artículo científico, privilegias:",
    options: [
      { id: 'a', text: "Tablas de datos y resultados numéricos" },
      { id: 'b', text: "Metodología de muestreo biológico" },
      { id: 'c', text: "Descripción de montajes físicos y medidas" },
      { id: 'd', text: "Fragmentos de código" },
      { id: 'e', text: "Contexto, estilo y conclusiones conceptuales" }
    ]
  },
  {
    id: 16,
    text: "¿Cómo prefieres explicar un concepto?",
    options: [
      { id: 'a', text: "Con fórmulas y demostraciones" },
      { id: 'b', text: "Con diagramas de células o ecosistemas" },
      { id: 'c', text: "Con esquemas de fuerzas y gráficos de movimiento" },
      { id: 'd', text: "Con pseudocódigo o ejemplos de software" },
      { id: 'e', text: "Con metáforas, imágenes o referencias culturales" }
    ]
  },
  {
    id: 17,
    text: "¿Qué tecnología te atrae más?",
    options: [
      { id: 'a', text: "Software de análisis matemático" },
      { id: 'b', text: "Bioreactores y microscopios" },
      { id: 'c', text: "Láseres, sensores o satélites" },
      { id: 'd', text: "Inteligencia artificial y redes neuronales" },
      { id: 'e', text: "Impresión 3D, diseño gráfico o multimedia" }
    ]
  },
  {
    id: 18,
    text: "¿Qué proyecto te gustaría liderar?",
    options: [
      { id: 'a', text: "Modelar la propagación de epidemias" },
      { id: 'b', text: "Desarrollar un cultivo celular innovador" },
      { id: 'c', text: "Construir un prototipo de motor eléctrico" },
      { id: 'd', text: "Crear una app de reconocimiento de voz" },
      { id: 'e', text: "Organizar un festival de arte o literatura" }
    ]
  },
  {
    id: 19,
    text: "Tu forma de pensar es principalmente:",
    options: [
      { id: 'a', text: "Paso a paso, lógica deductiva" },
      { id: 'b', text: "Basada en la observación y experimentación viva" },
      { id: 'c', text: "Analítica de causas, efectos y magnitudes" },
      { id: 'd', text: "Algorítmica y modular" },
      { id: 'e', text: "Intuitiva, narrativa y estética" }
    ]
  },
  {
    id: 20,
    text: "Al enfrentar un fallo en tu trabajo, sueles:",
    options: [
      { id: 'a', text: "Revisar todos los cálculos" },
      { id: 'b', text: "Repetir la preparación biológica" },
      { id: 'c', text: "Ajustar el montaje y los sensores" },
      { id: 'd', text: "Hacer \"debugging\" del código" },
      { id: 'e', text: "Revisar el guion, boceto o narrativa" }
    ]
  },
  {
    id: 21,
    text: "¿Qué tipo de publicación leerías primero?",
    options: [
      { id: 'a', text: "Revista de matemáticas aplicadas" },
      { id: 'b', text: "Journal de biología molecular" },
      { id: 'c', text: "Physical Review o similar" },
      { id: 'd', text: "Blog de desarrollo de software" },
      { id: 'e', text: "Revista de arte, historia o literatura" }
    ]
  },
  {
    id: 22,
    text: "En un equipo multidisciplinar aportarías:",
    options: [
      { id: 'a', text: "Modelos numéricos y estadísticos" },
      { id: 'b', text: "Conocimientos de ecología y biología" },
      { id: 'c', text: "Experiencia en experimentos físicos" },
      { id: 'd', text: "Habilidades de programación y automatización" },
      { id: 'e', text: "Visión estética, cultural y comunicativa" }
    ]
  },
  {
    id: 23,
    text: "¿Qué reto social te interesa resolver?",
    options: [
      { id: 'a', text: "Optimizar la distribución de recursos" },
      { id: 'b', text: "Controlar brotes de enfermedades" },
      { id: 'c', text: "Desarrollar energías limpias y seguras" },
      { id: 'd', text: "Democratizar el acceso a la tecnología" },
      { id: 'e', text: "Difundir y preservar el patrimonio cultural" }
    ]
  },
  {
    id: 24,
    text: "¿Cómo aprendes mejor?",
    options: [
      { id: 'a', text: "Resolviendo ejercicios y problemas" },
      { id: 'b', text: "Realizando prácticas con seres vivos" },
      { id: 'c', text: "Ensayando montajes de física" },
      { id: 'd', text: "Programando proyectos reales" },
      { id: 'e', text: "Debatiendo, escribiendo o creando arte" }
    ]
  },
  {
    id: 25,
    text: "¿Qué sensorialidad valoras al estudiar?",
    options: [
      { id: 'a', text: "Números claros y relaciones lógicas" },
      { id: 'b', text: "Texturas y colores en muestras biológicas" },
      { id: 'c', text: "Gráficos de movimiento y lecturas de sensores" },
      { id: 'd', text: "Flujo de datos y trazabilidad en código" },
      { id: 'e', text: "Imágenes, símbolos y lenguaje figurado" }
    ]
  },
  {
    id: 26,
    text: "¿Qué tipo de laboratorio prefieres?",
    options: [
      { id: 'a', text: "De modelado matemático por computador" },
      { id: 'b', text: "De biología celular o genética" },
      { id: 'c', text: "De física experimental u óptica" },
      { id: 'd', text: "De desarrollo de software y hardware" },
      { id: 'e', text: "De creación artística o documental" }
    ]
  },
  {
    id: 27,
    text: "¿Qué tema de investigación te gusta?",
    options: [
      { id: 'a', text: "Teoría de grafos y optimización" },
      { id: 'b', text: "Ingeniería genética o biomedicina" },
      { id: 'c', text: "Fusión nuclear o física cuántica" },
      { id: 'd', text: "Machine learning y big data" },
      { id: 'e', text: "Historia, semiótica o crítica de arte" }
    ]
  },
  {
    id: 28,
    text: "¿Cómo reaccionas ante un concepto abstracto?",
    options: [
      { id: 'a', text: "Lo conviertes en ecuaciones" },
      { id: 'b', text: "Buscas un ejemplo biológico" },
      { id: 'c', text: "Creas una maqueta física o simulación" },
      { id: 'd', text: "Lo programas para verlo en acción" },
      { id: 'e', text: "Lo representas gráficamente o narrativamente" }
    ]
  },
  {
    id: 29,
    text: "¿Qué prefieres diseñar?",
    options: [
      { id: 'a', text: "Un test de matemáticas" },
      { id: 'b', text: "Un ensayo clínico o estudio de campo" },
      { id: 'c', text: "Un experimento de caída libre" },
      { id: 'd', text: "La arquitectura de una aplicación" },
      { id: 'e', text: "El storyboard de un vídeo o montaje" }
    ]
  },
  {
    id: 30,
    text: "¿En qué publicación divulgarías tu trabajo?",
    options: [
      { id: 'a', text: "Journal de álgebra o estadística" },
      { id: 'b', text: "Revista de biotecnología" },
      { id: 'c', text: "Revista de física aplicada" },
      { id: 'd', text: "Blog técnico de software" },
      { id: 'e', text: "Revista cultural o literaria" }
    ]
  }
  /*
  {
    id: 31,
    text: "¿Qué aplicación te motiva más crear?",
    options: [
      { id: 'a', text: "Un sistema de predicción económica" },
      { id: 'b', text: "Una herramienta de diagnóstico médico" },
      { id: 'c', text: "Un dispositivo de medición de energía" },
      { id: 'd', text: "Una plataforma web interactiva" },
      { id: 'e', text: "Una experiencia artística inmersiva" }
    ]
  },
  {
    id: 32,
    text: "¿Con qué frecuencia usas software especializado?",
    options: [
      { id: 'a', text: "Programas de cálculo y estadística" },
      { id: 'b', text: "Software de simulación biológica" },
      { id: 'c', text: "Herramientas de modelado físico" },
      { id: 'd', text: "IDEs de programación y control de versiones" },
      { id: 'e', text: "Suites de diseño gráfico o edición" }
    ]
  },
  {
    id: 33,
    text: "¿Qué desafío técnico prefieres?",
    options: [
      { id: 'a', text: "Demostrar la convergencia de una serie" },
      { id: 'b', text: "Simular una molécula de ADN" },
      { id: 'c', text: "Medir con exactitud ondas o partículas" },
      { id: 'd', text: "Optimizar el rendimiento de un programa" },
      { id: 'e', text: "Combinar imagen, sonido y palabra" }
    ]
  },
  {
    id: 34,
    text: "¿Cómo valoras el trabajo de campo?",
    options: [
      { id: 'a', text: "Prefiero quedarme en el escritorio con datos" },
      { id: 'b', text: "Me encanta salir a medir y muestrear biodiversidad" },
      { id: 'c', text: "Disfruto recolectar datos físicos \"in situ\"" },
      { id: 'd', text: "Prefiero simular escenarios con software" },
      { id: 'e', text: "El campo etnográfico o artístico me atrae" }
    ]
  },
  {
    id: 35,
    text: "¿Qué feria científica te impresiona más?",
    options: [
      { id: 'a', text: "Exposición de algoritmos y matemáticas" },
      { id: 'b', text: "Demostraciones de biotecnología" },
      { id: 'c', text: "Stands de robótica y física aplicada" },
      { id: 'd', text: "Muestras de software y apps" },
      { id: 'e', text: "Instalaciones de arte interactivo" }
    ]
  },
  {
    id: 36,
    text: "¿Qué buscas en un proyecto final?",
    options: [
      { id: 'a', text: "Rigor matemático y solución elegante" },
      { id: 'b', text: "Impacto en la salud o el medioambiente" },
      { id: 'c', text: "Precisión y funcionamiento fiable" },
      { id: 'd', text: "Usabilidad y experiencia de usuario" },
      { id: 'e', text: "Emoción, reflexión y valor cultural" }
    ]
  },
  {
    id: 37,
    text: "¿Cómo aplicas la estadística en tu vida?",
    options: [
      { id: 'a', text: "Analizo datos numéricos de mis estudios" },
      { id: 'b', text: "Estudio poblaciones de organismos" },
      { id: 'c', text: "Mido errores en experimentos físicos" },
      { id: 'd', text: "Registro métricas de rendimiento (apps)" },
      { id: 'e', text: "Recojo encuestas sobre gustos culturales" }
    ]
  },
  {
    id: 38,
    text: "¿Qué opinas de la realidad virtual?",
    options: [
      { id: 'a', text: "La veo como datos y cálculos espaciales" },
      { id: 'b', text: "Útil para simulaciones médicas y biológicas" },
      { id: 'c', text: "Excelente para experimentar fenómenos físicos" },
      { id: 'd', text: "Ideal para desarrollar entornos interactivos" },
      { id: 'e', text: "Oportunidad de crear experiencias artísticas" }
    ]
  },
  {
    id: 39,
    text: "¿Con qué equipo te identificas?",
    options: [
      { id: 'a', text: "Calculadora gráfica y hojas de cálculo" },
      { id: 'b', text: "Microscopio y placas de Petri" },
      { id: 'c', text: "Sensores, osciloscopios y láseres" },
      { id: 'd', text: "Ordenador, IDE y repositorio Git" },
      { id: 'e', text: "Cuaderno de bocetos y cámara" }
    ]
  },
  {
    id: 40,
    text: "¿Qué te motiva de un experimento?",
    options: [
      { id: 'a', text: "Verificación de una hipótesis numérica" },
      { id: 'b', text: "Descubrir un mecanismo de la vida" },
      { id: 'c', text: "Medir con exactitud constantes físicas" },
      { id: 'd', text: "Automatizar la recolección de datos" },
      { id: 'e', text: "Obtener imágenes o relatos impactantes" }
    ]
  },
  {
    id: 41,
    text: "¿Qué innovación consideras esencial?",
    options: [
      { id: 'a', text: "Nuevos algoritmos de optimización" },
      { id: 'b', text: "Terapias génicas y biotecnología" },
      { id: 'c', text: "Paneles solares de alta eficiencia" },
      { id: 'd', text: "Plataformas de inteligencia artificial" },
      { id: 'e', text: "Técnicas de conservación y difusión cultural" }
    ]
  },
  {
    id: 42,
    text: "¿Qué medio prefieres para presentar resultados?",
    options: [
      { id: 'a', text: "Gráficos numéricos y ecuaciones" },
      { id: 'b', text: "Fotografías de muestras o cultivos" },
      { id: 'c', text: "Vídeos de montajes físicos" },
      { id: 'd', text: "Demostraciones de software en vivo" },
      { id: 'e', text: "Muros de imágenes, textos y artefactos" }
    ]
  },
  {
    id: 43,
    text: "¿Cómo te sientes al enseñar a otros?",
    options: [
      { id: 'a', text: "Explicando demostraciones matemáticas" },
      { id: 'b', text: "Mostrando prácticas de laboratorio biológico" },
      { id: 'c', text: "Guiando en experimentos de física" },
      { id: 'd', text: "Enseñando programación y buenas prácticas" },
      { id: 'e', text: "Dirigiendo talleres de creación artística" }
    ]
  },
  {
    id: 44,
    text: "¿Qué mantienes siempre contigo?",
    options: [
      { id: 'a', text: "Una calculadora o app de cálculo" },
      { id: 'b', text: "Una libreta de campo o lupa" },
      { id: 'c', text: "Un sensor o dispositivo de medida" },
      { id: 'd', text: "Un ordenador portátil" },
      { id: 'e', text: "Un cuaderno de bocetos o libro de poesía" }
    ]
  },
  {
    id: 45,
    text: "¿Qué feria de carreras elegirías?",
    options: [
      { id: 'a', text: "Ingeniería matemática y estadística" },
      { id: 'b', text: "Ciencias de la vida y salud" },
      { id: 'c', text: "Ingeniería física y energías" },
      { id: 'd', text: "Informática y desarrollo de software" },
      { id: 'e', text: "Diseños creativos y humanidades" }
    ]
  },
  {
    id: 46,
    text: "¿Qué rasgo valoras en un profesional?",
    options: [
      { id: 'a', text: "Razonamiento lógico" },
      { id: 'b', text: "Curiosidad biológica" },
      { id: 'c', text: "Precisión experimental" },
      { id: 'd', text: "Capacidad de codificar soluciones" },
      { id: 'e', text: "Creatividad y sensibilidad artística" }
    ]
  },
  {
    id: 47,
    text: "¿Qué prefieres desarrollar primero?",
    options: [
      { id: 'a', text: "El modelo matemático" },
      { id: 'b', text: "El protocolo de cultivo" },
      { id: 'c', text: "El montaje físico" },
      { id: 'd', text: "El diagrama de flujo de datos" },
      { id: 'e', text: "El storyboard o boceto inicial" }
    ]
  },
  {
    id: 48,
    text: "¿Cómo defines el éxito de un experimento?",
    options: [
      { id: 'a', text: "Exactitud de los cálculos" },
      { id: 'b', text: "Viabilidad del cultivo o muestra" },
      { id: 'c', text: "Fiabilidad de las medidas" },
      { id: 'd', text: "Estabilidad y robustez del código" },
      { id: 'e', text: "Impacto visual o narrativo" }
    ]
  },
  {
    id: 49,
    text: "¿Qué inteligencia artificial te interesa?",
    options: [
      { id: 'a', text: "Modelos predictivos estadísticos" },
      { id: 'b', text: "Aplicaciones en diagnóstico médico" },
      { id: 'c', text: "Sistemas de control físico de robots" },
      { id: 'd', text: "Redes neuronales y machine learning" },
      { id: 'e', text: "Proyectos de arte generado por IA" }
    ]
  },
  {
    id: 50,
    text: "¿Qué tarea evitarías?",
    options: [
      { id: 'a', text: "Operar con grandes matrices sin contexto" },
      { id: 'b', text: "Reproducir ensayos biológicos repetitivos" },
      { id: 'c', text: "Armar circuitos extremadamente delicados" },
      { id: 'd', text: "Depurar código obsoleto sin documentación" },
      { id: 'e', text: "Revisar textos sin espacio creativo" }
    ]
  },
  {
    id: 51,
    text: "¿Qué factor te impulsa en un proyecto?",
    options: [
      { id: 'a', text: "Elegancia y simetría matemática" },
      { id: 'b', text: "Beneficio para la salud o la vida" },
      { id: 'c', text: "Innovación en tecnología física" },
      { id: 'd', text: "Escalabilidad del software" },
      { id: 'e', text: "Originalidad y mensaje artístico" }
    ]
  },
  {
    id: 52,
    text: "¿Cómo ves la robótica?",
    options: [
      { id: 'a', text: "Como un problema de optimización" },
      { id: 'b', text: "Como herramienta para biomedicina" },
      { id: 'c', text: "Como aplicación de mecánica y sensores" },
      { id: 'd', text: "Como software de control y redes" },
      { id: 'e', text: "Como soporte para instalaciones artísticas" }
    ]
  },
  {
    id: 53,
    text: "¿Qué hito te gustaría lograr?",
    options: [
      { id: 'a', text: "Publicar un teorema relevante" },
      { id: 'b', text: "Descubrir un nuevo fármaco" },
      { id: 'c', text: "Medir algo nunca detectado antes" },
      { id: 'd', text: "Crear una app de gran uso social" },
      { id: 'e', text: "Exponer tu obra en una galería" }
    ]
  },
  {
    id: 54,
    text: "¿Qué valoras más en un equipo de trabajo?",
    options: [
      { id: 'a', text: "Rigor y lógica" },
      { id: 'b', text: "Ética y cuidado de la vida" },
      { id: 'c', text: "Precisión y método" },
      { id: 'd', text: "Creatividad técnica" },
      { id: 'e', text: "Colaboración cultural" }
    ]
  },
  {
    id: 55,
    text: "¿Cómo te relajas después de un proyecto?",
    options: [
      { id: 'a', text: "Resolviendo juegos matemáticos" },
      { id: 'b', text: "Leyendo sobre biología o naturaleza" },
      { id: 'c', text: "Viendo vídeos de experimentos físicos" },
      { id: 'd', text: "Programando por diversión" },
      { id: 'e', text: "Pintando, escribiendo o escuchando música" }
    ]
  },
  {
    id: 56,
    text: "¿Qué te gustaría aprender el próximo año?",
    options: [
      { id: 'a', text: "Métodos avanzados de estadística" },
      { id: 'b', text: "Técnicas de biología sintética" },
      { id: 'c', text: "Nuevas formas de energías limpias" },
      { id: 'd', text: "Arquitecturas de software distribuido" },
      { id: 'e', text: "Técnicas de expresión visual o literaria" }
    ]
  }
*/
];
