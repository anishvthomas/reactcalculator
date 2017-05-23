export default function operate(firstNumber,secondNumber,operator) {
	var n1 = new Number(firstNumber);
	var n2 = new Number(secondNumber);
  var result=null;
  switch (operator)
  {
  	case "+": console.log("+");
    					result=n1+n2;
    					break;
    case "-":console.log("-");
    					result=n1-n2;
    					break;
    case "/":console.log("-");
    					result=n1/n2;
    					break;
    case "X":console.log("X");
    					result=n1*n2;
    					break;
    default: console.log(operator);
   					 break;
  }
  return result?result.toString():result;
}
