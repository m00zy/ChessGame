import Square from './Square';
import './ChessRow.css'

function ChessRow ( { piece }) {
    return (
        <div className='ChessRow'>
            <Square piece='K'/><Square piece='K'/><Square piece='K' />
        </div>
    );
}

export default ChessRow;