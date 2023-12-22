const functionCalls = [
  { teacher: "PJA", subject: "Eng", sessions: 8, targetClass: "6A" },
  { teacher: "PJA", subject: "CCA", sessions: 3, targetClass: "6A" },
  { teacher: "KLM", subject: "Math", sessions: 8, targetClass: "6A" },
  { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6A" },
  { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "6A" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6A" },
  { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "6A" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6A" },
  { teacher: "JMB", subject: "OPT", sessions: 4, targetClass: "6A" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6A" },
  { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6A" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6A" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6A" },
  { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "6B" },
  { teacher: "PP", subject: "CCA", sessions: 3, targetClass: "6B" },
  { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "6B" },
  { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6B" },
  { teacher: "SSN", subject: "SCI", sessions: 6, targetClass: "6B" },
  { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "6B" },
  { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "6B" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6B" },
  { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "6B" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6B" },
  { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6B" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6B" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6B" },
  { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "6C" },
  { teacher: "LSP", subject: "CCA", sessions: 3, targetClass: "6C" },
  { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "6C" },
  { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "6C" },
  { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "6C" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6C" },
  { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6C" },
  { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "6C" },
  { teacher: "SAR", subject: "OPT", sessions: 4, targetClass: "6C" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6C" },
  { teacher: "PS", subject: "ART", sessions: 1, targetClass: "6C" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6C" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6C" },
  { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "6D" },
  { teacher: "SSN", subject: "CCA", sessions: 3, targetClass: "6D" },
  { teacher: "RMC", subject: "MATH", sessions: 7, targetClass: "6D" },
  { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "6D" },
  { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "6D" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6D" },
  { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6D" },
  { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "6D" },
  { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "6D" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6D" },
  { teacher: "PS", subject: "ART", sessions: 2, targetClass: "6D" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6D" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6D" },
  { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "6E" },
  { teacher: "PAS", subject: "CCA", sessions: 3, targetClass: "6E" },
  { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "6E" },
  { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "6E" },
  { teacher: "SSN", subject: "SCI", sessions: 8, targetClass: "6E" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "6E" },
  { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "6E" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "6E" },
  { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "6E" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "6E" },
  { teacher: "PS", subject: "ART", sessions: 1, targetClass: "6E" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "6E" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "6E" },
  { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "7A" },
  { teacher: "KR", subject: "CCA", sessions: 3, targetClass: "7A" },
  { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "7A" },
  { teacher: "GSS", subject: "SS", sessions: 5, targetClass: "7A" },
  { teacher: "TSP", subject: "SS", sessions: 2, targetClass: "7A" },
  { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "7A" },
  { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "7A" },
  { teacher: "JJ", subject: "HINDI", sessions: 6, targetClass: "7A" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7A" },
  { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "7A" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7A" },
  { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7A" },
  { teacher: "DD", subject: "MUSIC", sessions: 2, targetClass: "7A" },
  { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7A" },
  { teacher: "PJA", subject: "ENG", sessions: 8, targetClass: "7B" },
  { teacher: "MK", subject: "CCA", sessions: 3, targetClass: "7B" },
  { teacher: "MK", subject: "MATH", sessions: 8, targetClass: "7B" },
  { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "7B" },
  { teacher: "SSN", subject: "SCI", sessions: 7, targetClass: "7B" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7B" },
  { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "7B" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7B" },
  { teacher: "SAR", subject: "OPT", sessions: 4, targetClass: "7B" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7B" },
  { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7B" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7B" },
  { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7B" },
  { teacher: "KR", subject: "ENG", sessions: 8, targetClass: "7C" },
  { teacher: "KMP", subject: "CCA", sessions: 3, targetClass: "7C" },
  { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "7C" },
  { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "7C" },
  { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "7C" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7C" },
  { teacher: "PP", subject: "HINDI", sessions: 7, targetClass: "7C" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7C" },
  { teacher: "DSA", subject: "OPT", sessions: 4, targetClass: "7C" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7C" },
  { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7C" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7C" },
  { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7C" },
  { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "7D" },
  { teacher: "RMC", subject: "CCA", sessions: 3, targetClass: "7D" },
  { teacher: "RMC", subject: "MATH", sessions: 8, targetClass: "7D" },
  { teacher: "BN", subject: "SS", sessions: 8, targetClass: "7D" },
  { teacher: "SDO", subject: "SCI", sessions: 6, targetClass: "7D" },
  { teacher: "JDP", subject: "SCI", sessions: 1, targetClass: "7D" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7D" },
  { teacher: "JJ", subject: "HINDI", sessions: 7, targetClass: "7D" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7D" },
  { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "7D" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7D" },
  { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "7D" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7D" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "7D" },
  { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "7E" },
  { teacher: "BSL", subject: "CCA", sessions: 3, targetClass: "7E" },
  { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "7E" },
  { teacher: "BSL", subject: "SS", sessions: 8, targetClass: "7E" },
  { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "7E" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "7E" },
  { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "7E" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "7E" },
  { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "7E" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "7E" },
  { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "7E" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "7E" },
  { teacher: "TRB", subject: "MAR", sessions: 2, targetClass: "7E" },
  { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "8A" },
  { teacher: "JJ", subject: "CCA", sessions: 3, targetClass: "8A" },
  { teacher: "KMP", subject: "MATH", sessions: 7, targetClass: "8A" },
  { teacher: "SSR", subject: "SS", sessions: 8, targetClass: "8A" },
  { teacher: "LSP", subject: "SCI", sessions: 6, targetClass: "8A" },
  { teacher: "YRKB", subject: "SWIM", sessions: 3, targetClass: "8A" },
  { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "8A" },
  { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "8A" },
  { teacher: "GSGS", subject: "OPT", sessions: 4, targetClass: "8A" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8A" },
  { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8A" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8A" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8A" },
  { teacher: "JS", subject: "ENG", sessions: 8, targetClass: "8B" },
  { teacher: "BN", subject: "CCA", sessions: 3, targetClass: "8B" },
  { teacher: "KMP", subject: "MATH", sessions: 8, targetClass: "8B" },
  { teacher: "BN", subject: "SS", sessions: 8, targetClass: "8B" },
  { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "8B" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8B" },
  { teacher: "RV", subject: "HINDI", sessions: 7, targetClass: "8B" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8B" },
  { teacher: "PJB", subject: "OPT", sessions: 4, targetClass: "8B" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8B" },
  { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8B" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8B" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8B" },
  { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8C" },
  { teacher: "FVB", subject: "CCA", sessions: 3, targetClass: "8C" },
  { teacher: "MK", subject: "MATH", sessions: 7, targetClass: "8C" },
  { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "8C" },
  { teacher: "LSP", subject: "SCI", sessions: 7, targetClass: "8C" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8C" },
  { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8C" },
  { teacher: "VPA", subject: "COMP", sessions: 3, targetClass: "8C" },
  { teacher: "JMB", subject: "OPT", sessions: 4, targetClass: "8C" },
  { teacher: "SD", subject: "LIB", sessions: 1, targetClass: "8C" },
  { teacher: "PKR", subject: "ART", sessions: 1, targetClass: "8C" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8C" },
  { teacher: "JN", subject: "MUSIC", sessions: 1, targetClass: "8C" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8C" },
  { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8D" },
  { teacher: "GSS", subject: "CCA", sessions: 3, targetClass: "8D" },
  { teacher: "DP", subject: "MATH", sessions: 8, targetClass: "8D" },
  { teacher: "GSS", subject: "SS", sessions: 8, targetClass: "8D" },
  { teacher: "KS", subject: "SCI", sessions: 7, targetClass: "8D" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8D" },
  { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8D" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8D" },
  { teacher: "DSA", subject: "OPT", sessions: 4, targetClass: "8D" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8D" },
  { teacher: "MHK", subject: "ART", sessions: 1, targetClass: "8D" },
  { teacher: "DD", subject: "MUSIC", sessions: 2, targetClass: "8D" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8D" },
  { teacher: "FVB", subject: "ENG", sessions: 8, targetClass: "8E" },
  { teacher: "SDO", subject: "CCA", sessions: 3, targetClass: "8E" },
  { teacher: "DP", subject: "MATH", sessions: 8, targetClass: "8E" },
  { teacher: "PAS", subject: "SS", sessions: 8, targetClass: "8E" },
  { teacher: "SDO", subject: "SCI", sessions: 7, targetClass: "8E" },
  { teacher: "YRKB", subject: "SWIM", sessions: 2, targetClass: "8E" },
  { teacher: "SVS", subject: "HINDI", sessions: 7, targetClass: "8E" },
  { teacher: "VPA", subject: "COMP", sessions: 2, targetClass: "8E" },
  { teacher: "MA", subject: "OPT", sessions: 4, targetClass: "8E" },
  { teacher: "YRKB", subject: "LIB", sessions: 1, targetClass: "8E" },
  { teacher: "MHK", subject: "ART", sessions: 2, targetClass: "8E" },
  { teacher: "DD", subject: "MUSIC", sessions: 1, targetClass: "8E" },
  { teacher: "TRB", subject: "MAR", sessions: 1, targetClass: "8E" },
  
];

function initializeTimetable(daysOfWeek, classes, numberOfPeriods) {
  const timetable = [];

  for (let dayIndex = 0; dayIndex < daysOfWeek; dayIndex++) {
    const dayObject = { day: getDayName(dayIndex), classes: {} };

    for (let classIndex = 0; classIndex < classes.length; classIndex++) {
      const className = classes[classIndex];
      const classArray = Array.from({ length: numberOfPeriods }, () => ({
        teacher: "",
        subject: "",
      }));
      dayObject.classes[className] = classArray;
    }

    timetable.push(dayObject);
  }

  return timetable;
}

function printTimetable(timetable) {
  const totalDays = timetable.length;
  const periodsPerDay =
    timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

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
        row += `  ${
          cell.teacher ? `${cell.teacher}|${cell.subject}` : " - "
        }  |`;
      }
      console.log(row);
      console.log(separatorLine);
    }
    console.log("\n");

    const lecturesCount = {};
    for (const day of timetable) {
      const classArray = day.classes[className];
      for (const cell of classArray) {
        if (cell.teacher) {
          const key = `${cell.teacher} - ${cell.subject}`;
          if (lecturesCount[key]) {
            lecturesCount[key]++;
          } else {
            lecturesCount[key] = 1;
          }
        }
      }
    }
    let tot=0;
    console.log(`Number of Lectures per Teacher and Subject for Class ${className}:`);
    for (const key in lecturesCount) {
      const [teacher, subject] = key.split(" - ");
      console.log(`${teacher}: ${subject} - ${lecturesCount[key]} lectures`);
      tot+=lecturesCount[key]
    }
    console.log(tot+"\n");
  }
}

function getDayName(dayIndex) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[dayIndex];
}

function placeTeacherInTimetable(
  timetable,
  teacher,
  subject,
  sessionsPerWeek,
  targetClass
) {
  const totalDays = timetable.length;
  const periodsPerDay =
    timetable[0].classes[Object.keys(timetable[0].classes)[0]].length;

  let sessionsRemaining = sessionsPerWeek;
  let maxIterations = 1000;

  for (let dayIndex = 0;sessionsRemaining > 0 && maxIterations > 0;dayIndex++) {
    const day = timetable[dayIndex % totalDays];
    for (const className in day.classes) {
      const classArray = day.classes[className];
      if (className === targetClass) {
        for (let i = 0; i < periodsPerDay && sessionsRemaining > 0; i++) {
          if (
            !classArray[i].teacher &&
            !hasCollision(timetable, className, i, teacher, dayIndex)
          ) {
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
  if (maxIterations === 0 && sessionsRemaining > 0) {
    // console.log(targetClass + " " + teacher + " " + sessionsRemaining);
    let f = 1;
    for (let index = 0; index < sessionsRemaining; index++) {
      const result = handleHangSessions(timetable, {teacher,subject,sessions: 1,targetClass,});
      if (result) continue;
      else {
        f = 0;
        break;
      }
    }
    if (f === 1) return true;
    else return false;
  } else return true;
}

function handleHangSessions(timetable, unplacedSession) {
  for (let dayIndex = 0; dayIndex < timetable.length; dayIndex++) {
    const day = timetable[dayIndex];
    for (const className in day.classes) {
      const classArray = day.classes[className];
      for (let periodIndex = 0; periodIndex < classArray.length; periodIndex++) {
        if (!classArray[periodIndex].teacher) {
          if (!hasCollision(timetable, className, periodIndex, unplacedSession.teacher, dayIndex)) {
            const tempTeacher = classArray[periodIndex].teacher;
            const tempSubject = classArray[periodIndex].subject;

            classArray[periodIndex].teacher = unplacedSession.teacher;
            classArray[periodIndex].subject = unplacedSession.subject;

            unplacedSession.teacher = tempTeacher;
            unplacedSession.subject = tempSubject;

            return true;
          }
        }
      }
    }
  }
  return false;
}

function hasCollision(timetable, className, periodIndex, teacher, dayIndex) {
  const day = timetable[dayIndex % timetable.length];
  try {
    for (const otherClassName in day?.classes) {
      if (otherClassName !== className) {
        const classArray = day.classes[otherClassName];

        if (classArray[periodIndex].teacher === teacher) {
          return true;
        }
      }
    }

    return false;
  } catch (e) {
    console.log(e);
  }
}

// let timetable = initializeTimetable(
//   6,
//   ["9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11C"],
//   9
// );

let timetable = initializeTimetable(
  6,
  [
    "6A",
    "6B",
    "6C",
    "6D",
    "6E",
    "7A",
    "7B",
    "7C",
    "7D",
    "7E",
    "8A",
    "8B",
    "8C",
    "8D",
    "8E",
  ],
  9
);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function breakDownAllSessions(functionCalls) {
  const allEntries = [];

  functionCalls.forEach((call) => {
    const { teacher, subject, sessions, targetClass } = call;
    let remainingSessions = sessions;
    while (remainingSessions > 0) {
      const sessionsForEntry = Math.min(
        remainingSessions,
        1 + Math.floor(Math.random() * 4)
      );
      allEntries.push({
        teacher,
        subject,
        sessions: sessionsForEntry,
        targetClass,
      });
      remainingSessions -= sessionsForEntry;
    }
  });

  return allEntries;
}

let count = 0;

while (true) {
  const allEntries = breakDownAllSessions(functionCalls);

  const moreSession = allEntries.filter((call) => call.sessions >= 3);
  const lessSession = allEntries.filter((call) => call.sessions < 3);
  let f = 1;
  count++;

  shuffleArray(lessSession);
  shuffleArray(moreSession);

  const oneQuarterLessSession = lessSession.slice(
    0,
    Math.ceil(lessSession.length / 3)
  );
  const threeQuartersLessSession = lessSession.slice(
    Math.ceil(lessSession.length / 3)
  );

  const shuffledCalls = threeQuartersLessSession.concat(
    moreSession,
    oneQuarterLessSession
  );

  // const shuffledCalls = moreSession.concat(lessSession)

  for (const call of shuffledCalls) {
    const success = placeTeacherInTimetable(
      timetable,
      call.teacher,
      call.subject,
      call.sessions,
      call.targetClass
    );
    if (!success) {
      f = 0;
      timetable = initializeTimetable(
        6,
        [
          "6A",
          "6B",
          "6C",
          "6D",
          "6E",
          "7A",
          "7B",
          "7C",
          "7D",
          "7E",
          "8A",
          "8B",
          "8C",
          "8D",
          "8E",
        ],
        9
      );
      //  timetable = initializeTimetable(
      //   6,
      //   ["9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11C"],
      //   9
      // );
      break;
    }
  }
  if (f === 1) {
    console.log("Timetable created successfully!");
    printTimetable(timetable);
    console.log(count);
    break;
  }
}

// console.log(JSON.stringify(timetable, null, 2));