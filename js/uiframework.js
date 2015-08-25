var showView = function(viewToShow) {
    for(var view in views) {
        if(view === viewToShow) {
            document.getElementById(viewToShow).className = "";
            views[view].setup();
        } else {
            document.getElementById(view).className = "hiddenView";
        }
    }
}

var showError = function(view, message){
	 document.getElementById(view+"Error").innerHTML = message;
}

var setTitleSection = function(section, content){
    document.getElementById(section).innerHTML= content;
    if (content===""){
        document.getElementById(section).style.display = "none";
    } else {
        document.getElementById(section).style.display = "inline";
    }
};

var setTitleLeft = function(content){
    setTitleSection("titleLeft", content);
};

var titleLeftClick = function() {};

var setTitleCenter = function(content){
    setTitleSection("titleCenter", content);
};


var titleCenterClick = function() {};

var setTitleRight = function(content){
    setTitleSection("titleRight", content);
};

var titleRightClick = function() {};