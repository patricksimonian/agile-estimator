export const trainMapping = {
  classification: {
    epic:1,
    task: 0,
  },
  scale: {

    '-1': 0,
    '0': 0.25,
    '1': 0.5,
    '2': 0.75,
    '3': 1,
  },
  points: {
    1: 0.01,
    2: 0.02,
    3: 0.03,
    5: 0.05,
    8: 0.089,
    13: 0.15,
    21: 0.24,
    34: 0.38,
    55: 0.62,
    89: 1,
  }
};

export const trainingData = [
  {
    "input": [ 1,
       0.25,
       0.25
    ],
    "output": {
      "points": 0.03
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.05
    }
  },
  {
    "input": [ 1,
       0,
       0
    ],
    "output": {
      "points": 0.01
    }
  },
  {
    "input": [ 1,
       0.25,
       0
    ],
    "output": {
      "points": 0.02
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.02
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.03
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.08
    }
  },
  {
    "input": [ 1,
       1,
       0.25
    ],
    "output": {
      "points": 0.05
    }
  },
  {
    "input": [ 1,
       1,
       0.5
    ],
    "output": {
      "points": 0.08
    }
  },
  {
    "input": [ 1,
       0.25,
       0.5
    ],
    "output": {
      "points": 0.05
    }
  },
  
  {
    "input": [ 1,
       0.25,
       0.25
    ],
    "output": {
      "points": 0.14
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.23
    }
  },
  {
    "input": [ 1,
      0,
      0
    ],
    "output": {
      "points": 0.14
    }
  },
  {
    "input": [ 1,
      0,
       0.25
    ],
    "output": {
      "points": 0.14
    }
  },
  {
    "input": [ 1,
       0.25,
       0.25
    ],
    "output": {
      "points": 0.23
    }
  },

  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.23
    }
  },
  {
    "input": [ 1,
       0.5,
       0.5
    ],
    "output": {
      "points": 0.38
    }
  },

  {
    "input": [ 1,
       1,
       0.25
    ],
    "output": {
      "points": 0.38
    }
  },
  {
    "input": [ 1,
       1,
       0.25
    ],
    "output": {
      "points": 0.61
    }
  },
  {
    "input": [ 1,
       0.75,
       0.5
    ],
    "output": {
      "points": 0.089
    }
  },
  {
    "input": [ 1,
       0.25,
       0.5
    ],
    "output": {
      "points": 0.089
    }
  },
  {
    "input": [ 1,
       0.25,
       0.5
    ],
    "output": {
      "points": 0.38
    }
  }
  
]