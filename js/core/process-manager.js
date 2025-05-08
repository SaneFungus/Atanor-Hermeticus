window.AtanorCore = window.AtanorCore || {};

// Zarządzanie procesami alchemicznymi
AtanorCore.ProcessManager = (function() {
    // Metody publiczne
    return {
        initialize: function() {
            // Inicjalizacja menedżera procesów
            console.log("ProcessManager zainicjalizowany");
        },
        
        getProcessData: function(processKey) {
            return AtanorData.processes[processKey] || null;
        },
        
        getAllProcesses: function() {
            return AtanorData.processes;
        }
    };
})();
