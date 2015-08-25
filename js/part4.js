var part4Event = function() {
    var params = {  city:document.getElementById("city4").value,
                    state:document.getElementById("state4").value,
                    country:document.getElementById("country4").value
                };
    var callback = function(err, data) {
        if (err){
            showError("part4", data)
        }else{
            document.getElementById("part4Response").innerHTML = data.results;
            showView("part4b");
        }
    }
	cb.Code().execute("ServicePart4", params, callback);
    
};

var part4bEvent = function() {
   showView("part5");
    
};