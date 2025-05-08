window.AtanorModules = window.AtanorModules || {};

// Zarządzanie modułami
AtanorModules.ModuleManager = (function() {
    // Stan prywatny
    let currentModule = null;
    let moduleItems;
    let selectedModuleTitle;
    let selectedModuleDescription;
    
    // Mapowanie modułów do procesów alchemicznych
    const moduleProcessMapping = {
        "Amplifikacja Kognitywna": "coniunctio",
        "Mediacja Epistemiczna": "coniunctio",
        "Destylacja Korpusów Wiedzy": "separatio",
        "Zwierciadło Kognitywne": "separatio",
        "Interfejs Intencji-Implementacji": "coagulatio",
        "Katalizator Samoświadomości Epistemicznej": "calcinatio",
        "Przestrzeń Konceptualnego Rozponowienia": "solutio",
        "Inkubator Emergentnego Rozumienia": "solutio",
        "Ekologiczna Matryca Wiedzy": "solutio",
        "Generator Scenariuszy Epistemicznych": "coagulatio",
        "Reaktywator Zmarginalizowanych Perspektyw": "coniunctio",
        "Dialektyczne Laboratorium Napięć": "coniunctio",
        "Kartograf Granic Poznawczych": "separatio",
        "Metapoznawczy Archeolog Założeń": "calcinatio",
        "Analiza Elementarna": "separatio",
        "Ekstrakcja Esencji": "separatio",
        "Krytyczna Kalcynacja": "calcinatio",
        "Expositor Fundamentorum": "calcinatio",
        "Dissolver Categoriarum": "solutio",
        "Liquefactor Perspectivae": "solutio",
        "Operationalisator": "coagulatio",
        "Incarnatio Conceptuum": "coagulatio",
        "Reintegrator Oppositionum": "coniunctio",
        "Reconciliator Paradoxorum": "coniunctio",
    };
    
    // Metody publiczne
    return {
        initialize: function() {
            moduleItems = document.querySelectorAll(".module-item");
            selectedModuleTitle = document.getElementById("selected-module-title");
            selectedModuleDescription = document.getElementById("selected-module-description");
            
            // Inicjalizacja wyboru modułów
            this.setupModuleSelection();
            
            // Inicjalizacja mapowania modułów
            this.initializeModulesWithProcessMapping();
        },
        
        setupModuleSelection: function() {
            // Module selection
            moduleItems.forEach((module) => {
                module.addEventListener("click", function() {
                    // Update active module
                    moduleItems.forEach((item) => item.classList.remove("active"));
                    this.classList.add("active");

                    // Update module info
                    currentModule = {
                        title: this.querySelector(".module-title").textContent,
                        description: this.querySelector(".module-description p").textContent,
                        process: this.getAttribute("data-process"),
                        category: this.getAttribute("data-category"),
                    };

                    selectedModuleTitle.textContent = currentModule.title;
                    selectedModuleDescription.textContent = currentModule.description;

                    // Update status
                    const statusDisplay = document.getElementById("status-display");
                    if (statusDisplay) {
                        statusDisplay.textContent = `Status: Moduł ${currentModule.title} wybrany`;
                    }
                });
            });
        },
        
        initializeModulesWithProcessMapping: function() {
            moduleItems.forEach((module) => {
                const moduleTitle = module.querySelector(".module-title").textContent;
                if (moduleProcessMapping[moduleTitle]) {
                    // Ustawienie odpowiedniego procesu alchemicznego dla modułu
                    module.setAttribute("data-process", moduleProcessMapping[moduleTitle]);

                    // Aktualizacja wyświetlanych tagów
                    const processTags = module.querySelectorAll(".module-tag.process");
                    if (processTags.length > 0) {
                        const processTag = processTags[0];
                        const process = moduleProcessMapping[moduleTitle];
                        const processData = AtanorData.processes[process];
                        const processIcon = processData ? processData.icon : "";
                        
                        processTag.textContent = `${processIcon} ${process.charAt(0).toUpperCase() + process.slice(1)}`;
                    }
                }
            });
        },
        
        getCurrentModule: function() {
            return currentModule;
        },
        
        setCurrentModule: function(module) {
    currentModule = module;
    
    if (selectedModuleTitle && selectedModuleDescription) {
        if (module) {
            selectedModuleTitle.textContent = module.title;
            selectedModuleDescription.textContent = module.description;
        } else {
            selectedModuleTitle.textContent = "Brak";
            selectedModuleDescription.textContent = "Wybierz moduł transformacji.";
        }
    }
},
        
        findModuleByName: function(name) {
            let found = null;
            moduleItems.forEach((item) => {
                const title = item.querySelector(".module-title").textContent;
                if (title === name) {
                    found = item;
                }
            });
            return found;
        }
    };
})();
