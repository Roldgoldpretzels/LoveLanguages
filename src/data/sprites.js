// All pixel art grids & palettes
// '.' = transparent pixel

// ── 12×12 love language icons ───────────────────────────────────────────────
export const ICON_PALETTES = {
  words: {
    B: '#9b5de5',   // purple border
    w: '#ede0ff',   // light interior
    D: '#7c3fc8',   // text dots
  },
  acts: {
    S: '#56e88a',   // green
    s: '#2db860',   // shadow
  },
  gifts: {
    B: '#c8900a',   // gold border
    b: '#fff7cc',   // light box fill
    r: '#ff6b8a',   // pink ribbon
    R: '#cc3f60',   // ribbon shadow
  },
  time: {
    B: '#4acfff',   // blue border
    s: '#ffe066',   // gold sand (top half)
    S: '#ffb833',   // gold sand (bottom half)
  },
  touch: {
    P: '#ff6b8a',   // hot pink
    p: '#ffaabf',   // light pink highlight
  },
};

export const ICON_ROWS = {
  // Chat bubble (words of affirmation)
  words: [
    '.BBBBBBBBBB.',
    'BwwwwwwwwwwB',
    'BwwwwwwwwwwB',
    'BwwwDwwDwwwB',
    'BwwwwwwwwwwB',
    'BwwDDDwwwwwB',
    'BwwwwwwwwwwB',
    'BwwwwwwwwwwB',
    '.BBBBBBBBBB.',
    '....BBB.....',
    '......B.....',
    '............',
  ],
  // Cross/sparkle (acts of service)
  acts: [
    '.....SS.....',
    '.....SS.....',
    '.....SS.....',
    'SSSSSSSSSSSS',
    'SSSSSSSSSSSS',
    '.....SS.....',
    '.....SS.....',
    '.....SS.....',
    '..S.....S...',
    '...S...S....',
    '............',
    '............',
  ],
  // Wrapped gift box
  gifts: [
    '....rr......',
    '...rrrr.....',
    '..BBBBBBBB..',
    '..BrRrRrRB..',
    '..BBBBBBBB..',
    '..BbbbbbbB..',
    '..BbbbbbbB..',
    '..BbbbbbbB..',
    '..BbbbbbbB..',
    '..BBBBBBBB..',
    '............',
    '............',
  ],
  // Hourglass
  time: [
    '.BBBBBBBBBB.',
    '.BssssssssB.',
    '..BBsssssBB.',
    '....BsssB...',
    '.....BsB....',
    '.....BBB....',
    '.....BSB....',
    '....BSSSB...',
    '..BBSSSSSBB.',
    '.BSSSSSSSSB.',
    '.BBBBBBBBBB.',
    '............',
  ],
  // Heart
  touch: [
    '............',
    '.PPP...PPP..',
    'PPPPPPPPPPPP',
    'PPpPPPPpPPPP',
    'PPPPPPPPPPPP',
    '.PPPPPPPPPP.',
    '..PPPPPPPP..',
    '...PPPPPP...',
    '....PPPP....',
    '.....PP.....',
    '............',
    '............',
  ],
};
