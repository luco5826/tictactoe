import React from 'react';
import './Cell.css'
/**
 * A cell only knows that when it gets clicked it has to trigger the handler,
 * write the received value to its content and change its background when the 
 * Grid says to
 */
const Cell = ({ bgcolor, clickedCell, value, id }) => {

    let charToDisplay;
    if (value === 0) {
        charToDisplay = '   ';
    } else if (value === 'X') {
        charToDisplay = ' X ';
    } else {
        charToDisplay = ' O ';
    }
    return (
        <td className={`bg-${bgcolor} dim`} onClick={clickedCell} id={id}>{charToDisplay}</td>
    );
};
export default Cell;