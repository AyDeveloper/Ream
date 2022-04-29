export const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "contractAddr",
          "type": "address"
        }
      ],
      "name": "CreateReam",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "allReamTreasury",
      "outputs": [
        {
          "internalType": "contract Ream[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_adminAddr",
          "type": "address"
        }
      ],
      "name": "createReamTreasury",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getReamTreasury",
      "outputs": [
        {
          "internalType": "contract Ream",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]