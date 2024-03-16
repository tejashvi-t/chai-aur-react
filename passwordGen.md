# notes for password generator

```javascript
function passGen(pass, str, numberAllowed, charAllowed, length) {
  if (numberAllowed) {
    str += "0123456789";
  }

  if (charAllowed) {
    str += "!@#$%^&*-_+=[]{}~`";
  }

  for (i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  return pass;
}

let pass = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numberAllowed = false;
let charAllowed = false;
let length = 8;
const ANS = passGen(pass, str, numberAllowed, charAllowed, length);
console.log(ANS);
```
