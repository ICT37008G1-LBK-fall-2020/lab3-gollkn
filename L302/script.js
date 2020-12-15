let answer = prompt(`ჩაწერეთ ტექსტი`);

if (answer.length > 15) {
    answer = answer.slice(0, 10) + ' ....';
}

alert(answer);


