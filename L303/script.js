let answer = prompt(`ჩაწერეთ ვალუტა და თანხა`);
let convertedAmount;
let currencyIsLari = answer.includes("L") ? 1 : 0;
let amount = parseInt(answer.substr(1));
convertedAmount = currencyIsLari ? `$ ${amount / 2.6}` : `L ${amount * 2.6}`;
alert(convertedAmount);


