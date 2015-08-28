
var part2Event = function() {
    var initCallback = function(err, data){
        if(err) {
            showError("part2", "Uh-oh somethings not right, your authorized login failed - check your system key and secret??");
        } else {
            showView("part2b");
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

var part2bEvent = function() {
   showView("part3");
    
};