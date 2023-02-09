import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    getBackgrounds(req, res);
  }
}

const getBackgrounds = (req, res) => {
  res.status(200).json(exampleData)
}



const exampleData = [
  {
    name: 'Acolyte',
    skills: ['Insight', 'Religion'],
    languages: 2,
    equipment: [
      'holy symbol',
      'prayer book',
      '5 sticks of incense',
      'vestments',
      'common clothes',
      'pouch of 15gp'
    ]
  },
  {
    name: 'Spy',
    skills: ['Deception', 'Stealth'],
    tools: ['thieve\'s tools', 'one gaming set'],
    equipment: [
      'crowbar',
      'dark common clothes including a hood',
      'pouch of 15gp'
    ],
    features: [
      {
        name: 'Criminal Contact',
        description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
      }
    ]
  },
]