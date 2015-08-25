var part6Event = function() {
    var params = {  city:document.getElementById("city6").value,
                    state:document.getElementById("state6").value,
                    country:document.getElementById("country6").value
                };
    var callback = function(err, data) {
        if (err){
            showError("part6", data)
        }else{
            document.getElementById("part6Response").innerHTML = data.results;
            showView("part6b");
        }
    }
	cb.Code().execute("ServicePart6", params, callback);
    
};

var part6bEvent = function() {
   showView("part7");
    
};