"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "paulo@gmail.com": new User('paulo@gmail.com', 'Paulo', 'paulo'),
    "valdiscley@gmail.com": new User('valdiscley@gmail.com', 'Valdiscley', 'valdiscley23')
};
