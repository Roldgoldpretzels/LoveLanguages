// All pixel art grids & palettes — 16×16 icons
// '.' = transparent pixel

export const ICON_PALETTES = {
  words: {
    B: '#9b5de5',   // purple border
    w: '#ede0ff',   // light interior
    D: '#7c3fc8',   // text dots
  },
  acts: {
    S: '#56e88a',   // bright green
    s: '#2db860',   // darker green center
  },
  gifts: {
    B: '#c8900a',   // gold border
    b: '#fff7cc',   // light box fill
    r: '#ff6b8a',   // pink ribbon
    R: '#cc3f60',   // ribbon shadow
  },
  time: {
    B: '#4acfff',   // cyan frame
    s: '#ffe066',   // gold sand top
    S: '#ffb833',   // orange sand bottom
  },
  touch: {
    P: '#ff6b8a',   // hot pink
    p: '#ffaabf',   // light pink highlight
  },
};

export const ICON_ROWS = {
  // Speech bubble — Words of Affirmation (16×16)
  words: [
    '................',
    '..BBBBBBBBBBB...',
    '.BwwwwwwwwwwwB..',
    '.BwwwwwwwwwwwB..',
    '.BwDDDwwDDDwwB..',
    '.BwwwwwwwwwwwB..',
    '.BwDDDDDwwwwwB..',
    '.BwwwwwwwwwwwB..',
    '.BwDDwwwwwwwwB..',
    '.BwwwwwwwwwwwB..',
    '..BBBBBBBBBBB...',
    '....BBB.........',
    '......B.........',
    '................',
    '................',
    '................',
  ],
  // 4-pointed star — Acts of Service (16×16)
  acts: [
    '.......SS.......',
    '.......SS.......',
    '.......SS.......',
    '......SSSS......',
    '...SSSSSSSSss...',
    '..SSSSSssSSSSS..',
    'SSSSSSSSSSSSSSSS',
    '..SSSSSssSSSSS..',
    '...SSSSSSSSss...',
    '......SSSS......',
    '.......SS.......',
    '.......SS.......',
    '.......SS.......',
    '................',
    '................',
    '................',
  ],
  // Gift box with ribbon bow — Receiving Gifts (16×16)
  gifts: [
    '......rr........',
    '.....rRRr.......',
    '....rrRRrrr.....',
    '..BBBBBBBBBBB...',
    '..BrRrRrRrRrB...',
    '..BBBBBBBBBBB...',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BbbbbbbbbbbB..',
    '..BBBBBBBBBBB...',
    '................',
    '................',
  ],
  // Hourglass — Quality Time (16×16)
  time: [
    '..BBBBBBBBBBBB..',
    '..BssssssssssB..',
    '...BBssssssBB...',
    '....BBssssBB....',
    '.....BBssBB.....',
    '......BBBB......',
    '.....BBSSBB.....',
    '....BBSSSSBB....',
    '...BBSSSSSSBB...',
    '..BSSSSSSSSSSB..',
    '..BBBBBBBBBBBB..',
    '................',
    '................',
    '................',
    '................',
    '................',
  ],
  // Heart — Physical Touch (16×16)
  touch: [
    '................',
    '..PPP...PPP.....',
    '.PPPPP.PPPPP....',
    'PPPPPPPPPPPPPPP.',
    'PPpPPPPPPpPPPPP.',
    'PPPPPPPPPPPPPPP.',
    'PPPPPPPPPPPPPPP.',
    '.PPPPPPPPPPPPP..',
    '..PPPPPPPPPPP...',
    '...PPPPPPPPP....',
    '....PPPPPPP.....',
    '.....PPPPP......',
    '......PPP.......',
    '.......P........',
    '................',
    '................',
  ],
};
