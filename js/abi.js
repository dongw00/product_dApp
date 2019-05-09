const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_initNumber',
        type: 'uint256',
      },
      {
        name: '_firstString',
        type: 'string',
      },
      {
        name: '_secondString',
        type: 'string',
      },
    ],
    name: 'addProStru',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'number',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'productName',
        type: 'string',
      },
      {
        indexed: false,
        name: 'location',
        type: 'string',
      },
      {
        indexed: false,
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'product',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'getNumOfProducts',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getProductStruct',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'string',
      },
      {
        name: '',
        type: 'string',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'productes',
    outputs: [
      {
        name: 'number',
        type: 'uint256',
      },
      {
        name: 'productName',
        type: 'string',
      },
      {
        name: 'locaton',
        type: 'string',
      },
      {
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
