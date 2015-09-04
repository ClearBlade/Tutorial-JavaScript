
var part3Event = function() {
	var query = cb.Query({collectionName: "Weather"});
    query.setPage(0,0);
    query.fetch(function(err, data){
        if (err){
            showError("part3", "Either collection does not exist or it doesn't have the right permissions")
        }else{
            document.getElementById("weatherList").innerHTML = "";
            var listElement = document.getElementById("weatherList"); 
            listElement.innerHTML="";
            for (var i =0 ; i < data.length; i++) {
                node = document.createElement("li");
                var textNode = document.createTextNode(JSON.stringify(data[i].data));
                node.appendChild(textNode);
                listElement.appendChild(node);
            }
            showView("part3b");
        }
    });
    
};

var part3bEvent = function() {
    document.getElementById("weatherList").innerHTML = "";
    showView("part4");
};
