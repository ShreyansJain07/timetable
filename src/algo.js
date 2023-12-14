// const subjects = ["math", "geo", "eng"];
// const div = ["A", "B", "C"];
// const teacher = ["Alice", "Bob", "David", "Eve", "Frank"];
// const days = 1;
// const periods = 8;

// const teachers = [
//   { name: "Alice", details: [{ subjects: "math", div: "A", sessions: 5 }] },
//   { name: "Bob", details: [{ subjects: "geo", div: "A", sessions: 3 }] },
// ];

// const classes = [
//   {
//     name: "A",
//     subjects: ["math", "geo", "eng"],
//     teacherDetails: [
//       { subjects: "math", teacher: "Bob", session: 5 },
//       { subjects: "geo", teacher: "Bob", session: 3 },
//       { subjects: "eng", teacher: "Eve", session: 2 },
//     ],
//   },
//   {
//     name: "B",
//     subjects: ["math", "geo", "eng"],
//     teacherDetails: [
//       { subjects: "math", teacher: "Alice", session: 5 },
//       { subjects: "geo", teacher: "Bob", session: 3 },
//       { subjects: "eng", teacher: "Eve", session: 2 },
//     ],
//   },
//   {
//     name: "C",
//     subjects: ["math", "geo", "eng"],
//     teacherDetails: [
//       { subjects: "math", teacher: "Alice", session: 5 },
//       { subjects: "geo", teacher: "Bob", session: 3 },
//       { subjects: "eng", teacher: "Eve", session: 2 },
//     ],
//   },
// ];


function initializeTimetable(daysOfWeek, classes, numberOfPeriods) {
  const timetable = [];

  for (let dayIndex = 0; dayIndex < daysOfWeek; dayIndex++) {
    const dayObject = { day: getDayName(dayIndex), classes: {} };

    for (let classIndex = 0; classIndex < classes.length; classIndex++) {
      const className = classes[classIndex];
      const classArray = Array.from({ length: numberOfPeriods }, () => ({ teacher: "", subject: "" }));
      dayObject.classes[className] = classArray;
    }

    timetable.push(dayObject);
  }

  return timetable;
}

function printTimetable(timetable) {
  const totalDays = timetable.length;
  const periodsPerDay = timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

  for (const className in timetable[0].classes) {
    console.log(`Timetable for Class ${className}:`);
    
    let headerRow = "       |";
    for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
      headerRow += `  ${timetable[dayIndex].day}  \t \t  |`;
    }
    console.log(headerRow);

    let separatorLine = "-------------------";
    for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
      separatorLine += "--------------------";
    }
    console.log(separatorLine);

    for (let periodIndex = 0; periodIndex < periodsPerDay; periodIndex++) {
      let row = `Period ${periodIndex + 1} |`;
      for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
        const day = timetable[dayIndex];
        const classArray = day.classes[className];
        const cell = classArray[periodIndex];
        row += `  ${cell.teacher ? `${cell.teacher}|${cell.subject}` : ' - '}  |`;
      }
      console.log(row);
      console.log(separatorLine);
    }
    console.log("\n");
  }
}

function getDayName(dayIndex) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days[dayIndex];
}

function placeTeacherInTimetable(timetable, teacher, subject, sessionsPerWeek, targetClass) {
  const totalDays = timetable.length;
  const periodsPerDay = timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

  let sessionsRemaining = sessionsPerWeek;
  let maxIterations = 1000;

  for (let dayIndex = 0; sessionsRemaining > 0 && maxIterations > 0; dayIndex++) {
    const day = timetable[dayIndex % totalDays];
    for (const className in day.classes) {
      const classArray = day.classes[className];
      if (className === targetClass) {
        for (let i = 0; i < periodsPerDay && sessionsRemaining > 0; i++) {
          if (!classArray[i].teacher && !hasCollision(timetable, className, i, teacher, dayIndex)) {
            classArray[i].teacher = teacher;
            classArray[i].subject = subject;
            sessionsRemaining--;
            break;
          }
        }
      }
    }
    maxIterations--;
  }
  if(maxIterations===0 && sessionsRemaining>0){
    console.log(targetClass+" "+teacher+" "+sessionsRemaining)
    return false;
  }
  else return true;
}

function hasCollision(timetable, className, periodIndex, teacher, dayIndex) {
  const day = timetable[dayIndex % timetable.length];
  try{
    for (const otherClassName in day?.classes) {
    if (otherClassName !== className) {
      const classArray = day.classes[otherClassName];

      if (classArray[periodIndex].teacher === teacher) {
        return true;
      }
    }
  }

  return false;
  }
  catch(e){
    console.log(e)
 
  }
}


let timetable = initializeTimetable(6, ["9A","9B","9C","9D","10A","10B","10C","10D","11C"], 9);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const functionCalls = [
  { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9A" },
  { teacher: "SD", subject: "Pe", sessions: 3, targetClass: "9A" },
  { teacher: "MK", subject: "Art", sessions: 1, targetClass: "9A" },
  { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9A" },
  { teacher: "DP", subject: "Math", sessions: 8, targetClass: "9A" },
  { teacher: "SJ", subject: "BI", sessions: 5, targetClass: "9A" },
  { teacher: "JM", subject: "Opt", sessions: 5, targetClass: "9A" },
  { teacher: "GSA", subject: "S.S", sessions: 4, targetClass: "9A" },
  { teacher: "SSR", subject: "P.S", sessions: 3, targetClass: "9A" },
  { teacher: "DS", subject: "CCA", sessions: 3, targetClass: "9A" },
  { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9A" },
  { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9A" },
  { teacher: "KS", subject: "Sci", sessions: 1, targetClass: "9A" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9A" },
  { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9A" },
  { teacher: "DP", subject: "Math", sessions: 8, targetClass: "9B" },
  { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9B" },
  { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9B" },
  { teacher: "MA", subject: "Opt", sessions: 5, targetClass: "9B" },
  { teacher: "GSA", subject: "S.S", sessions: 4, targetClass: "9B" },
  { teacher: "SSR", subject: "P.S", sessions: 3, targetClass: "9B" },
  { teacher: "DSO", subject: "Sci", sessions: 2, targetClass: "9B" },
  { teacher: "KS", subject: "Phy", sessions: 3, targetClass: "9B" },
  { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9B" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9B" },
  { teacher: "DP", subject: "CCA", sessions: 3, targetClass: "9B" },
  { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9B" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9B" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9B" },
  { teacher: "KS", subject: "Sci", sessions: 1, targetClass: "9B" },
  { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9B" },
  { teacher: "NK", subject: "Math", sessions: 8, targetClass: "9C" },
  { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9C" },
  { teacher: "SVS", subject: "Opt", sessions: 5, targetClass: "9C" },
  { teacher: "KS", subject: "Chem", sessions: 4, targetClass: "9C" },
  { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9C" },
  { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9C" },
  { teacher: "GSA", subject: "S.S", sessions: 3, targetClass: "9C" },
  { teacher: "DN", subject: "Sci", sessions: 3, targetClass: "9C" },
  { teacher: "KS", subject: "CCA", sessions: 3, targetClass: "9C" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9C" },
  { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9C" },
  { teacher: "SSR", subject: "P.S", sessions: 2, targetClass: "9C" },
  { teacher: "BN", subject: "S.S", sessions: 1, targetClass: "9C" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9C" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9C" },
  { teacher: "BN", subject: "Geo", sessions: 1, targetClass: "9C" },
  { teacher: "TR", subject: "Mar", sessions: 1, targetClass: "9C" },
  { teacher: "DS", subject: "Eng", sessions: 8, targetClass: "9D" },
  { teacher: "NK", subject: "Math", sessions: 8, targetClass: "9D" },
  { teacher: "DSA", subject: "Opt", sessions: 5, targetClass: "9D" },
  { teacher: "SSR", subject: "S.S", sessions: 4, targetClass: "9D" },
  { teacher: "KS", subject: "Phy", sessions: 4, targetClass: "9D" },
  { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "9D" },
  { teacher: "KS", subject: "Chem", sessions: 3, targetClass: "9D" },
  { teacher: "DN", subject: "Sci", sessions: 3, targetClass: "9D" },
  { teacher: "BN", subject: "Geo", sessions: 2, targetClass: "9D" },
  { teacher: "SSR", subject: "P.S", sessions: 2, targetClass: "9D" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "9D" },
  { teacher: "SSR", subject: "CCA", sessions: 3, targetClass: "9D" },
  { teacher: "BN", subject: "Eco", sessions: 2, targetClass: "9D" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "9D" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "9D" },
   { teacher: "NK", subject: "Math", sessions: 9, targetClass: "10A" },
  { teacher: "MP", subject: "Eng", sessions: 8, targetClass: "10A" },
  { teacher: "JM", subject: "Opt", sessions: 5, targetClass: "10A" },
  { teacher: "SP", subject: "Phy", sessions: 4, targetClass: "10A" },
  { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10A" },
  { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "10A" },
  { teacher: "SS", subject: "Hist", sessions: 3, targetClass: "10A" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10A" },
  { teacher: "DN", subject: "Bio", sessions: 3, targetClass: "10A" },
  { teacher: "NK", subject: "CCA", sessions: 3, targetClass: "10A" },
  { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10A" },
  { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10A" },
  { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10A" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10A" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10A" },
  { teacher: "NK", subject: "Math", sessions: 8, targetClass: "10B" },
  { teacher: "MP", subject: "Eng", sessions: 7, targetClass: "10B" },
  { teacher: "GG", subject: "Opt", sessions: 5, targetClass: "10B" },
  { teacher: "SD", subject: "P.E", sessions: 4, targetClass: "10B" },
  { teacher: "SJ", subject: "B.I", sessions: 4, targetClass: "10B" },
  { teacher: "BP", subject: "Chem", sessions: 3, targetClass: "10B" },
  { teacher: "SP", subject: "Phy", sessions: 3, targetClass: "10B" },
  { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10B" },
  { teacher: "DN", subject: "Bio", sessions: 2, targetClass: "10B" },
  { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10B" },
  { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10B" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10B" },
  { teacher: "SS", subject: "Eco", sessions: 1, targetClass: "10B" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10B" },
  { teacher: "MS", subject: "Math", sessions: 9, targetClass: "10C" },
  { teacher: "MP", subject: "Eng", sessions: 8, targetClass: "10C" },
  { teacher: "SJ", subject: "B.I", sessions: 5, targetClass: "10C" },
  { teacher: "PJ", subject: "Opt", sessions: 5, targetClass: "10C" },
  { teacher: "SP", subject: "Phy", sessions: 4, targetClass: "10C" },
  { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10C" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10C" },
  { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10C" },
  { teacher: "GSA", subject: "CCA", sessions: 3, targetClass: "10C" },
  { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10C" },
  { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10C" },
  { teacher: "DN", subject: "Bio", sessions: 2, targetClass: "10C" },
  { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10C" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10C" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10C" },
   { teacher: "MS", subject: "Math", sessions: 9, targetClass: "10D" },
  { teacher: "NB", subject: "Eng", sessions: 8, targetClass: "10D" },
  { teacher: "RV", subject: "Opt", sessions: 5, targetClass: "10D" },
  { teacher: "SJ", subject: "B.I", sessions: 5, targetClass: "10D" },
  { teacher: "BP", subject: "Chem", sessions: 4, targetClass: "10D" },
  { teacher: "SP", subject: "Phy", sessions: 3, targetClass: "10D" },
  { teacher: "SD", subject: "P.E", sessions: 3, targetClass: "10D" },
  { teacher: "GSA", subject: "Hist", sessions: 3, targetClass: "10D" },
  { teacher: "DN", subject: "Bio", sessions: 3, targetClass: "10D" },
  { teacher: "NB", subject: "CCA", sessions: 3, targetClass: "10D" },
  { teacher: "SS", subject: "P.S", sessions: 2, targetClass: "10D" },
  { teacher: "SS", subject: "Eco", sessions: 2, targetClass: "10D" },
  { teacher: "GSA", subject: "Geo", sessions: 2, targetClass: "10D" },
  { teacher: "MK", subject: "Arts", sessions: 1, targetClass: "10D" },
  { teacher: "SD", subject: "Lib", sessions: 1, targetClass: "10D" },
  { teacher: "DG", subject: "B.S", sessions: 10, targetClass: "11C" },
  { teacher: "SS", subject: "Eco", sessions: 8, targetClass: "11C" },
  { teacher: "MSU", subject: "Ent", sessions: 8, targetClass: "11C" },
  { teacher: "MSU", subject: "Acc", sessions: 10, targetClass: "11C" },
  { teacher: "SD", subject: "P.E", sessions: 2, targetClass: "11C" },
  { teacher: "MSJ", subject: "G.S", sessions: 1, targetClass: "11C" },
  { teacher: "MK", subject: "W.E", sessions: 1, targetClass: "11C" },
  { teacher: "NB", subject: "Eng", sessions: 10, targetClass: "11C" },
  { teacher: "AP", subject: "Lib", sessions: 1, targetClass: "11C" }
];

const moreSession = functionCalls.filter(call => call.sessions>=5)
const lessSession = functionCalls.filter(call => call.sessions<5)
let count=0;

while (true) {
  let f=1;
  count++;
  shuffleArray(lessSession);
  shuffleArray(moreSession)
  const shuffledCalls = moreSession.concat(lessSession)
  for (const call of shuffledCalls) {
    const success = placeTeacherInTimetable(timetable, call.teacher, call.subject, call.sessions, call.targetClass);
    if (!success) {
      f=0;
      timetable = initializeTimetable(6, ["9A","9B","9C","9D","10A","10B","10C","10D","11C"], 9);
      break;
    }
  }
  if (f===1) {
    console.log("Timetable created successfully!");
    printTimetable(timetable);
    console.log(count);
    break;
  }
}

// console.log(JSON.stringify(timetable, null, 2));