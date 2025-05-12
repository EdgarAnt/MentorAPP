const { runPrologConsult } = require("./interpreterProlog.cjs");

async function testProlog() {
    try {
        const goal = `
            inicializar_puntajes,
            procesar_respuesta(1,e),
            carrera_mas_afin(Carrera).
        `;

        const result = await runPrologConsult(goal);
        console.log("Prolog Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

testProlog();