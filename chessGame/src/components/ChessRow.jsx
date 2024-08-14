import Square from './Square';
import '../stylesheets/ChessRow.css';

function ChessRow ( {rowPieces} ) {
    return (
        <div className='ChessRow'>
            {
                rowPieces.map((piece) => {
                    return <Square piece={piece} />
                })
            }
        </div>
    );
}

export default ChessRow;