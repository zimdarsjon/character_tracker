import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    getBackgrounds(req, res);
  }
}

const getBackgrounds = (req, res) => {
  res.status(200).json(exampleData)
}



const exampleData = [{
  name: 'Acolyte',
  skills: ['insight', 'religion'],
  languages: 2,
  equipment: [
    'holy symbol',
    'prayer book',
    '5 sticks of incense',
    'vestments',
    'common clothes',
    'pouch of 15gp'
  ]},
  {name: 'Spy',
  skills: ['insight', 'religion'],
  languages: 2,
  equipment: [
    'holy symbol',
    'prayer book',
    '5 sticks of incense',
    'vestments',
    'common clothes',
    'pouch of 15gp'
  ]},
]