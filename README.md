In this challenge, you are required to write a function with any programming language you preferred to determine if a 9x9 Sudoku board is valid. The rules are:
- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the 3x3 sub-region must contain the digits 1-9 without repetition.

For example, if we pass this to the input of the function, it will return `true`.
```
[
  ["5","3","","","7","","","",""],
  ["6","","","1","9","5","","",""],
  ["","9","8","","","","","6",""],
  ["8","","","","6","","","","3"],
  ["4","","","8","","3","","","1"],
  ["7","","","","2","","","","6"],
  ["","6","","","","","2","8",""],
  ["","","","4","1","9","","","5"],
  ["","","","","8","","","7","9"]
]
```

Other requirements:
- Consider basic validation to the input.
- Feel free to add any number of sub functions to support your solution.
- You'll get bonus points if you could provide your own test cases.

If you are not familiar with the Sudoku rules, please find it [here](https://en.wikipedia.org/wiki/Mathematics_of_Sudoku).
