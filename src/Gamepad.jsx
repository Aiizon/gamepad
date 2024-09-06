export default function Gamepad({ onMove }) {
    // gets movement handling function from app.jsx, and call it whenever buttons are clicked
    return(
        <>
            <div id="gamepad">
                <span id='up' onClick={() => onMove(0, -10)}>⬆️</span>
                <span id='left' onClick={() => onMove(-10, 0)}>⬅️</span>
                <span id='down' onClick={() => onMove(0, 10)}>⬇️</span>
                <span id='right' onClick={() => onMove(10, 0)}>➡️</span>
            </div>
        </>
    );
}