
// let Chase = new Admin("chas@chas", "pass", "chase", "vanHalen", 5);



class User {
    constructor(email, password, firstname, lastname){
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    changePassword(newPassword){
        this.password = newPassword
    }
    changeEmail(newEmail){
        this.email = newEmail
    }
}

class Admin extends User {
    constructor(email, password, firstname, lastname, adminLevel) {
        super(email, password, firstname, lastname)
        this.isAdmin = true;
        this.adminLevel = adminLevel;
    }
    makeUserIntoAdmin(user, adminLevel){
                user.isAdmin = true;
                user.adminLevel = adminLevel;
    }
    addProperty(propertyName, value){
        this[propertyName] = value;
    }

}

let Tri = new User('tri@tri', "tripass123", "tri", "tran")
let Chase = new Admin("chas@chas", "pass", "chase", "lastname", 5);
let Will = new Admin("will@chas", "pass", "chase", "lastname", 5);

class SuperAdmin  extends Admin {
    constructor(email, pass, name, lastname, adminLevel, employees){
        super(email, pass, name, lastname, adminLevel)
        this.employees = employees;
    }

    fire(user){
        if (user.name !== 'Chase'){
            // remove from array
        }
    }
}
let Brian = new SuperAdmin("Brian@perscholas.org", "bribri123", "Brian", "McRae", 6, [Chase, Will])
// Chase.isAwesome = true;
// Chase.addProperty("isAwesome", true)

console.log(Brian);
Brian.changePassword()
// Chase.makeUserIntoAdmin(Tri, 1)

console.log(Tri);

























// class Admin {
//     constructor(email, password, firstname, lastname, adminLevel){
//         this.email = email;
//         this.password = password;
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.adminLevel = adminLevel;
//         this.isAdmin = true;
//     }
//     changePassword(newPassword){
//         this.password = newPassword
//     }
//     changeEmail(newEmail){
//         this.email = newEmail
//     }
//     makeUserIntoAdmin(user, adminLevel){
//         user.isAdmin = true;
//         user.adminLevel = adminLevel;
//     }
// }