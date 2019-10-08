const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_id',
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
    name: 'addProduct',
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
        name: 'id',
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
    inputs: [
      {
        name: '_idx',
        type: 'uint256',
      },
    ],
    name: 'getProduct',
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
    inputs: [],
    name: 'getTotal',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'products',
    outputs: [
      {
        name: 'id',
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
