import { getSession } from "next-auth/react";
import React from 'react';
import axios from 'axios';
import CharacterClass from '../components/createCharacter/CharacterClass.jsx';
import Background from '../components/createCharacter/Background.jsx';
import Scores from '../components/createCharacter/Scores.jsx';
import Proficiencies from '../components/createCharacter/Proficiencies.jsx';
import Summary from '../components/createCharacter/Summary.jsx';
import { BottomNavigation, Paper, Button } from '@mui/material';

const { useState, useEffect } = React;

export default function CreateCharacter() {
  const [backgroundData, setBackgroundData] = useState([]);
  const [characterBackground, setCharacterBackground] = useState(-1);
  const [classData, setClassData] = useState([]);
  const [characterClass, setCharacterClass] = useState(-1);

  const [backgroundSkills, setBackgroundSkills] = useState([]);
  const [skillSelections, setSkillSelections] = useState([]);
  const [skills, setSkills] = useState([]);

  const [page, setPage] = useState(1);
  const [formFields, setFormFields] = useState({
    name: '',
    level: 1,
    class: '',
    background: '',
    hp: 1
  });

  useEffect(() => {
    axios.get('/api/backgrounds')
      .then(res => setBackgroundData(res.data))
      .catch((err) => console.log(err))
    axios.get('/api/classes')
      .then(res => setClassData(res.data))
      .catch((err) => console.log(err))
  }, [])

  // Update Background skills
  useEffect(() => {
    if (characterBackground !== -1) {
      setBackgroundSkills(backgroundData[characterBackground].skills)
    }
  }, [characterBackground])

  // Update Total Skills
  useEffect(() => {
    let skillList = [];
    backgroundSkills.forEach(skill => {
      skillList.push({
        name: skill,
        from: backgroundData[characterBackground].name
      })
    })
    setSkills(skillList);
  }, [backgroundSkills, skillSelections])

  const flipPage = (next) => {
    next ? setPage(page + 1) : setPage(page - 1);
  }

  return (
    <div>
      <h1>Character Creator</h1>
      {page === 1 && <Background backgrounds={backgroundData} characterBackground={characterBackground} setCharacterBackground={setCharacterBackground} />}
      {page === 2 && <CharacterClass classes={classData} setCharacterClass={setCharacterClass} characterClass={characterClass} />}
      {page === 3 && <Proficiencies skills={skills} characterClass={classData[characterClass]} setSkillSelections={setSkillSelections} />}
      {page === 4 && <Scores />}
      {page === 5 && <Summary />}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {page !== 1 && <Button onClick={e => flipPage(false)}>Previous</Button>}
          {page !== 5 && <Button sx={{marginLeft: 'auto'}} onClick={e => flipPage(true)}>Next</Button>}
        </BottomNavigation>
      </Paper>
    </div>
  )
}







export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: { session }
  }
}