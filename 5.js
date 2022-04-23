function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
let user = makeUser();
alert(user.ref.name);

//It alerts an empty string because 'this' refers to 'window' and 'window' has no such a property as 'name'.
//We can edit it to user.ref.user.name