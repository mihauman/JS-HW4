const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
//#1
const getpairs = (students) =>{
const pairs = [];
  for (let i = 0; i < students.length; i+=2) {
      pairs.push(students.slice(i, i+2))    
    }
    return pairs;
};
    console.log (getpairs(students));
//#2
const pairs =  getpairs(students); 
const getThemes = (pairs, themes) => {
const themesForStudents = [];
  for (let i = 0; i < pairs.length; i++) {
        themesForStudents.push([pairs[i].join(' и '), themes[i]])
    }
    return themesForStudents;
};
    console.log (getThemes(pairs, themes));
//#3
const getStudentsMarks = (students, marks) => {
const marksForStudents = [];
  for (let i = 0; i < students.length; i++) {
        marksForStudents.push([students[i],marks[i]])
    }
    return marksForStudents;
};
console.log (getStudentsMarks(students, marks));
//#4
const themesForStudents = getThemes(pairs, themes);
const getRandomMarksForTasks =(themesForStudents, marks) => {
const randomMarksForStudents = [];
  for (let i = 0; i < themesForStudents.length; i++) {
    randomMarksForStudents.push([themesForStudents[i],marks[Math.floor(Math.random() * marks.length)]])
    }
     return randomMarksForStudents;
};
console.log (getRandomMarksForTasks(themesForStudents, marks));
//#Вивід
document.writeln(`<p> Пари: ${getpairs(students)}</p>`);
document.writeln(`<p> Теми: ${getThemes(pairs, themes)} </p>`);
document.writeln(`<p> Оцінки: ${getStudentsMarks(students, marks)}</p>`);
document.writeln(`<p> Рандомні оцінки: ${getRandomMarksForTasks(themesForStudents, marks)}</p>`);
 
