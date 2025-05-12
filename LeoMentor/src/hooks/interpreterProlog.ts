// Usar la versión global de tau-prolog
declare const pl: any;

// Código Prolog directamente en el archivo
const prologCode = `
% Define max_list/2 to find the maximum element in a list
max_list([X], X).
max_list([H|T], Max) :-
    max_list(T, TailMax),
    Max is max(H, TailMax).

% Inicializar puntajes para las carreras
inicializar_puntajes :-
    retractall(puntaje(_, _)),
    assertz(puntaje(matematicas, 0)),
    assertz(puntaje(biologia, 0)),
    assertz(puntaje(fisica, 0)),
    assertz(puntaje(computacion, 0)),
    assertz(puntaje(ing_biomedica, 0)),
    assertz(puntaje(ing_electronica, 0)),
    assertz(puntaje(ing_industrial, 0)),
    assertz(puntaje(historia_humanidades, 0)),
    assertz(puntaje(arte_diseno, 0)),
    assertz(puntaje(medicina, 0)),
    assertz(puntaje(ing_mecanica, 0)).

% Reglas para las preguntas
pregunta(1, a, matematicas, 92).
pregunta(1, b, biologia, 90).
pregunta(1, b, medicina, 92).
pregunta(1, b, ing_biomedica, 102).
pregunta(1, c, fisica, 96).
pregunta(1, c, ing_electronica, 102).
pregunta(1, c, ing_mecanica, 119).
pregunta(1, d, computacion, 76).
% pregunta(1, e, historia_humanidades, 86).
pregunta(1, f, historia_humanidades, 86).
pregunta(1, g, arte_diseno, 89).

pregunta(2, a, matematicas, 92).
pregunta(2, b, biologia, 90).
pregunta(2, b, medicina, 92).
pregunta(2, b, ing_biomedica, 102).
pregunta(2, c, ing_electronica, 102).
pregunta(2, d, computacion, 76).
% pregunta(2, e, historia_humanidades, 86).
pregunta(2, f, historia_humanidades, 86).
pregunta(2, g, arte_diseno, 89).

pregunta(3, a, computacion, 76).
pregunta(3, b, medicina, 92).
pregunta(3, b, ing_biomedica, 102).
pregunta(3, c, ing_electronica, 102).
pregunta(3, c, ing_mecanica, 119).
pregunta(3, d, ing_industrial, 333).
pregunta(3, e, historia_humanidades, 86).
pregunta(3, e, arte_diseno, 89).
pregunta(3, f, biologia, 90).
pregunta(3, f, historia_humanidades, 86).

pregunta(4, a, computacion, 76).
pregunta(4, b, biologia, 90).
pregunta(4, b, medicina, 92).
pregunta(4, c, ing_electronica, 102).
pregunta(4, d, computacion, 76).
pregunta(4, e, arte_diseno, 89).
pregunta(4, f, historia_humanidades, 86).
pregunta(4, g, ing_industrial, 333).

% Preguntas y asignación de puntajes (continuación)
pregunta(5, a, ing_biomedica, 102).
pregunta(5, a, medicina, 92).
pregunta(5, b, ing_industrial, 333).
pregunta(5, b, computacion, 76).
pregunta(5, c, historia_humanidades, 86).
pregunta(5, c, arte_diseno, 89).
pregunta(5, d, matematicas, 92).
pregunta(5, d, fisica, 96).

pregunta(6, a, arte_diseno, 89).
pregunta(6, a, historia_humanidades, 86).
pregunta(6, b, matematicas, 92).
pregunta(6, b, fisica, 96).
pregunta(6, b, computacion, 76).
pregunta(6, c, biologia, 90).
pregunta(6, c, ing_biomedica, 102).
pregunta(6, c, ing_electronica, 102).
pregunta(6, c, ing_industrial, 333).
pregunta(6, c, medicina, 92).
pregunta(6, c, ing_mecanica, 119).

pregunta(7, a, ing_biomedica, 102).
pregunta(7, a, ing_industrial, 333).
pregunta(7, a, medicina, 92).
pregunta(7, b, matematicas, 92).
pregunta(7, b, computacion, 76).
pregunta(7, b, historia_humanidades, 86).
pregunta(7, b, arte_diseno, 89).
pregunta(7, c, biologia, 90).
pregunta(7, c, fisica, 96).
pregunta(7, c, ing_electronica, 102).
pregunta(7, c, ing_mecanica, 119).

pregunta(8, a, computacion, 76).
pregunta(8, b, ing_biomedica, 102).
pregunta(8, b, medicina, 92).
pregunta(8, c, ing_electronica, 102).
pregunta(8, c, ing_mecanica, 119).
pregunta(8, d, ing_industrial, 333).
pregunta(8, e, historia_humanidades, 86).
pregunta(8, e, arte_diseno, 89).

pregunta(9, a, matematicas, 92).
pregunta(9, b, biologia, 90).
pregunta(9, c, fisica, 96).
pregunta(9, c, ing_electronica, 102).
pregunta(9, d, computacion, 76).
pregunta(9, e, historia_humanidades, 86).
pregunta(9, e, arte_diseno, 89).

pregunta(10, a, matematicas, 92).
pregunta(10, b, biologia, 90).
pregunta(10, c, fisica, 96).
pregunta(10, d, computacion, 76).
pregunta(10, e, historia_humanidades, 86).
pregunta(10, e, arte_diseno, 89).

pregunta(11, a, matematicas, 92).
pregunta(11, b, biologia, 90).
pregunta(11, b, ing_biomedica, 102).
pregunta(11, b, medicina, 92).
pregunta(11, c, fisica, 96).
pregunta(11, d, computacion, 76).
pregunta(11, e, historia_humanidades, 86).
pregunta(11, e, arte_diseno, 89).

pregunta(12, a, matematicas, 92).
pregunta(12, b, biologia, 90).
pregunta(12, b, medicina, 92).
pregunta(12, b, ing_biomedica, 102).
pregunta(12, c, fisica, 96).
pregunta(12, c, ing_electronica, 102).
pregunta(12, d, computacion, 76).
pregunta(12, e, historia_humanidades, 86).
pregunta(12, e, arte_diseno, 89).

pregunta(13, a, matematicas, 92).
pregunta(13, b, biologia, 90).
pregunta(13, b, medicina, 92).
pregunta(13, b, ing_biomedica, 102).
pregunta(13, c, fisica, 96).
pregunta(13, d, computacion, 76).
pregunta(13, e, historia_humanidades, 86).
pregunta(13, e, arte_diseno, 89).

pregunta(14, a, matematicas, 92).
pregunta(14, b, biologia, 90).
pregunta(14, b, medicina, 92).
pregunta(14, b, ing_biomedica, 102).
pregunta(14, c, fisica, 96).
pregunta(14, d, computacion, 76).
pregunta(14, e, arte_diseno, 89).
pregunta(14, e, historia_humanidades, 86).

pregunta(15, a, matematicas, 92).
pregunta(15, b, biologia, 90).
pregunta(15, b, medicina, 92).
pregunta(15, c, fisica, 96).
pregunta(15, d, computacion, 76).
pregunta(15, e, historia_humanidades, 86).
pregunta(15, e, arte_diseno, 89).

pregunta(16, a, matematicas, 92).
pregunta(16, b, biologia, 90).
pregunta(16, b, medicina, 92).
pregunta(16, c, fisica, 96).
pregunta(16, d, computacion, 76).
pregunta(16, e, historia_humanidades, 86).
pregunta(16, e, arte_diseno, 89).

pregunta(17, a, matematicas, 92).
pregunta(17, a, computacion, 76).
pregunta(17, b, biologia, 90).
pregunta(17, b, medicina, 92).
pregunta(17, b, ing_biomedica, 102).
pregunta(17, c, fisica, 96).
pregunta(17, c, ing_electronica, 102).
pregunta(17, d, computacion, 76).
pregunta(17, e, arte_diseno, 89).
pregunta(17, e, ing_mecanica, 119).

pregunta(18, a, matematicas, 92).
pregunta(18, a, biologia, 90).
pregunta(18, b, biologia, 90).
pregunta(18, b, medicina, 92).
pregunta(18, b, ing_biomedica, 102).
pregunta(18, c, ing_electronica, 102).
pregunta(18, c, ing_mecanica, 119).
pregunta(18, d, computacion, 76).
pregunta(18, e, historia_humanidades, 86).
pregunta(18, e, arte_diseno, 89).

pregunta(19, a, matematicas, 92).
pregunta(19, a, fisica, 96).
pregunta(19, a, computacion, 76).
pregunta(19, b, biologia, 90).
pregunta(19, b, medicina, 92).
pregunta(19, b, ing_biomedica, 102).
pregunta(19, c, fisica, 96).
pregunta(19, c, ing_electronica, 102).
pregunta(19, c, ing_industrial, 333).
pregunta(19, d, computacion, 76).
pregunta(19, e, historia_humanidades, 86).
pregunta(19, e, arte_diseno, 89).

pregunta(20, a, matematicas, 92).
pregunta(20, a, fisica, 96).
pregunta(20, a, computacion, 76).
pregunta(20, b, biologia, 90).
pregunta(20, b, ing_biomedica, 102).
pregunta(20, b, medicina, 92).
pregunta(20, c, ing_electronica, 102).
pregunta(20, c, ing_mecanica, 119).
pregunta(20, d, computacion, 76).
pregunta(20, e, historia_humanidades, 86).
pregunta(20, e, arte_diseno, 89).

pregunta(21, a, matematicas, 92).
pregunta(21, b, biologia, 90).
pregunta(21, b, ing_biomedica, 102).
pregunta(21, b, medicina, 92).
pregunta(21, c, fisica, 96).
pregunta(21, c, ing_electronica, 102).
pregunta(21, c, ing_mecanica, 119).
pregunta(21, d, computacion, 76).
pregunta(21, e, historia_humanidades, 86).
pregunta(21, e, arte_diseno, 89).

pregunta(22, a, matematicas, 92).
pregunta(22, b, biologia, 90).
pregunta(22, b, medicina, 92).
pregunta(22, b, ing_biomedica, 102).
pregunta(22, c, fisica, 96).
pregunta(22, c, ing_mecanica, 119).
pregunta(22, c, ing_electronica, 102).
pregunta(22, d, computacion, 76).
pregunta(22, e, historia_humanidades, 86).
pregunta(22, e, arte_diseno, 89).

pregunta(23, a, matematicas, 92).
pregunta(23, a, ing_industrial, 333).
pregunta(23, b, biologia, 90).
pregunta(23, b, ing_biomedica, 102).
pregunta(23, b, medicina, 92).
pregunta(23, c, fisica, 96).
pregunta(23, c, ing_mecanica, 119).
pregunta(23, c, ing_electronica, 102).
pregunta(23, d, computacion, 76).
pregunta(23, e, historia_humanidades, 86).
pregunta(23, e, arte_diseno, 89).

pregunta(24, a, matematicas, 92).
pregunta(24, b, biologia, 90).
pregunta(24, b, medicina, 92).
pregunta(24, b, ing_biomedica, 102).
pregunta(24, c, fisica, 96).
pregunta(24, c, ing_mecanica, 119).
pregunta(24, d, computacion, 76).
pregunta(24, e, historia_humanidades, 86).
pregunta(24, e, arte_diseno, 89).

pregunta(25, a, matematicas, 92).
pregunta(25, b, biologia, 90).
pregunta(25, b, medicina, 92).
pregunta(25, b, ing_biomedica, 102).
pregunta(25, c, fisica, 96).
pregunta(25, c, ing_electronica, 102).
pregunta(25, c, ing_mecanica, 119).
pregunta(25, d, computacion, 76).
pregunta(25, e, historia_humanidades, 86).
pregunta(25, e, arte_diseno, 89).

pregunta(26, a, matematicas, 92).
pregunta(26, a, computacion, 76).
pregunta(26, b, biologia, 90).
pregunta(26, b, medicina, 92).
pregunta(26, b, ing_biomedica, 102).
pregunta(26, c, fisica, 96).
pregunta(26, c, ing_electronica, 102).
pregunta(26, c, ing_mecanica, 119).
pregunta(26, d, computacion, 76).
pregunta(26, e, historia_humanidades, 86).
pregunta(26, e, arte_diseno, 89).

pregunta(27, a, matematicas, 92).
pregunta(27, b, biologia, 90).
pregunta(27, b, medicina, 92).
pregunta(27, b, ing_biomedica, 102).
pregunta(27, c, fisica, 96).
pregunta(27, d, computacion, 76).
pregunta(27, e, historia_humanidades, 86).
pregunta(27, e, arte_diseno, 89).

pregunta(28, a, matematicas, 92).
pregunta(28, b, biologia, 90).
pregunta(28, b, medicina, 92).
pregunta(28, b, ing_biomedica, 102).
pregunta(28, c, fisica, 96).
pregunta(28, c, ing_mecanica, 119).
pregunta(28, c, ing_electronica, 102).
pregunta(28, d, computacion, 76).
pregunta(28, e, historia_humanidades, 86).
pregunta(28, e, arte_diseno, 89).

pregunta(29, a, matematicas, 92).
pregunta(29, b, biologia, 90).
pregunta(29, b, medicina, 92).
pregunta(29, b, ing_biomedica, 102).
pregunta(29, c, fisica, 96).
pregunta(29, c, ing_mecanica, 119).
pregunta(29, d, computacion, 76).
pregunta(29, e, historia_humanidades, 86).
pregunta(29, e, arte_diseno, 89).

pregunta(30, a, matematicas, 92).
pregunta(30, b, biologia, 90).
pregunta(30, b, ing_biomedica, 102).
pregunta(30, b, medicina, 92).
pregunta(30, c, fisica, 96).
pregunta(30, c, ing_electronica, 102).
pregunta(30, c, ing_mecanica, 119).
pregunta(30, d, computacion, 76).
pregunta(30, e, historia_humanidades, 86).
pregunta(30, e, arte_diseno, 89).

pregunta(31, a, matematicas, 92).
pregunta(31, a, ing_industrial, 333).
pregunta(31, b, biologia, 90).
pregunta(31, b, ing_biomedica, 102).
pregunta(31, b, medicina, 92).
pregunta(31, c, fisica, 96).
pregunta(31, c, ing_mecanica, 119).
pregunta(31, c, ing_electronica, 102).
pregunta(31, d, computacion, 76).
pregunta(31, e, arte_diseno, 89).
pregunta(31, e, historia_humanidades, 86).

pregunta(32, a, matematicas, 92).
pregunta(32, a, ing_industrial, 333).
pregunta(32, b, biologia, 90).
pregunta(32, b, ing_biomedica, 102).
pregunta(32, b, medicina, 92).
pregunta(32, c, fisica, 96).
pregunta(32, c, ing_mecanica, 119).
pregunta(32, c, ing_electronica, 102).
pregunta(32, d, computacion, 76).
pregunta(32, e, arte_diseno, 89).
pregunta(32, e, historia_humanidades, 86).

pregunta(33, a, matematicas, 92).
pregunta(33, b, biologia, 90).
pregunta(33, b, ing_biomedica, 102).
pregunta(33, b, medicina, 92).
pregunta(33, c, fisica, 96).
pregunta(33, c, ing_mecanica, 119).
pregunta(33, c, ing_electronica, 102).
pregunta(33, d, computacion, 76).
pregunta(33, e, historia_humanidades, 86).
pregunta(33, e, arte_diseno, 89).

pregunta(34, a, matematicas, 92).
pregunta(34, a, computacion, 76).
pregunta(34, b, biologia, 90).
pregunta(34, b, medicina, 92).
pregunta(34, c, fisica, 96).
pregunta(34, c, ing_electronica, 102).
pregunta(34, c, ing_mecanica, 119).
pregunta(34, d, computacion, 76).
pregunta(34, e, historia_humanidades, 86).
pregunta(34, e, arte_diseno, 89).

pregunta(35, a, matematicas, 92).
pregunta(35, b, biologia, 90).
pregunta(35, b, ing_biomedica, 102).
pregunta(35, b, medicina, 92).
pregunta(35, c, fisica, 96).
pregunta(35, c, ing_electronica, 102).
pregunta(35, c, ing_mecanica, 119).
pregunta(35, d, computacion, 76).
pregunta(35, e, arte_diseno, 89).
pregunta(35, e, historia_humanidades, 86).

pregunta(36, a, matematicas, 92).
pregunta(36, b, biologia, 90).
pregunta(36, b, ing_biomedica, 102).
pregunta(36, b, medicina, 92).
pregunta(36, c, fisica, 96).
pregunta(36, c, ing_mecanica, 119).
pregunta(36, c, ing_electronica, 102).
pregunta(36, d, computacion, 76).
pregunta(36, e, historia_humanidades, 86).
pregunta(36, e, arte_diseno, 89).

pregunta(37, a, matematicas, 92).
pregunta(37, b, biologia, 90).
pregunta(37, b, medicina, 92).
pregunta(37, c, fisica, 96).
pregunta(37, c, ing_mecanica, 119).
pregunta(37, c, ing_electronica, 102).
pregunta(37, d, computacion, 76).
pregunta(37, e, historia_humanidades, 86).
pregunta(37, e, arte_diseno, 89).

pregunta(38, a, matematicas, 92).
pregunta(38, a, computacion, 76).
pregunta(38, b, biologia, 90).
pregunta(38, b, medicina, 92).
pregunta(38, b, ing_biomedica, 102).
pregunta(38, c, fisica, 96).
pregunta(38, c, ing_electronica, 102).
pregunta(38, c, ing_mecanica, 119).
pregunta(38, d, computacion, 76).
pregunta(38, e, arte_diseno, 89).
pregunta(38, e, historia_humanidades, 86).

pregunta(39, a, matematicas, 92).
pregunta(39, a, ing_industrial, 333).
pregunta(39, b, biologia, 90).
pregunta(39, b, medicina, 92).
pregunta(39, b, ing_biomedica, 102).
pregunta(39, c, fisica, 96).
pregunta(39, c, ing_electronica, 102).
pregunta(39, d, computacion, 76).
pregunta(39, e, arte_diseno, 89).
pregunta(39, e, historia_humanidades, 86).

pregunta(40, a, matematicas, 92).
pregunta(40, b, biologia, 90).
pregunta(40, b, medicina, 92).
pregunta(40, b, ing_biomedica, 102).
pregunta(40, c, fisica, 96).
pregunta(40, c, ing_electronica, 102).
pregunta(40, c, ing_mecanica, 119).
pregunta(40, d, computacion, 76).
pregunta(40, e, historia_humanidades, 86).
pregunta(40, e, arte_diseno, 89).

pregunta(41, a, matematicas, 92).
pregunta(41, a, computacion, 76).
pregunta(41, b, biologia, 90).
pregunta(41, b, ing_biomedica, 102).
pregunta(41, b, medicina, 92).
pregunta(41, c, fisica, 96).
pregunta(41, c, ing_electronica, 102).
pregunta(41, c, ing_mecanica, 119).
pregunta(41, d, computacion, 76).
pregunta(41, e, historia_humanidades, 86).
pregunta(41, e, arte_diseno, 89).

pregunta(42, a, matematicas, 92).
pregunta(42, b, biologia, 90).
pregunta(42, b, ing_biomedica, 102).
pregunta(42, b, medicina, 92).
pregunta(42, c, fisica, 96).
pregunta(42, c, ing_electronica, 102).
pregunta(42, c, ing_mecanica, 119).
pregunta(42, d, computacion, 76).
pregunta(42, e, historia_humanidades, 86).
pregunta(42, e, arte_diseno, 89).

pregunta(43, a, matematicas, 92).
pregunta(43, b, biologia, 90).
pregunta(43, b, ing_biomedica, 102).
pregunta(43, b, medicina, 92).
pregunta(43, c, fisica, 96).
pregunta(43, c, ing_electronica, 102).
pregunta(43, c, ing_mecanica, 119).
pregunta(43, d, computacion, 76).
pregunta(43, e, historia_humanidades, 86).
pregunta(43, e, arte_diseno, 89).

pregunta(44, a, matematicas, 92).
pregunta(44, b, biologia, 90).
pregunta(44, b, ing_biomedica, 102).
pregunta(44, b, medicina, 92).
pregunta(44, c, fisica, 96).
pregunta(44, c, ing_electronica, 102).
pregunta(44, c, ing_mecanica, 119).
pregunta(44, d, computacion, 76).
pregunta(44, e, historia_humanidades, 86).
pregunta(44, e, arte_diseno, 89).

pregunta(45, a, matematicas, 92).
pregunta(45, a, ing_industrial, 333).
pregunta(45, b, biologia, 90).
pregunta(45, b, ing_biomedica, 102).
pregunta(45, b, medicina, 92).
pregunta(45, c, fisica, 96).
pregunta(45, c, ing_electronica, 102).
pregunta(45, c, ing_mecanica, 119).
pregunta(45, d, computacion, 76).
pregunta(45, e, historia_humanidades, 86).
pregunta(45, e, arte_diseno, 89).

pregunta(46, a, matematicas, 92).
pregunta(46, a, computacion, 76).
pregunta(46, b, biologia, 90).
pregunta(46, b, ing_biomedica, 102).
pregunta(46, b, medicina, 92).
pregunta(46, c, fisica, 96).
pregunta(46, c, ing_electronica, 102).
pregunta(46, c, ing_mecanica, 119).
pregunta(46, d, computacion, 76).
pregunta(46, e, historia_humanidades, 86).
pregunta(46, e, arte_diseno, 89).

pregunta(47, a, matematicas, 92).
pregunta(47, b, biologia, 90).
pregunta(47, b, ing_biomedica, 102).
pregunta(47, b, medicina, 92).
pregunta(47, c, fisica, 96).
pregunta(47, c, ing_electronica, 102).
pregunta(47, c, ing_mecanica, 119).
pregunta(47, d, computacion, 76).
pregunta(47, e, historia_humanidades, 86).
pregunta(47, e, arte_diseno, 89).

pregunta(48, a, matematicas, 92).
pregunta(48, b, biologia, 90).
pregunta(48, b, ing_biomedica, 102).
pregunta(48, b, medicina, 92).
pregunta(48, c, fisica, 96).
pregunta(48, c, ing_electronica, 102).
pregunta(48, c, ing_mecanica, 119).
pregunta(48, d, computacion, 76).
pregunta(48, e, historia_humanidades, 86).
pregunta(48, e, arte_diseno, 89).

pregunta(49, a, matematicas, 92).
pregunta(49, a, ing_industrial, 333).
pregunta(49, b, biologia, 90).
pregunta(49, b, ing_biomedica, 102).
pregunta(49, b, medicina, 92).
pregunta(49, c, fisica, 96).
pregunta(49, c, ing_electronica, 102).
pregunta(49, c, ing_mecanica, 119).
pregunta(49, d, computacion, 76).
pregunta(49, e, historia_humanidades, 86).
pregunta(49, e, arte_diseno, 89).

pregunta(50, a, matematicas, 92).
pregunta(50, b, biologia, 90).
pregunta(50, b, ing_biomedica, 102).
pregunta(50, b, medicina, 92).
pregunta(50, c, fisica, 96).
pregunta(50, c, ing_electronica, 102).
pregunta(50, c, ing_mecanica, 119).
pregunta(50, d, computacion, 76).
pregunta(50, e, historia_humanidades, 86).
pregunta(50, e, arte_diseno, 89).

pregunta(51, a, matematicas, 92).
pregunta(51, b, biologia, 90).
pregunta(51, b, ing_biomedica, 102).
pregunta(51, b, medicina, 92).
pregunta(51, c, fisica, 96).
pregunta(51, c, ing_electronica, 102).
pregunta(51, c, ing_mecanica, 119).
pregunta(51, d, computacion, 76).
pregunta(51, e, historia_humanidades, 86).
pregunta(51, e, arte_diseno, 89).

pregunta(52, a, matematicas, 92).
pregunta(52, a, ing_industrial, 333).
pregunta(52, b, biologia, 90).
pregunta(52, b, ing_biomedica, 102).
pregunta(52, b, medicina, 92).
pregunta(52, c, fisica, 96).
pregunta(52, c, ing_electronica, 102).
pregunta(52, c, ing_mecanica, 119).
pregunta(52, d, computacion, 76).
pregunta(52, e, historia_humanidades, 86).
pregunta(52, e, arte_diseno, 89).

pregunta(53, a, matematicas, 92).
pregunta(53, b, biologia, 90).
pregunta(53, b, ing_biomedica, 102).
pregunta(53, b, medicina, 92).
pregunta(53, c, fisica, 96).
pregunta(53, c, ing_electronica, 102).
pregunta(53, c, ing_mecanica, 119).
pregunta(53, d, computacion, 76).
pregunta(53, e, historia_humanidades, 86).
pregunta(53, e, arte_diseno, 89).

pregunta(54, a, matematicas, 92).
pregunta(54, b, biologia, 90).
pregunta(54, b, ing_biomedica, 102).
pregunta(54, b, medicina, 92).
pregunta(54, c, fisica, 96).
pregunta(54, c, ing_electronica, 102).
pregunta(54, c, ing_mecanica, 119).
pregunta(54, d, computacion, 76).
pregunta(54, e, historia_humanidades, 86).
pregunta(54, e, arte_diseno, 89).

pregunta(55, a, matematicas, 92).
pregunta(55, b, biologia, 90).
pregunta(55, b, ing_biomedica, 102).
pregunta(55, b, medicina, 92).
pregunta(55, c, fisica, 96).
pregunta(55, c, ing_electronica, 102).
pregunta(55, c, ing_mecanica, 119).
pregunta(55, d, computacion, 76).
pregunta(55, e, historia_humanidades, 86).
pregunta(55, e, arte_diseno, 89).

pregunta(56, a, matematicas, 92).
pregunta(56, a, ing_industrial, 333).
pregunta(56, b, biologia, 90).
pregunta(56, b, ing_biomedica, 102).
pregunta(56, b, medicina, 92).
pregunta(56, c, fisica, 96).
pregunta(56, c, ing_electronica, 102).
pregunta(56, c, ing_mecanica, 119).
pregunta(56, d, computacion, 76).
pregunta(56, e, historia_humanidades, 86).
pregunta(56, e, arte_diseno, 89).

% Procesar una respuesta
procesar_respuesta(NumeroPregunta, Respuesta) :-
    findall((Carrera, Puntaje), pregunta(NumeroPregunta, Respuesta, Carrera, Puntaje), Resultados),
    procesar_resultados(Resultados).

% Procesar los resultados obtenidos de las preguntas
procesar_resultados([]).
procesar_resultados([(Carrera, Puntaje)|T]) :-
    actualizar_puntaje(Carrera, Puntaje),
    procesar_resultados(T).

% Actualizar puntaje de una carrera
actualizar_puntaje(Carrera, Puntaje) :-
    puntaje(Carrera, PuntajeActual),
    NuevoPuntaje is PuntajeActual + Puntaje,
    retract(puntaje(Carrera, PuntajeActual)),
    assertz(puntaje(Carrera, NuevoPuntaje)).

% Determinar la carrera mas afín
carrera_mas_afin(Carrera) :-
    findall(P, puntaje(_, P), Puntajes),
    max_list(Puntajes, MaxPuntaje),
    puntaje(Carrera, MaxPuntaje).
`;

// Function to run Prolog consult with promises
export async function runPrologConsult(goal: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
        try {
            const session = pl.create(1000);
            session.consult(prologCode, {
                success: function() {
                    session.query(goal, {
                        success: function() {
                            let resolved = false;
                            session.answers(function(answer) {
                                if (!resolved && answer) {
                                    resolved = true;
                                    const result = session.format_answer(answer);
                                    resolve(result);
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
        } catch (error) {
            reject(error);
        }
    });
}