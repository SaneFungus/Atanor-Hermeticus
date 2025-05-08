window.AtanorCore = window.AtanorCore || {};

// Główna aplikacja
(function() {
    // Inicjalizacja aplikacji
    function initializeApp() {
        console.log("Inicjalizacja Atanor Hermeticus...");
        
        // Inicjalizacja systemu filtrów
        if (AtanorModules.FilterSystem) {
            console.log("Inicjalizacja systemu filtrów...");
            AtanorModules.FilterSystem.initialize();
        }
        
        // Inicjalizacja menedżera modułów
        if (AtanorModules.ModuleManager) {
            console.log("Inicjalizacja menedżera modułów...");
            AtanorModules.ModuleManager.initialize();
        }
        
        // Inicjalizacja systemu rekursji
        if (AtanorModules.RecursionSystem) {
            console.log("Inicjalizacja systemu rekursji...");
            AtanorModules.RecursionSystem.initialize();
        }
        
        // Inicjalizacja interfejsu
        if (AtanorCore.Interface) {
            console.log("Inicjalizacja interfejsu...");
            AtanorCore.Interface.initialize();
        }
        
        // Inicjalizacja generatora promptów
        if (AtanorCore.PromptGenerator) {
            console.log("Inicjalizacja generatora promptów...");
            AtanorCore.PromptGenerator.initialize();
        }
        
        // Inicjalizacja rozszerzeń
        if (AtanorCore.ExtensionManager) {
            console.log("Ładowanie rozszerzeń...");
            AtanorCore.ExtensionManager.initialize();
        }
        
        console.log("Atanor Hermeticus zainicjalizowany!");
    }
    
    // Inicjalizacja po załadowaniu dokumentu
    document.addEventListener("DOMContentLoaded", initializeApp);
})();
