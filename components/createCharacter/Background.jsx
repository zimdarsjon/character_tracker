import React from 'react';

const { useState, useEffect } = React;


export default function Background({ backgrounds, setCharacterBackground, characterBackground }) {
  const [selectValue, setSelectValue] = useState(0);

  const handleSelect = (e) => {
    setCharacterBackground(e.target.value);
  }

  return (
    <div>
      <h1>Backgrounds</h1>
      <select onChange={handleSelect} value={characterBackground}>
        <option value={-1}>Select Background</option>
        {backgrounds.map((background, i) => {
          return <option value={i} key={background.name}>{background.name}</option>
        })}
      </select>
    </div>
  )
}