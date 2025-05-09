window.AtanorModules = window.AtanorModules || {};

// Zarządzanie modułami
AtanorModules.ModuleManager = (function() {
    // Stan prywatny
    let currentModules = []; // Zmiana z pojedynczego modułu na tablicę modułów
    let moduleItems;
    let selectedModuleTitle;
    let selectedModuleDescription;
    let selectedModulesList; // Nowy element do wyświetlania wybranych modułów
    
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
            
            // Inicjalizacja elementu listy wybranych modułów
            this.createSelectedModulesList();
            
            // Inicjalizacja wyboru modułów
            this.setupModuleSelection();
            
            // Inicjalizacja mapowania modułów
            this.initializeModulesWithProcessMapping();
        },
        
        // Nowa funkcja do utworzenia listy wybranych modułów w interfejsie
        createSelectedModulesList: function() {
            // Sprawdź, czy element listy już istnieje
            selectedModulesList = document.getElementById("selected-modules-list");
            if (!selectedModulesList) {
                // Utwórz kontener dla listy wybranych modułów
                const moduleInfoElement = document.querySelector(".module-info");
                selectedModulesList = document.createElement("div");
                selectedModulesList.id = "selected-modules-list";
                selectedModulesList.className = "selected-modules-list";
                
                // Wstaw nagłówek dla listy
                const header = document.createElement("h4");
                header.textContent = "Wybrane moduły:";
                selectedModulesList.appendChild(header);
                
                // Wstaw listę do strony
                moduleInfoElement.appendChild(selectedModulesList);
                
                // Dodaj informację o pustej liście
                const emptyInfo = document.createElement("p");
                emptyInfo.className = "empty-list-info";
                emptyInfo.textContent = "Nie wybrano jeszcze żadnych modułów.";
                selectedModulesList.appendChild(emptyInfo);
            }
        },
        
        // Zaktualizowana funkcja wyboru modułów
        setupModuleSelection: function() {
            // Module selection
            moduleItems.forEach((module) => {
                module.addEventListener("click", (e) => {
                    // Zapobiegnij odznaczeniu wszystkich modułów jeśli kliknięto w zawartość
                    e.stopPropagation();
                    
                    const moduleTitle = module.querySelector(".module-title").textContent;
                    const moduleDescription = module.querySelector(".module-description p").textContent;
                    const moduleProcess = module.getAttribute("data-process");
                    const moduleCategory = module.getAttribute("data-category");
                    
                    // Sprawdź, czy moduł jest już wybrany
                    if (module.classList.contains("active")) {
                        // Usuń moduł z listy wybranych
                        module.classList.remove("active");
                        this.removeModule({
                            title: moduleTitle,
                            description: moduleDescription,
                            process: moduleProcess,
                            category: moduleCategory,
                            element: module
                        });
                    } else {
                        // Dodaj moduł do listy wybranych
                        module.classList.add("active");
                        this.addModule({
                            title: moduleTitle,
                            description: moduleDescription,
                            process: moduleProcess,
                            category: moduleCategory,
                            element: module
                        });
                    }

                    // Aktualizuj informacje w interfejsie
                    this.updateModuleInfo();
                });
            });
        },
        
        // Dodaj nowy moduł do listy wybranych
        addModule: function(module) {
            if (!this.isModuleSelected(module.title)) {
                currentModules.push(module);
                this.updateSelectedModulesList();
                
                // Aktualizuj status
                const statusDisplay = document.getElementById("status-display");
                if (statusDisplay) {
                    statusDisplay.textContent = `Status: Dodano moduł ${module.title}`;
                }
            }
        },
        
        // Usuń moduł z listy wybranych
        removeModule: function(module) {
            currentModules = currentModules.filter(m => m.title !== module.title);
            this.updateSelectedModulesList();
            
            // Aktualizuj status
            const statusDisplay = document.getElementById("status-display");
            if (statusDisplay) {
                statusDisplay.textContent = `Status: Usunięto moduł ${module.title}`;
            }
        },
        
        // Sprawdź, czy moduł jest już wybrany
        isModuleSelected: function(moduleTitle) {
            return currentModules.some(m => m.title === moduleTitle);
        },
        
        // Aktualizacja listy wybranych modułów w interfejsie
        updateSelectedModulesList: function() {
            // Wyczyść obecną listę
            while (selectedModulesList.children.length > 1) {
                selectedModulesList.removeChild(selectedModulesList.lastChild);
            }
            
            // Jeśli nie ma wybranych modułów, pokaż informację
            if (currentModules.length === 0) {
                const emptyInfo = document.createElement("p");
                emptyInfo.className = "empty-list-info";
                emptyInfo.textContent = "Nie wybrano jeszcze żadnych modułów.";
                selectedModulesList.appendChild(emptyInfo);
                return;
            }
            
            // Dodaj każdy wybrany moduł do listy
            currentModules.forEach((module, index) => {
                const moduleItem = document.createElement("div");
                moduleItem.className = "selected-module-item";
                
                const moduleInfo = document.createElement("div");
                moduleInfo.className = "selected-module-info";
                moduleInfo.textContent = `${index + 1}. ${module.title}`;
                
                const removeBtn = document.createElement("button");
                removeBtn.className = "remove-module-btn";
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.addEventListener("click", () => {
                    // Usuń moduł z listy
                    this.removeModule(module);
                    // Odznacz moduł w głównej liście
                    if (module.element) {
                        module.element.classList.remove("active");
                    } else {
                        const foundModule = this.findModuleByName(module.title);
                        if (foundModule) {
                            foundModule.classList.remove("active");
                        }
                    }
                    this.updateModuleInfo();
                });
                
                moduleItem.appendChild(moduleInfo);
                moduleItem.appendChild(removeBtn);
                selectedModulesList.appendChild(moduleItem);
            });
        },
        
        // Aktualizacja informacji o wybranych modułach
        updateModuleInfo: function() {
            if (currentModules.length > 0) {
                // Jeśli jest tylko jeden moduł, wyświetl jego pełny opis
                if (currentModules.length === 1) {
                    selectedModuleTitle.textContent = currentModules[0].title;
                    selectedModuleDescription.textContent = currentModules[0].description;
                } else {
                    // Jeśli jest więcej modułów, pokaż liczbę wybranych
                    selectedModuleTitle.textContent = `Wybrano ${currentModules.length} modułów`;
                    selectedModuleDescription.textContent = "Wybrane moduły zostaną połączone w złożony prompt transformacyjny.";
                }
            } else {
                // Jeśli nie ma wybranych modułów
                selectedModuleTitle.textContent = "Brak";
                selectedModuleDescription.textContent = "Wybierz moduły transformacji.";
            }
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
        
        // Zmodyfikowana funkcja zwracająca wszystkie wybrane moduły
        getSelectedModules: function() {
            return currentModules;
        },
        
        // Pozostawiam dla kompatybilności wstecznej
        getCurrentModule: function() {
            return currentModules.length > 0 ? currentModules[0] : null;
        },
        
        // Zmodyfikowana funkcja czyszcząca wybrane moduły
        clearSelectedModules: function() {
            // Odznacz wszystkie moduły w interfejsie
            moduleItems.forEach(item => {
                item.classList.remove("active");
            });
            
            // Wyczyść tablicę wybranych modułów
            currentModules = [];
            
            // Aktualizuj informacje w interfejsie
            this.updateModuleInfo();
            this.updateSelectedModulesList();
        },
        
        // Dla kompatybilności wstecznej
        setCurrentModule: function(module) {
            this.clearSelectedModules();
            
            if (module) {
                this.addModule(module);
                
                // Zaznacz moduł w interfejsie
                const moduleElement = this.findModuleByName(module.title);
                if (moduleElement) {
                    moduleElement.classList.add("active");
                }
            }
            
            this.updateModuleInfo();
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
