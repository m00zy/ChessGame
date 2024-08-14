import ChessRow from './ChessRow'
import './ChessBoard.css'

function ChessBoard() {
    const chessGrid = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'],
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