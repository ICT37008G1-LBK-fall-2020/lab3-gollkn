let answer = prompt(`ჩაწერეთ ტექსტი`);


if(answer.includes('რეკლამა') || answer.includes('მარკეტინგი') || answer.includes('ვირუსი')){
    alert("ტექსტი შეიცავს აკრძალულ სიტყვებს")
}else{
    alert("ტექსტი არ შეიცავს აკრძალულ სიტყვებს");
}
