#Notepad

## Transforming Object into Array 
### object.keys zwraca tablicę kluczy z danego obiektu

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]