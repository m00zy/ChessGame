import '../stylesheets/Square.css';
import k from '../assets/pieces/K.png';
import q from '../assets/pieces/Q.png';
import b from '../assets/pieces/B.png';
import n from '../assets/pieces/N.png';
import r from '../assets/pieces/R.png';
import p from '../assets/pieces/P.png';

import Draggable from 'react-draggable';

function Square({ piece }){

  const pieceImages = {
    K: k,
    Q: q,
    B: b,
    N: n,
    R: r,
    P: p,
  };

  const pieceColor = piece[0] === 'W' ? 'white-piece' : 'black-piece';
  const pieceType = piece[1];

    return (
      <div className="square">
        <Draggable>
          <img src={pieceImages[pieceType]} alt={piece} className={pieceColor}/>
        </Draggable>
      </div>
    );
  }

  export default Square;