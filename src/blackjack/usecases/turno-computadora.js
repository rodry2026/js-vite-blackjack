// turno de la computadora

import { crearCartaHTML } from "./crear-cart-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {String} puntosHTML 
 * @param {String} divCartasComputadora
 * @param {Array<String} deck
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error('Puntos minimos necesarios');
    if (!deck) throw new Error("sadfsdf");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        let imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
