import { getSession } from "next-auth/react";
import React from 'react';
import axios from 'axios';
import CharacterClass from '../components/createCharacter/CharacterClass.jsx';
import Background from '../components/createCharacter/Background.jsx';
import Scores from '../components/createCharacter/Scores.jsx';
import Proficiencies from '../components/createCharacter/Proficiencies.jsx';
import Summary from '../components/createCharacter/Summary.jsx';

const { useState, useEffect } = React;

export default function CreateCharacter() {
  const [backgroundData, setBackgroundData] = useState([]);
  const [characterBackground, setCharacterBackground] = useState(-1);
  const [classData, setClassData] = useState([]);
  const [characterClass, setCharacterClass] = useState(-1);

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

  const flipPage = (next) => {
    next ? setPage(page + 1) : setPage(page - 1);
  }

  return (
    <div>
      <h1>Character Creator</h1>
      {page === 1 && <Background backgrounds={backgroundData} characterBackground={characterBackground} setCharacterBackground={setCharacterBackground}/>}
      {page === 2 && <CharacterClass classes={classData} setCharacterClass={setCharacterClass} characterClass={characterClass}/>}
      {page === 3 && <Proficiencies />}
      {page === 4 && <Scores />}
      {page === 5 && <Summary />}
      {page !== 1 && <button onClick={e => flipPage(false)}>Previous</button>}
      {page !== 5 && <button onClick={e => flipPage(true)}>Next</button>}
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