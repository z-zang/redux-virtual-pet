const initialState = {
  names: {
    petName: 'asdf',
    userName: 'ghjk',
  },
  stats: {
    health: 100,
    hunger: 100,
    mood: 'neutral',
    happiness: 60,
    exp: 0,
    money: 0,
  },
  hidden:{
    susceptibility: 0.3,
  },
  items: [
    {
      name: 'medicine',
      flavor: 'heals your pet if they are sick',
      targets: ['stats.health', 10],
      perishable: true
    },
    {
      name: 'grooming kit',
      flavor: 'makes your pet looks presentable',
      targets: ['stats.happiness', 20], 
      perishable: false
    },
]
}

export default initialState