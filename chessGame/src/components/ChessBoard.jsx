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

    const columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

    return (
        <div className='left'>
            <div className='row-labels'>
            {
                rowNumbers.map((number) => {
                    return <div className='label'>{number}</div>;
                })
            }
            </div>
            <div className='main'>
                <div className='ChessBoard'>
                    <div className="board">
                        {
                            chessGrid.map((rowPieces) => {
                                return <ChessRow rowPieces={rowPieces} />;
                            })
                        }
                    </div>
                    <div className='column-labels'>
                        {
                            columnLetters.map((letter) => {
                                return <div className='label'>{letter}</div>;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChessBoard;