import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    getClasses(req, res);
  }
}

const getClasses = (req, res) => {
  res.status(200).json(exampleData)
}



const exampleData = [
  {
    name: 'Wizard',
    skillPoints: 2,
    skillOptions: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
    equipment: ['spellbook'],
    weapons: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'],
    savingThrows: ['Intelligence', 'Wisdom'],
    equipmentOptions: [
      ['quarterstaff', 'dagger'],
      ['component pouch', 'arcane focus'],
      ['scholar\'s pack', 'explorer\'s pack']
    ]
  },
  {
    name: 'Cleric',
    skillPoints: 2,
    skillOptions: ['History', 'Insight', 'Persuasion', 'Medicine', 'Religion'],
    equipment: ['shield', 'holy symbol'],
    armor: ['light armor', 'medium armor', 'shields'],
    weapons: ['simple weapons'],
    savingThrows: ['Charisma', 'Wisdom'],
    equipmentOptions: [
      ['mace', 'warhammer'],
      ['scale mail', 'leather armor', 'chain mail'],
      ['light crossbow and 20 bolts', 'any simple weapon'],
      ['priest\'s pack', 'explorer\'s pack']
    ]
  },
  {
    name: 'Fighter',
    skillPoints: 2,
    skillOptions: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
    equipment: ['shield', 'holy symbol'],
    armor: ['all armor', 'shields'],
    weapons: ['simple weapons', 'martial weapons'],
    savingThrows: ['Strength', 'Constitution'],
    equipmentOptions: [
      ['chain mail', 'leather armor, longbow, and 20 arrows'],
      ['a martial weapon and a shield', 'two martial weapons'],
      ['light crossbow and 20 bolts', 'two handaxes'],
      ['dungeoneer\'s pack', 'explorer\'s pack']
    ]
  }
]