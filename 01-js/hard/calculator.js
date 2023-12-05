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
*/



class Calculator {
  constructor(initial=0){
    this.result = initial;
  }

  add(val){
    this.result += val;
  }

  subtract(val){
    this.result -= val;
  }

  multiply(val){
    this.result *= val;
  }

  divide(val){
    // if(val === 0){
    //   throw "cannot divide by zero";
    // }
    this.result /= val;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(expression){
    const regExp = /[a-zA-Z]/g;
    if (regExp.test(expression)){
      throw "invalid expression"
    }
    res = calculate_infix(expression);
    this.result = res;
  }

}

function prec(op){
  if (op == '^'){
      return 3;
  }
  else if(op == '*' || op=='/'){
      return 2;
  }
  else if(op =='+' || op=='-'){
      return 1;
  }
  else{
      return -1;
  }
}

function infix_to_postfix(infix){
  // removing whitespaces
  infix = infix.replace(/ /g,'');
  let stack = [];
  let postfix = '';
  for(i=0;i<infix.length;i++){
      char = infix[i];

      // if operand, add to postfix
      if(char >='0' && char <='9'){
          postfix+=char;
      }
      // if ( , add to stack
      else if(char == '('){
          stack.push(char);
      }
      // if ). pop from stack till ) is found and then pop it too
      else if(char==')'){
          while( stack.length > 0 && stack[stack.length - 1] !='('){
              postfix+=stack[stack.length - 1];
              stack.pop();
          }
          stack.pop(); // removing the '('
      }
      // if operator and prec(chr) <= prec(stack[top]), pop from stack and add to postfix
      else{
          while(stack.length > 0 && prec(char) <= prec(stack[stack.length -1])){
              postfix+=stack[stack.length-1];
              stack.pop();
          }
          stack.push(char);
      }
  }

  // emptying the stack into the expression
  while(stack.length>0){
      postfix+=stack[stack.length-1];
      stack.pop();
  }
  return postfix;
}

// infix = "a+b*(c^d-e)^(f+g*h)-i";
// console.log(infix_to_postfix(infix));


// need a function to evaluate postfix notation
function evaluate_postfix(postfix){
  // removing whitespaces
  postfix = postfix.replace(/ /g,'');
  stack = []
  operators = ['+','-','*','/','^'];
  for(i=0; i < postfix.length; i++){
      char = postfix[i];
      if( operators.includes(char)){
          op2 = parseFloat(stack.pop());
          op1 = parseFloat(stack.pop());
          res = calculate_op(op1, op2, char);
          stack.push(res);
      }
      else{
          stack.push(parseFloat(char));
      }
  }
  return stack[stack.length - 1];

}

function calculate_op(op1, op2, operator){
  if( operator == '+'){
      return op1 + op2;
  }
  else if(operator == '-'){
      return op1 - op2;
  }
  else if(operator == '*'){
      return op1*op2;
  }
  else if(operator == '/'){
      return op1/op2;
  }
  else if(operator == '^'){
      return op1 ^ op2;
  }
}

function calculate_infix(infix){
  postfix = infix_to_postfix(infix);
  res = evaluate_postfix(postfix);
  return res
}

// infix = '1 + (3/2)'
// console.log(calculate_infix(infix));

module.exports = Calculator;
