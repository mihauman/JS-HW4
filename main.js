const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
const pairs = [
[students[0],'и',students[2]],
   [students[1],'и',students[3]],
    [students[4],'и',students[5]]];

const pairThemes = [ 
[pairs[0],themes[0]],
 [pairs[1],themes[1]],
  [pairs[2],themes[2]]];

    const studentMarks = [
  [students[0],marks[0]],
   [students[1],marks[1]],
    [students[2],marks[2]],
     [students[3],marks[3]],
      [students[4],marks[4]],
       [students[5],marks[5]]];

  const pairMarks = [
  [pairThemes[0],marks[Math.floor(Math.random() * marks.length)]],
 [pairThemes[1],marks[Math.floor(Math.random() * marks.length)]],
  [pairThemes[2],marks[Math.floor(Math.random() * marks.length)]]];
  
//#1
for (i = 0; i < pairs.length; i++) { alert(pairs[i]); }
//#2
for (i = 0; i < pairThemes.length; i++) { alert(pairThemes[i]); }
//#3
for (i = 0; i < studentMarks.length; i++) { alert(studentMarks[i]); }
//#4
for (i = 0; i < pairMarks.length; i++) { alert(pairMarks[i]); }
 
