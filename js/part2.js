
var part2Event = function() {
    var initCallback = function(err, data){
        if(err) {
            showError("part2", "Uh-oh somethings not right, your Anonymous login failed - check your system key and secret??");
        } else {
            showView("part3");
            // callback(err, data);
        }

    };
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    initOptions.email = email;
    initOptions.password = password;
    initOptions.callback = initCallback;
    cb.init(initOptions);
    
};


// var part2Event = function() {

//     var _cb = function(err, data){
//         if(err) {
//             showError("part2", "Uh-oh somethings not right, your login failed - check your email and password");
//         } else {

           
//             showView("part3");
//         }

//     };
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     cb.loginUser(email, password, _cb);
// };

var part2bEvent = function() {
   showView("part2b");
    
};