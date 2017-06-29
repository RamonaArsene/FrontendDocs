/**
 * Created by Gianina.Carp on 6/29/2017.
 */
hrApp.service("UserService", function() {
    var users = [];

    this.save = function(user){
            users.push(user);
            console.log(users.length);
        }
    this.getUsers = function() {
        return users;
    }

});