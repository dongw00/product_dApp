const abi = [
  {
    constant: true,
    inputs: [],
    name: "getTotal",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "products",
    outputs: [
      {
        name: "productName",
        type: "string"
      },
      {
        name: "locaton",
        type: "string"
      },
      {
        name: "count",
        type: "uint256"
      },
      {
        name: "timestamp",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_idx",
        type: "uint256"
      }
    ],
    name: "getProduct",
    outputs: [
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_productName",
        type: "string"
      },
      {
        name: "_location",
        type: "string"
      },
      {
        name: "_count",
        type: "uint256"
      }
    ],
    name: "addProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "productName",
        type: "string"
      },
      {
        indexed: false,
        name: "location",
        type: "string"
      },
      {
        indexed: false,
        name: "count",
        type: "uint256"
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "product",
    type: "event"
  }
];
