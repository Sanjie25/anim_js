
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gameOver = document.getElementById("game_over")
const div = document.getElementById("mydiv")
const start = document.getElementById("start")
const startPage = document.getElementById("startpage")
div.style.cursor = "none";
canvas.style.display = "none";


canvas.width = 1600;
canvas.height = 900;
ctx.globalCompositeOperation = "source-over";

let gameLoop = false;


const data = {
  "A": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ]
  ],
  "B": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ]
  ],
  "C": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0
    ]
  ],
  "D": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ]
  ],
  "E": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ]
  ],
  "F": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ]
  ],
  "G": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ]
  ],
  "H": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ]
  ],
  "I": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ]
  ],
  "J": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ]
  ],
  "K": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0
    ]
  ],
  "L": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ]
  ],
  "M": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1
    ],
    [
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ]
  ],
  "N": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ]
  ],
  "O": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ]
  ],
  "P": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ]
  ],
  "Q": [
    [
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1
    ]
  ],
  "R": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ]
  ],
  "S": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0
    ]
  ],
  "T": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ]
  ],
  "U": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0
    ]
  ],
  "V": [
    [0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0
    ]
  ],
  "W": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1
    ],
    [
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ]
  ],
  "X": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1
    ]
  ],
  "Y": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ]
  ],
  "Z": [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  ]
}
// ------------------ Directions ---------------------------------
const hypos = Math.hypot(1, 1)

const directs = {
  0: { x: (1 / hypos), y: (1 / hypos) },
  1: { x: -(1 / hypos), y: (1 / hypos) },
  2: { x: +(1 / hypos), y: -(1 / hypos) },
  3: { x: -(1 / hypos), y: -(1 / hypos) }
}

// -------------- PIXEL -----------------------------------------
class Pixel {
  constructor(x, y, spx, spy, size, color = "#fff") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.spx = spx;
    this.spy = spy;
    this.gravity = 0.5;
    this.life = 180;
  }

  update(vx, vy) {
    this.spx = vx;
    this.spy = vy;
    if (this.life > 0) {
      this.x += this.spx;
      this.y += this.spy;
    }
    this.x += this.vx;
    this.y += this.vy;

    if (this.vx != 0 || this.vy != 0) {
      this.vy += this.gravity;
      this.life--;
    }
  }

  break() {
    this.vx = (Math.random() + 1) * 10;
    this.vy = (Math.random() + 1) * 10;
    this.color = '#ff0000';
  }

  draw(ctx) {
    if (this.life > 0) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  alive() {
    return this.life > 0;
  }
}
// ------------------ PIXEL END --------------------------------

// --------------------- WORD -----------------------------------
class Word {
  constructor(x, y, word, alive = true, pixels = [], size = 10) {
    this.x = x;
    this.y = y;
    this.word = word;
    this.speed = 8;
    this.vx = 2 * directs[Math.floor(Math.random() * 4)].x;
    this.vy = 2 * directs[Math.floor(Math.random() * 4)].y;
    this.pixels = pixels;
    this.size = size;
    this.alive = true;
    this.canFire = true;
    this.lastFireTime = 0;
    this.fireRate = 100;
    this.dir = directs[Math.floor(Math.random() * 4)];

    this.getPixels();
  }


  getPixels() {
    for (let i = 0; i < this.word.length; i++) {
      let grid = data[this.word[i]];

      grid.forEach((row, j) => {
        row.forEach((column, k) => {
          if (column == 1) {
            let pic = new Pixel(this.x + i * 80 + k * this.size, this.y + j * this.size, this.vx, this.vy, this.size);
            this.pixels.push(pic);
          }
        });
      });
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // console.log(this.x, this.vx);
    const area = this.getArea();
    if (!(area.y + area.height < canvas.height * 1.9 && area.y > 0)) {
      this.y -= this.vy;
      this.vy = -this.vy;
    }
    if (!(area.x + area.width < canvas.width && area.x > 0)) {
      this.x -= this.vx;
      this.vx = -this.vx;
    }

    this.pixels.forEach((pixel) => pixel.update(this.vx, this.vy));

    this.pixels = this.pixels.filter(pixel => pixel.alive());

    if (this.pixels.length == 0) {
      this.alive = false;
    }
  }

  draw(ctx) {
    // console.log(this.pixels);
    for (let index = 0; index < this.pixels.length; index++) {
      const element = this.pixels[index];
      element.draw(ctx);
    }
  }

  fire(dir) {
    const currentTime = Date.now();
    if ((currentTime - this.lastFireTime > this.fireRate) && this.canFire) {
      this.lastFireTime = currentTime;
      const posX = this.x + (this.word.length * (this.size * 10)) / 2;
      const posY = this.y + 40;
      return new Bullet(posX, posY, 8 * dir.x, 8 * dir.y, "#ff7777");
    }
    return null;
  }

  getArea() {
    if (this.pixels.length == 0) return null;
    let minX = this.pixels[0].x;
    let maxX = this.pixels[0].x + (this.pixels[0].size * 8);
    let minY = this.pixels[0].y;
    let maxY = this.pixels[0].y + (this.pixels[0].size * 8);

    this.pixels.forEach(pixel => {
      minX = Math.min(minX, pixel.x);
      maxX = Math.max(maxX, pixel.x + pixel.size);
      minY = Math.min(minY, pixel.y);
      maxY = Math.max(maxY, pixel.y + pixel.size);
    });

    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY, minY
    };
  }

  hit(bullet) {
    this.pixels.forEach(pixel => {
      if (bullet.x < pixel.x + pixel.size &&
        bullet.x + bullet.size > pixel.x &&
        bullet.y < pixel.y + pixel.size &&
        bullet.y + bullet.size > pixel.y) {
        this.pixels.forEach(p => p.break());
        this.canFire = false;
        return true;
      }
    })
    return false;
  }
}
// ------------------------------ WORD END ---------------------

// --------------------------- BULLET -------------------------
class Bullet {
  constructor(x, y, vx, vy, color = "#ffff00") {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = 4;
    this.alive = true;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.alive = false;
    }
  }

  draw(ctx) {
    if (this.alive) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  getArea() {
    return {
      x: this.x,
      y: this.y,
      width: this.size,
      height: this.size
    };
  }
}
// --------------------------- BULLLET END ---------------------

// ----------------------------- PLAYER ------------------------------------
class Player {
  constructor(x, y, vx, vy, health = 10, power = "weakling") {
    this.x = x;
    this.y = y;
    this.health = health;
    this.vx = vx;
    this.vy = vy;
    this.size = 30;
    this.health = health;
    this.power = power;
    this.alive = true;
    this.lastFireTime = 0;
    this.fireRate = 200;

    // defining the path;
    this.path = new Path2D();

  }

  update() {
    this.y += this.vy;
    this.x += this.vx;
    if (!(this.y + this.size * 2 < canvas.height && this.y > 0)) {
      this.y -= this.vy;
    }
    if (!(this.x + this.size * 2 + 20 < canvas.width && this.x > 0)) {
      this.x -= this.vx;
    }
    this.vx = 0;
    this.vy = 0;
  }

  draw(ctx) {
    if (!this.alive) return;
    ctx.save();
    // simple triangle ship
    ctx.beginPath();
    ctx.arc(this.x + this.size, this.y + this.size, 30, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = '#7fffd4';
    ctx.fill();
    ctx.restore();

  }

  fire(vx, vy) {
    const currentTime = Date.now();
    if (currentTime - this.lastFireTime > this.fireRate) {
      this.lastFireTime = currentTime;
      return new Bullet(this.x + this.size * 2, this.y + this.size, vx, vy, "#00ffff");
    }
    return null;
  }

  getArea() {
    return {
      x: this.x,
      y: this.y,
      width: this.size * 2 + 20,
      height: this.size * 2,
    }
  }
  hit(bullet) {
    if (bullet.x < this.x + this.size * 2 &&
      bullet.x + bullet.size > this.x &&
      bullet.y < this.y + this.size * 2 &&
      bullet.y + bullet.size > this.y) {
      return true;
    }
    return false;
  }
}
// ------------------------------- PLAYER END --------------------------


let player1 = new Player(25, 25, 0, 0);
let words = [
  new Word(1100, 100, "MARIA", true),
  new Word(600, 400, "SINA", true),
  new Word(100, 800, "ROSE", true),
];
let playerBullets = [];
let enemyBullets = [];
let mousePos = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

const keys = {};

document.addEventListener('keydown', (e) => {
  keys[e.code] = true;
})

document.addEventListener('keyup', (e) => {
  keys[e.code] = false;
})

function inputs() {
  if (keys['ArrowUp'] || keys['KeyW']) {
    player1.vy = -5;
  }

  if (keys['ArrowDown']) {
    player1.vy = 5;
  }
  if (keys['ArrowRight']) {
    player1.vx = 5;
  }

  if (keys['ArrowLeft']) {
    player1.vx = -5;
  }

  if (keys['Space']) {
    const distX = -(player1.x - mousePos.x);
    const distY = -(player1.y - mousePos.y);
    const hypo = Math.hypot(distY, distX)
    const bullet = player1.fire(10 * (distX / hypo), 10 * (distY / hypo));
    if (bullet) {
      playerBullets.push(bullet);
    }
  }
}

// if (keys['Space']) {
//   const distX = abs(player1.x - mousePos.x);
//   const distY = abs(player1.y - mousePos.y);
//   const bullet = player1.fire(10 * Math.tan(distY / distX), 10 * (1/*Math.tan(distY/distX)));
//   if (bullet) {
//     playerBullets.push(bullet);
//   }
// }
function collisions() {
  for (let index = 0; index < playerBullets.length; index++) {
    const bullet = playerBullets[index];

    if (!bullet.alive) continue;

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (!word.alive) continue;

      if (word.hit(bullet)) {
        bullet.alive = false;
        break;
      }

    }
  }

  for (let index = 0; index < enemyBullets.length; index++) {
    const bullet = enemyBullets[index];

    if (!bullet.alive || !player1.alive) continue;


    if (player1.hit(bullet)) {

      // console.log("hit!");
      bullet.alive = false;

      // window.location.reload()
      canvas.style.display = "none";
      gameOver.style.display = "block";
    }
  }
}

function update() {
  inputs();
  player1.update();
  words.forEach(word => {
    if (word.alive) {
      word.update();
      const bullet = word.fire(directs[Math.floor(Math.random() * 4)]);
      if (bullet) {
        enemyBullets.push(bullet);
      }
    }
  });


  playerBullets.forEach(bullet => bullet.update());
  playerBullets = playerBullets.filter(bullet => bullet.alive);
  enemyBullets.forEach(bullet => bullet.update());
  enemyBullets = enemyBullets.filter(bullet => bullet.alive);

  collisions();

  const aliveWords = words.filter(word => word.alive);
  if (aliveWords.length < 3) {
    words.push(new Word(1100, (Math.random() * 800), "RANDOM"));
  }
  if (aliveWords.length == 0) {
    console.log("all dead");
    // ctx.font = '40px sans-serif';
    // ctx.textAlign = 'center';
    // ctx.fillText("you won", canvas.width / 2, canvas.height / 2);
  }
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0 0 0 / 100%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ctx.fillStyle = "rgba(255 255 255 / 75%)";
  ctx.fillStyle = "rgba(0 255 0 / 50%)";
  ctx.fillRect(mousePos.x, mousePos.y, 5, 5);
  ctx.fillRect(mousePos.x + 10, mousePos.y, 15, 5);
  ctx.fillRect(mousePos.x - 20, mousePos.y, 15, 5);
  ctx.fillRect(mousePos.x, mousePos.y + 10, 5, 15);
  ctx.fillRect(mousePos.x, mousePos.y - 20, 5, 15);

  player1.draw(ctx);
  words.forEach(word => {
    word.draw(ctx);
  });

  playerBullets.forEach(bullet => bullet.draw(ctx));
  enemyBullets.forEach(bullet => bullet.draw(ctx));
}


function init() {
  if (gameLoop) {
    update();
    draw();
    window.requestAnimationFrame(init);
  }
}

start.addEventListener("click", () => {
  console.log("game: ", gameLoop);

  gameLoop = true;
  startPage.style.display = "none";
  canvas.style.display = "block";
  init();
  console.log("click ", gameLoop);
})
