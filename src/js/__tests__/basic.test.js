import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

// import Character from '../Character';

test('should mas', () => {
  const mas = [{
      attack: 25,
      defence: 25
    },
    {
      attack: 40,
      defence: 10
    },
    {
      attack: 10,
      defence: 40
    },
    {
      attack: 25,
      defence: 25
    },
    {
      attack: 40,
      defence: 10
    },
    {
      attack: 10,
      defence: 40
    },
  ];
  const b = new Bowerman();
  const s = new Swordsman();
  const m = new Magician();
  const u = new Undead();
  const z = new Zombie();
  const d = new Daemon();
  const result = [{
    attack: b.attack,
    defence: b.defence
  },
  {
    attack: s.attack,
    defence: s.defence
  },{
    attack: m.attack,
    defence: m.defence
  },{
    attack: u.attack,
    defence: u.defence
  },{
    attack: z.attack,
    defence: z.defence
  },{
    attack: d.attack,
    defence: d.defence
  },
];
  expect(result).toEqual(mas);
});




// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
