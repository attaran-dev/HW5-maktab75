function User() {
    let id = 1;
    this.listOfUser = [];
    this.add = (item) => {this.listOfUser.push({[id]:item}); id++; return this.listOfUser;};
    this.remove = (id) => {for (const i of this.listOfUser) {i[id]===id ? this.listOfUser.splice(this.listOfUser.indexOf(i), 1): null}; return this.listOfUser}
    this.change = (id,name)=>{for (const i of this.listOfUser) {i[id]===id ? i[id]=name : null}; return this.listOfUser}
    this.findById = (id) => {let isFound; for (const i of this.listOfUser) {i[id]===id ? isFound = 'Found' : isFound = 'Not found'}; return isFound}
    this.filter = (options) => {
        let filtered = [];
        for(const key in options){
        for(const i of this.listOfUser){
            if(i[id][key]>= options[key]['start'] && i[id][key]<= options[key]['end']){
                filtered.push(i);
            }
        }
    }
    return filtered;
}
    // this.filter = (options) => {let filtered = this.listOfUser.filter((i) => {for (const key in options) {return i[id][key] > [key]['start'] && i[id][key] < [key]['end']}}};
//options = {name:{start:'a', end:'c'}, id:{start:5, end:10}}
    this.sort = () => { };
    this.export = (id) => {let exportedUser; for (const i of this.listOfUser) {i[id]===id ? exportedUser = i : exportedUser = 'Not found'}; return exportedUser};
    }
    
    // const addUser = new User().add;
    // console.log(addUser({name:'mahdi', age: 25}));
    // console.log(addUser({name: 'ali', age: 60}));