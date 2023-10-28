import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameChange = <span className="player-name">{playerName}</span>;
  if (isEditing === true) {
    playerNameChange = (
      <input
        type="text"
        defaultValue={playerName}
        onChange={handleNameChange}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameChange}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
