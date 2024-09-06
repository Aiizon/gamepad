export default function Board({ position }) {
    // gets position from props (coming from app.jsx) and sets css properties for player
    return (
        <div id="board">
            <span id="player" style={{left: `${position.left}%`, top: `${position.top}%`}}>🦆</span>
        </div>
    );
}