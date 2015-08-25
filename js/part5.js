var part5Event = function() {
    var params = {  city:document.getElementById("city5").value,
                    state:document.getElementById("state5").value,
                    country:document.getElementById("country5").value
                };
    var callback = function(err, data) {
        if (err){
            showError("part5", data)
        }else{
            document.getElementById("part5Response").innerHTML = JSON.stringify(data.results);
            showView("part5b");
        }
    }
	cb.Code().execute("ServicePart5", params, callback);
    
};

var part5bEvent = function() {
   showView("part6");
    
};