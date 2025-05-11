// Import Tau Prolog core and create a session
const pl = require("tau-prolog");
const session = pl.create(1000);
const show = x => console.log(session.format_answer(x));

// Get Node.js argument: node ./script.js item
const item = process.argv[2];

// Change the goal to a string you want to know
const goal = `
    inicializar_puntajes,
    procesar_respuesta(1,b),
    carrera_mas_afin(Carrera).
`;

// Consult program, query goal, and show answers
session.consult("VocationalExpert.pl", {
    success: function() {
        session.query(goal, {
            success: function() {
                session.answers(show);
            }
        })
    }
});