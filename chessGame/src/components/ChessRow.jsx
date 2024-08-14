import Square from './Square';
import './ChessRow.css'

function ChessRow () {
    const firstRow = ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'];
    return (
        <div className='ChessRow'>
            {
                firstRow.map((piece) => {
                    return <Square piece={piece} />
                })
            }
        </div>
    );
}

export default ChessRow;