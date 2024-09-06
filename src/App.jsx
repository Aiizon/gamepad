import Gamepad from "./Gamepad.jsx";
import Board from "./Board.jsx";
import './App.css'
import {useEffect, useState} from "react";

export default function App() {
    const [position , setPosition] = useState({left: 50, top: 50});

    // handles movement from (dx, dy) pairs, coming from either gamepad or keypresses
    const handleMove = (dx, dy) => {
        setPosition(({left, top}) => {
            const newPosition = {
                left: left + dx,
                top: top + dy
            };
            if (newPosition.left < 0) {
                newPosition.left = 0;
            }
            if (newPosition.left > 100) {
                newPosition.left = 100;
            }
            if (newPosition.top < 0) {
                newPosition.top = 0;
            }
            if (newPosition.top > 100) {
                newPosition.top = 100;
            }
            return newPosition;
        });
    };

    // adds event listener for keyboard input, triggering movement handling function
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    handleMove(0, -10);
                    break;
                case 'ArrowRight':
                    handleMove(10, 0);
                    break;
                case 'ArrowDown':
                    handleMove(0, 10);
                    break;
                case 'ArrowLeft':
                    handleMove(-10, 0);
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <>
          <Gamepad onMove={handleMove}/>
          <Board position={position}/>
        </>
    );
}
