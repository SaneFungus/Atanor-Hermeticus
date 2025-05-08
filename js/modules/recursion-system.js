window.AtanorModules = window.AtanorModules || {};

// System poziomów rekursji
AtanorModules.RecursionSystem = (function() {
    // Stan prywatny
    let currentRecursionLevel = 3;
    let recursionCircles;
    
    // Metody publiczne
    return {
        initialize: function() {
            recursionCircles = document.querySelectorAll(".recursion-circle");
            
            // Inicjalizacja wyboru poziomów rekursji
            this.setupRecursionSelection();
        },
        
        setupRecursionSelection: function() {
            // Recursion level selection
            recursionCircles.forEach((circle) => {
                circle.addEventListener("click", function() {
                    recursionCircles.forEach((c) => c.classList.remove("active"));
                    this.classList.add("active");
                    currentRecursionLevel = this.getAttribute("data-level");
                });
            });
        },
        
        getCurrentRecursionLevel: function() {
            return currentRecursionLevel;
        },
        
        setCurrentRecursionLevel: function(level) {
            currentRecursionLevel = level;
            
            // Aktualizacja UI
            recursionCircles.forEach((circle) => {
                if (circle.getAttribute("data-level") === level.toString()) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }
            });
        }
    };
})();
