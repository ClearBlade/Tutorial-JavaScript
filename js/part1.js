var cb = new ClearBlade();
var initOptions = {
	URI : "PLATFORM_URL",
    messagingURI : "MESSAGING_URL",
    messagingPort: 8904,
    useMQTT: true,
    cleanSession: true,
    systemKey: "SYSTEMKEY",
    systemSecret: "SYSTEMSECRET"  
}

var part1Event = function() {
	var initCallback = function(err, data){
        if(err) {
            showError("part1", "Uh-oh somethings not right, your Anonymous login failed - check your system key and secret??");
        } else {
        	showView("part1b");
            // callback(err, data);
        }

    };
    initOptions.callback = initCallback;
    cb.init(initOptions);
    
};

var part1bEvent = function() {
   showView("part2");
    
};