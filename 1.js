let id = 1;
let j = 0;
let information = {};
let keyArr = [
  "name",
  "family",
  "father name",
  "father job",
  "age",
  "grade",
  "city",
  "bolvared",
  "street",
  "alley",
  "block",
  "no",
  "floor",
];
let inputCondition;
do {
  information[id] = {};
  information[id]["address"] = {};
  for (const i of keyArr) {
    let uInput = prompt(i);
    inputCondition = uInput;
    if (uInput == null) {
      delete information[id];
      console.log(information);
      break;
    } else {
      keyArr.indexOf(i) <= 5
        ? (information[id][i] = uInput)
        : (information[id]["address"][i] = uInput);
    }
  }
  id++;
} while (inputCondition !== null);
// delete information[id];
// console.log(information);
