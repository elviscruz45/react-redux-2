"use strict";

var hola = [{
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157'
  },
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications'
  },
  email: "Nathan@yesenia.net",
  id: 3,
  name: "Clementine Bauch",
  phone: "1-463-123-4447",
  username: "Samantha",
  website: "ramiro.info"
}];
console.log("address" in hola[0]);
var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var prop in obj) {
  console.log(prop, obj[prop]);
}

var casa = {
  address: {
    street: 'Douglas Extension',
    suite: 'Suite 847',
    city: 'McKenziehaven',
    zipcode: '59590-4157'
  },
  company: {
    name: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    bs: 'e-enable strategic applications'
  },
  email: "Nathan@yesenia.net",
  id: 3,
  name: "Clementine Bauch",
  phone: "1-463-123-4447",
  username: "Samantha",
  website: "ramiro.info"
};
console.log("address" in casa);