
function colorAlphaAjusted(c, a) {  
  // against white background  
  return c * a + 255 * (1 - a);  
}  
function rgbaToRgb(r, g, b, a) {  
  return [colorAlphaAjusted(r, a), colorAlphaAjusted(g, a), colorAlphaAjusted(b, a) ];  
}  
function componentToHex(c) {  
  var hex = c.toString(16);  
  return hex.length == 1 ? "0" + hex : hex;  
}  
function convert(e) {  
  e.preventDefault();  
  var red = document.getElementById('red');  
  var green = document.getElementById('green');  
  var blue = document.getElementById('blue');  
  var alpha = document.getElementById('alpha');  
  var rValue = red && red.value;  
  var gValue = green && green.value;  
  var bValue = blue && blue.value;  
  var aValue = alpha && alpha.value;  
  aValue /= 100;  
  var [r, g, b] = rgbaToRgb(rValue, gValue, bValue, aValue);  
  document.getElementById('result').innerHTML = "#" + componentToHex(Math.round(r)) + componentToHex(Math.round(g)) + componentToHex(Math.round(b));  
  return false;  
}  
