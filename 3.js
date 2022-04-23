function domainRecom() {
  let obj = {};
  let sNameArr = arguments[0];
  let domArr = arguments[1];
  for (const i of sNameArr) {
    obj[i] = {};
    for (const j of domArr) {
      obj[i][j] = `${i}.${j}`;
    }
  }
  return obj;
}
// console.log(domainRecom(['google', 'yahoo'],['com', 'net']))
