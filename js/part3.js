var part3Event = function() {
	var query = cb.Query({collectionID: "cee2a7dd0abef288e8f0fcf18663"});
    query.setPage(0,0);
    query.fetch(function(err, data){
        if (err){
            showError("part3", data)
        }else{
            var listElement = document.getElementById("weatherList"); 
            for (var i =0 ; i < data.length; i++) {
                var node = document.createElement("li");
                var textNode = document.createTextNode(JSON.stringify(data[i].data));
                node.appendChild(textNode);
                listElement.appendChild(node);
            }
            showView("part3b");
        }
    });
    
};

var part3bEvent = function() {
   showView("part4");
    
};