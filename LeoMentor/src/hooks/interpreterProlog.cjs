// Import Tau Prolog core and create a session
const pl = require("tau-prolog");
const session = pl.create(1000);

// Function to run Prolog consult with promises
function runPrologConsult(goal) {
    return new Promise((resolve, reject) => {
        session.consult("VocationalExpert.pl", {
            success: function() {
                session.query(goal, {
                    success: function() {
                        session.answers(function(answer) {
                            if (answer) {
                                resolve(session.format_answer(answer));
                            } else {
                                resolve(null);
                            }
                        });
                    },
                    error: function(err) {
                        reject(err);
                    }
                });
            },
            error: function(err) {
                reject(err);
            }
        });
    });
}

module.exports = { runPrologConsult };