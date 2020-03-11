// By Omar Abdelmotaleb

var result = 0;
var currentOp = "0";
var buffer = 0;
setDisplay("0");

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = 0;
   currentOp = "0";
   buffer = 0;
   setDisplay("0");
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   var displayText = document.getElementById("output");
   displayText.innerText = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if (result === 0)
   {
      result = num;
   }
   else
   {
      p = parseInt(result.toString() + num.toString());
      if (p >= 999999999)
      {
         result = 999999999;
      }
      else if(p <= -999999999)
      {
         result = -999999999;
      }
      else
      {
         result = p;
      }
   }

   setDisplay(result.toString());

}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {

   if(currentOp === "0")
   {
      buffer = result;
      result = 0;
   }
   setDisplay("0");
   
   currentOp = op;

}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   
   var res = "";

   if (currentOp != "0")
   {

      switch(currentOp)
      {

         case "+":
            result = buffer + result;
            res = result.toString();
            break;

         case "-":
            result = buffer - result;
            res = result.toString();
            break;

         case "*":
            result = buffer * result;
            res = result.toString();
            break;

         case "/":
            if (result === 0 && buffer === 0)
            {
               result = 0;
               res = "ERROR";
               break;
            }
            result = Math.floor(buffer / result);
            res = result.toString();
            break;
         
      }

      if(result > 999999999)
      {
         result = 999999999;
      }
      if(result < -999999999)
      {
         result = -999999999;
      }

      setDisplay(res);

   }

}