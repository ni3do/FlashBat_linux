ADDRESS = "0xD152f549545093347A162Dce210e7293f1452150"

ABI = [
    {
        "constant": False,
        "inputs": [
            {"name": "token", "type": "address"},
            {"name": "recipients", "type": "address[]"},
            {"name": "values", "type": "uint256[]"},
        ],
        "name": "disperseTokenSimple",
        "outputs": [],
        "payable": False,
        "stateMutability": "nonpayable",
        "type": "function",
    },
    {
        "constant": False,
        "inputs": [
            {"name": "token", "type": "address"},
            {"name": "recipients", "type": "address[]"},
            {"name": "values", "type": "uint256[]"},
        ],
        "name": "disperseToken",
        "outputs": [],
        "payable": False,
        "stateMutability": "nonpayable",
        "type": "function",
    },
    {
        "constant": False,
        "inputs": [
            {"name": "recipients", "type": "address[]"},
            {"name": "values", "type": "uint256[]"},
        ],
        "name": "disperseEther",
        "outputs": [],
        "payable": True,
        "stateMutability": "payable",
        "type": "function",
    },
]
