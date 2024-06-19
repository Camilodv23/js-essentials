// 2 - Funciones: add(),subtract,divide(),multiply()
function suma(firstOperator, secondOperator) {
  return firstOperator + secondOperator;
}
console.log(suma(15, 50));
function resta(firstOperator, secondOperator) {
  return firstOperator - secondOperator;
}
console.log(resta(20, 10));
function multi(firstOperator, secondOperator) {
  return firstOperator * secondOperator;
}
console.log(multi(10, 5));

// 3 - Funcion dress(temperature, isRaining)

function dress(temperature, isRaining) {
  if (isRaining == true) {
    console.log("Llevar paraguas ☂️");
  }

  if (temperature < 10) {
    console.log("Ir en auto ☂️");
  } else if (temperature > 30) {
    console.log("Ir de short 🩳");
  } else if (temperature === 30) {
    console.log("llevar lentes 🕶");
  }
}

dress(30, true);

// 4 - Funcion calculate(operation, firstOperator, secondOperator)

function calcular(operation, firstOperator, secondOperator) {
  let resultado;

  switch (operation) {
    case "sumar":
      resultado = firstOperator + secondOperator;
      break;

    case "dividir":
      resultado = firstOperator / secondOperator;
      break;

    case "multiplicar":
      resultado = firstOperator * secondOperator;
      break;

    default:
      resultado = "operacion no valida";
      break;
  }
  console.log("Resultado:", resultado);
  return resultado;
}
calcular("dividir", 140, 10);

// 5 - funcion eating(name, foods['🍔','🍟','🍗',])

function eating(name, foods) {
  for (let food of foods) {
    console.log(`${name} is eating ${food}`);
  }
}

const name = "juan";
const foods = ["🍔", "🍟", "🍗"];

eating("juan", foods);

// 6 - Funcion finalCountdown(count)

function finalCountdown(count) {
  for (let i = count; i > 0; i--) {
    console.log(i);
  }
}
finalCountdown(10);

// 7 - Funcion getGrade(score)

function getGrade(score) {
  let grade;
  switch (true) {
    case score >= 0 && score <= 40:
      grade = "D";
      break;

    case score >= 41 && score <= 60:
      grade = "R";
      break;

    case score >= 61 && score <= 74:
      grade = "B";
      break;

    case score >= 75 && score <= 84:
      grade = "BMB";
      break;

    case score >= 85 && score <= 96:
      grade = "MB";
      break;

    case score >= 97 && score <= 100:
      grade = "S";
      break;

    default:
      "score invalido";
      break;
  }
  return grade;
}

console.log(getGrade(30)); // D
console.log(getGrade(50)); // R
console.log(getGrade(72)); // B
console.log(getGrade(83)); // BMB
console.log(getGrade(90)); // MB
console.log(getGrade(100)); // S

// 8 - Funcion fillCart(person, articlesCollection)

function fillCart(person, articlesCollection) {
  articlesCollection.forEach((article) => {
    person.cart.push(article);
  });
}
const person = { name: "Pepe", cart: [] };
const articlesCollection = [
  { article: "👟", amount: 1, price: 25 },
  { article: "🚗", amount: 1, price: 4000 },
];

fillCart(person, articlesCollection);

console.log(person.cart);

//9 - Funcion countBanana(inventory['🥑','🍌','🥭', '🍌']}))

function countBanana(inventory) {
  let count = 0;
  for (let e of inventory) {
    if (e === "🍌") {
      count++;
    }
  }
  return count;
}
const inventory = ["🥑", "🍌", "🥭", "🍌"];

console.log(countBanana(inventory));

// 10 - function getTotal(inventory)

function getTotal(inventory2) {
  const totalPrice = inventory2.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return totalPrice;
}

const inventory2 = [
  { article: "🍔", price: 15, quantity: "1" },
  { article: "🍟", price: 10, quantity: "2" },
];

console.log(getTotal(inventory2));
