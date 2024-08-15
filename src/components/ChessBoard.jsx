import ChessRow from './ChessRow';
import '../stylesheets/ChessBoard.css';

function ChessBoard() {
    const chessGrid = [
        ['BR', 'BN', 'BB', 'BQ', 'BK', 'BP', 'BN', 'BR'],
        ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
        ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'],
    ];

    const columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rowNumbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

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