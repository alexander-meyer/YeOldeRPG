const movementWords = ['go', 'move', 'walk', 'run', 'travel', 'exit'];
const lookWords = ['area', 'surroundings', 'around', 'exits', 'look'];
const inventoryWords = ['bag', 'inventory', 'items', 'stuff'];
const directionWords = ['north', 'forward', 'west', 'left', 'right', 'east', 'south',];

const worldData = {
    shrine: {
        flavorText:
            'You stand in front of a shrine. A verdant orchard, obviously well cared for, surrounds you on all sides. One pear tree in particular is practically scraping the grass with its drooping branches',
        nearbyText:
            'you see an orchard enclosing a small temple',
        exits: {
            north: 'meadow'
        },
        examine: { tree: 'it\'s a tree.' },
        item: 'Pear',
        event: 'Pluck'
    },
    meadow: {
        flavorText:
            'You find yourself in a meadow. A gentle breeze blows through, causing the grass to dance and sway.',
        nearbyText:
            'lies a small clearing',
        exits: {
            west: 'trees',
            east: 'water',
            south: 'temple'
        },
        examine: '',
        item: '',
    },
    water: {
        flavorText:
            'You come to the bank of the river Kor. The water looks cool and pleasant.',
        nearbyText:
            'you can hear the sound of rushing water',
        exits: {
            west: 'meadow'
        },
        examine: '',
        item: 'Amethyst Ring',
        event: 'swim'
    },
    trees: {
        flavorText:
            'You stand at the entrance to a forest. Looming pines make it too dark to see - perhaps if there was a way to illuminate the path?',
        nearbyText:
            'you see a thick cropping of trees',
        exits: {
            east: 'meadow'
        },
        examine: ''
    },
    cabin: {
        flavorText:
            'You stumble upon an old cabin. Inside you see old bottles, rotting furniture and various papers strewn about.',
        exits: {
            north: 'trees'
        },
        examine: ''
    }
};



const art = {
    sword: `
            ()
            )(
            )(
         o======o
            ||
            ||
            ||
            ||
            ||
            ||
            ||
            ||
            ||
            \\/`,
    book: `
        __________________   __________________
    .-/|                  \\ /                  |\\-.
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||                   | up, right, right, ||||
    ||||                   | down, left        ||||
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||                   |                   ||||
    ||||__________________ | __________________||||
    ||/===================\\|/===================\\||
    \`--------------------~___~-------------------''
    `,
    lantern: `
       .-.
     _(   )_    
    /=='-'==\\
   /_________\\
    |   )   |
    |  (_)  |
    |  |'|  |
   _|__|_|__|_
   \\_________/
    `,
    key: `
       .-.     
      (   )|||||]
       '-'   l'l
    `,
    ring: `
        __
       _\\/_
      //^^\\\\
      \\\\__//
       '--'
    `,
    pear: `
         )
        _|_
       /   \\ 
      /   # \\
     (   ##  ) 
      ',___,'
    `,
    title: `
             ____________________________________________________
    ________|   __   _  _         __   __  ___   __          __  |_______
    \\       |  |__|  |  |  |\\ |  |__  /_    |   |  |  |\\ |  |__  |      /
     \\      |  |  \\  |__|  | \\|  |__  __/   |   |__|  | \\|  |__  |     /
     /      |____________________________________________________|     \\
    /__________)                                             (__________\\
        `


}
