import ChessRow from './ChessRow';
import '../stylesheets/ChessBoard.css';

function ChessBoard() {
    const chessGrid = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ];

    return (
        <div className='ChessBoard'>
            {
                chessGrid.map((rowPieces) => {
                    return <ChessRow rowPieces={rowPieces} />
                })
            }
        </div>
    );
}

export default ChessBoard;