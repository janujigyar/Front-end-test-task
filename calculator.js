function calculator(string) {
  // код пишите внутри этой функции
    var str = string.toUpperCase();

    var roman_dig = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

    str = str.replace(/\s/g, '');
    var res = str.split(/[-+/*]/);
 
    var a = parseInt(res[0]);
    var b = parseInt(res[1]);
  
    var is_arab = (str != res)&&(!isNaN(a))&&(!isNaN(b))&&(res.length == 2)&&(a >= 1 && a <= 10)&&(b >= 1 && b <= 10);
    
    var is_roman = false;
    
    if (!is_arab){
      a = roman_dig.indexOf(res[0]) + 1;
      b = roman_dig.indexOf(res[1]) + 1;
        
      is_roman = (str != res)&&(a * b > 0)&&(res.length == 2)&&(a >= 1 && a <= 10)&&(b >= 1 && b <= 10);
    }
  
    var result = 0;
  
    if (is_arab || is_roman) {
      var sign = str.substr(res[0].length, 1);
      switch (str.substr(res[0].length, 1)){
        case "+":
            result = a + b;
              break;
          case "-":
            result = a - b;
              break;
          case "*":
            result = a * b;
              break;
          case "/":
            result = parseInt(a / b);
              break;
      }
    }
  
  var arab_digs = [1,4,5,9,10,40,50,90,100];
  var roman_digs = ["I","IV","V","IX","X","XL","L","XC","C"];
  
  var roman_res = "";
  
  if (is_roman && result > 0){
    var n = arab_digs.length - 1;
    while (result > 0) {
      if (result >= arab_digs[n]) {
          roman_res += roman_digs[n];
          result -= arab_digs[n];
      }
      else n--;
    }
    
  }
  
  if (is_arab || is_roman){
    if (is_arab){
      return result.toString();
     } 
     else return roman_res;
  }
  else return ThrowError();

}

module.exports = calculator; // Не трогайте эту строчку
