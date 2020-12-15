let studentsCount = prompt(`რამდენი სტუდენტის შეყვანა გსურთ ?`);
let students = [];
let i = 0;
while (i < studentsCount) {
    let studentName = prompt(`ჩაწერეთ სტუდენტების  სახელი N${i + 1}`);
    students.push(studentName);
    i++;
}
students = students.sort((a, b) => a.localeCompare(b));

alert(students);
