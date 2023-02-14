import React from 'react';
import axios from 'axios';


const { useState, useEffect } = React;

export default function Proficiencies({ characterClass, skills, setSkillSelections }) {

  return (
    <div>
      <h1>Proficiencies & Language</h1>
      {skills.map(skill => {
        return <h2 key={skill.name}>{skill.name} - {skill.from}</h2>
      })}
      <h1>Select from below</h1>
      {characterClass && characterClass.skillOptions.map(skill => {
        return <h2>{skill}</h2>
      })}
    </div>
    )
}