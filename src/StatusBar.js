import React from 'react';

// STATELESS COMPONENT, child of App.js
function StatusBar (props) {
    const { handleStartGame, gameStart, players, gameStatus, currentPlayer } = props;

    function updateStatus () {
        switch (gameStatus) {
            case 'positioning':
                return `Let's go, ${currentPlayer.name}! Pick a tile to move to`;
            case 'firing':
                return 'Now take your best shot, soldier!'
            default:
                return '';
        }
    }

    return (
        <div>
            { updateStatus() }
            <button className="startBtn" onClick={handleStartGame}>Start Game</button>
        </div>
    )
}

export default StatusBar;