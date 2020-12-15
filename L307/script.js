let students = [];

for (let i = 0; i < 2; i++) {
    prepareStudentList(i);
}

function prepareStudentList(listNumber) {
    let studentsCount = prompt(`რამდენი სტუდენტის შეყვანა გსურთ (სია ${listNumber + 1})`);
    let i = 0;
    while (i < studentsCount) {
        let studentName = prompt(`ჩაწერეთ სტუდენტების  სახელი N${i + 1}`);
        if (students.indexOf(studentName) < 0) {
            students.push(studentName);
        }
        i++;
    }
}

alert(students);
