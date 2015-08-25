var messaging;


var part7Event = function() {

    var callback = function(data) {
        document.getElementById("part7SubscribeButton").disabled=false;
        document.getElementById("part7PublishButton").disabled=true;
        showView("part7b");
    }
    //messaging = cb.ClearBlade.Messaging(config, success);
    // var initOptions = {
    //     URI : "https://rtp.clearblade.com",
    //     messagingURI : "rtp.clearblade.com",
    //     useMQTT: true,
    //     messagingPort: 8904,   
    //     cleanSession: true,
    //     systemKey: "d2f7d2dc0ab8cfbfa49cf0feb50b",
    //     systemSecret: "D2F7D2DC0AD0E6AEB89AB0E6FAB501",
    //     //onSuccess: part7SubscriptionSuccess  
    // }
    // messaging = cb.Messaging(initOptions, callback);
    messaging = cb.Messaging({}, callback);
};

var part7MessageArriveEvent = function(message) {
    var node = document.createElement("div");                
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);
    document.getElementById("part7Content").appendChild(node);
    //alert("messageArrived: "+message)
    
};

var part7SubscribeEvent = function() {
    messaging.subscribe("/weather", {}, part7MessageArriveEvent);
    document.getElementById("part7SubscribeButton").disabled=true;
    document.getElementById("part7PublishButton").disabled=false;
    
};

var part7PublishEvent = function() {
    var textVal = document.getElementById("part7PublishInput").value;
    var msg = {part:"part7",ts:new Date(),value:textVal};
    messaging.publish("/weather", JSON.stringify(msg) );
    
};

var part7bEvent = function() {
   showView("part8");
    
};