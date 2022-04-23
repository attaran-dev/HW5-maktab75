function conToObj(fileContent) {
    let obj = {};
    let contArr = fileContent.split('\n');
let contArr2 = contArr.map(e => e.split(','));
contArr2.pop();
for (const i of contArr2) {
    obj[i[0]] = i[1];
}
return obj;
}
// let fileContent = '12,ali\n' + '23,amin\n';
// console.log(conToObj(fileContent));