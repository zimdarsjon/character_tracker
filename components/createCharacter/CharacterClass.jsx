import React from 'react';

const { useState } = React;

export default function CharacterClass({ classes, setCharacterClass, characterClass}) {
  const [selectValue, setSelectValue] = useState(0);

  const handleSelect = (e) => {
    setCharacterClass(e.target.value);
  }

  return (
    <div>
      <h1>Classes</h1>
      <select onChange={handleSelect} value={characterClass}>
        <option value={-1}>Select Class</option>
        {classes.map((charClass, i) => {
          return <option value={i} key={charClass.name}>{charClass.name}</option>
        })}
      </select>
    </div>
  )
}