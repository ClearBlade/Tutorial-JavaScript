var views = {
    part1: {
        setup: function() {
            setTitleLeft("");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
        }
    },
    part1b: {
        setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part1");
            };
            titleCenterClick = function() {};
        }

    },part2: {
        setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part1");
            };
            titleCenterClick = function() {};
        }

    },part2b: {
        setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part2");
            };
            titleCenterClick = function() {};
        }

    },
    part3: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part2b");
            };
            titleCenterClick = function() {};
       } 
    },
    part3b: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part3");
            };
            titleCenterClick = function() {};
       } 
    },
    part4: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part3");
            };
            titleCenterClick = function() {};
       } 
    },
    part4b: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part3");
            };
            titleCenterClick = function() {};
       } 
    },
    part5: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part4");
            };
            titleCenterClick = function() {};
       } 
    },
    part5b: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part5");
            };
            titleCenterClick = function() {};
       } 
    },part6: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part5");
            };
            titleCenterClick = function() {};
       } 
    },part6b: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part6");
            };
            titleCenterClick = function() {};
       } 
    },part7: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part6");
            };
            titleCenterClick = function() {};
       } 
    },part7b: {
       setup: function() {
            setTitleLeft("Back");
            setTitleCenter("<div class='titleLabel'>ClearBlade Tutorial</div>");
            setTitleRight("");
            titleLeftClick = function() {
                showView("part7");
            };
            titleCenterClick = function() {};
       } 
    }
    
}


var startup = function() {
    showView("part1");
}