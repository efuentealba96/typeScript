"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let powerLevel;
    (function (powerLevel) {
        powerLevel[powerLevel["Acuaman"] = 0] = "Acuaman";
        powerLevel[powerLevel["Batman"] = 1] = "Batman";
        powerLevel[powerLevel["Flash"] = 5] = "Flash";
        powerLevel[powerLevel["Superman"] = 100] = "Superman";
    })(powerLevel || (powerLevel = {}));
    //Enumeraciones
    const fuerzaFlash = powerLevel.Flash;
    const fuerzaSuperman = powerLevel.Superman;
    const fuerzaBatman = powerLevel.Batman;
    const fuerzaAcuaman = powerLevel.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
