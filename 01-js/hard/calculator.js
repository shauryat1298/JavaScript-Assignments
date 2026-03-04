/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this;
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero');
    }
    this.result /= number;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove spaces
    const expr = expression.replace(/\s+/g, '');

    // Validate expression contains only valid characters
    if (!/^[\d+\-*/(). ]+$/.test(expr.replace(/\s/g, ''))) {
      throw new Error('Invalid characters in expression');
    }

    // Validate parentheses
    let parenCount = 0;
    for (let char of expr) {
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;
      if (parenCount < 0) {
        throw new Error('Invalid parentheses');
      }
    }
    if (parenCount !== 0) {
      throw new Error('Invalid parentheses');
    }

    try {
      this.result = this.evaluate(expr);
    } catch (error) {
      if (error.message.includes('Division by zero') || error.message.includes('Invalid')) {
        throw error;
      }
      throw new Error('Invalid expression');
    }
    return this;
  }

  evaluate(expr) {
    let pos = 0;

    const parseNumber = () => {
      let num = '';
      while (pos < expr.length && /[\d.]/.test(expr[pos])) {
        num += expr[pos];
        pos++;
      }
      if (num === '' || num === '.') {
        throw new Error('Invalid number');
      }
      return parseFloat(num);
    };

    const parseFactor = () => {
      if (expr[pos] === '(') {
        pos++; // skip '('
        const result = parseExpression();
        if (expr[pos] !== ')') {
          throw new Error('Missing closing parenthesis');
        }
        pos++; // skip ')'
        return result;
      } else if (expr[pos] === '-') {
        pos++;
        return -parseFactor();
      } else if (expr[pos] === '+') {
        pos++;
        return parseFactor();
      }
      return parseNumber();
    };

    const parseTerm = () => {
      let result = parseFactor();
      while (pos < expr.length && (expr[pos] === '*' || expr[pos] === '/')) {
        const op = expr[pos];
        pos++;
        const right = parseFactor();
        if (op === '*') {
          result *= right;
        } else {
          if (right === 0) {
            throw new Error('Division by zero');
          }
          result /= right;
        }
      }
      return result;
    };

    const parseExpression = () => {
      let result = parseTerm();
      while (pos < expr.length && (expr[pos] === '+' || expr[pos] === '-')) {
        const op = expr[pos];
        pos++;
        const right = parseTerm();
        if (op === '+') {
          result += right;
        } else {
          result -= right;
        }
      }
      return result;
    };

    const result = parseExpression();
    if (pos !== expr.length) {
      throw new Error('Invalid expression');
    }
    return result;
  }
}

module.exports = Calculator;