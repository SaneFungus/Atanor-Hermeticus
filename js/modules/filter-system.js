window.AtanorModules = window.AtanorModules || {};

// System filtrów
AtanorModules.FilterSystem = (function() {
    // Stan prywatny
    let activeFilters = {
        process: [],
        category: []
    };
    
    // Elementy DOM
    let activeFiltersContainer;
    let moduleItems;
    let categoryButtons;
    let clearFiltersBtn;
    let symbols;
    let processDescription;
    
    // Metody prywatne
    function updateActiveFiltersDisplay() {
        // Get all active filters
        const allFilters = [...activeFilters.process, ...activeFilters.category];

        // Check if there are any active filters
        if (allFilters.length === 0) {
            activeFiltersContainer.classList.add("empty");
            activeFiltersContainer.textContent = "Nie wybrano filtrów - wyświetlanie wszystkich modułów";
            return;
        }

        // Remove empty class
        activeFiltersContainer.classList.remove("empty");

        // Clear container
        activeFiltersContainer.innerHTML = "";

        // Add process filters
        activeFilters.process.forEach((filter) => {
            const tagElement = document.createElement("div");
            tagElement.className = "filter-tag process";

            const processData = AtanorData.processes[filter];
            const icon = processData ? processData.icon : "";
            const label = filter.charAt(0).toUpperCase() + filter.slice(1);

            tagElement.innerHTML = `${icon} ${label} <span class="remove">✕</span>`;

            tagElement.addEventListener("click", () => {
                AtanorModules.FilterSystem.removeFilter("process", filter);
            });

            activeFiltersContainer.appendChild(tagElement);
        });

        // Add category filters
        activeFilters.category.forEach((filter) => {
            const tagElement = document.createElement("div");
            tagElement.className = "filter-tag category";

            const label = filter.charAt(0).toUpperCase() + filter.slice(1);

            tagElement.innerHTML = `${label} <span class="remove">✕</span>`;

            tagElement.addEventListener("click", () => {
                AtanorModules.FilterSystem.removeFilter("category", filter);
            });

            activeFiltersContainer.appendChild(tagElement);
        });
    }
    
    function applyFilters() {
        // Show all modules first
        moduleItems.forEach((module) => module.classList.remove("hidden"));

        // Apply process filters if any
        if (activeFilters.process.length > 0) {
            moduleItems.forEach((module) => {
                const moduleProcess = module.getAttribute("data-process");
                if (!activeFilters.process.includes(moduleProcess)) {
                    module.classList.add("hidden");
                }
            });
        }

        // Apply category filters if any
        if (activeFilters.category.length > 0) {
            moduleItems.forEach((module) => {
                if (module.classList.contains("hidden")) return; // Skip already hidden modules

                const moduleCategory = module.getAttribute("data-category");
                if (!activeFilters.category.includes(moduleCategory)) {
                    module.classList.add("hidden");
                }
            });
        }
    }
    
    function updateFilterButtonStates() {
        // Update process filter buttons
        document.querySelectorAll('.category-btn[data-filter-type="process"]').forEach((button) => {
            const value = button.getAttribute("data-filter-value");

            if (value === "all") {
                // "All Processes" button is active only when no process filters are selected
                button.classList.toggle("active", activeFilters.process.length === 0);
            } else {
                // Other process buttons are active when their value is in the active filters
                button.classList.toggle("active", activeFilters.process.includes(value));
            }
        });

        // Update category filter buttons
        document.querySelectorAll('.category-btn[data-filter-type="category"]').forEach((button) => {
            const value = button.getAttribute("data-filter-value");

            if (value === "all") {
                // "All Categories" button is active only when no category filters are selected
                button.classList.toggle("active", activeFilters.category.length === 0);
            } else {
                // Other category buttons are active when their value is in the active filters
                button.classList.toggle("active", activeFilters.category.includes(value));
            }
        });
    }
    
    // Metody publiczne
    return {
        initialize: function() {
            activeFiltersContainer = document.getElementById("active-filters");
            moduleItems = document.querySelectorAll(".module-item");
            symbols = document.querySelectorAll(".symbol");
            processDescription = document.getElementById("process-description");
            clearFiltersBtn = document.getElementById("clear-filters");
            
            // Inicjalizacja przycisków filtrów
            categoryButtons = document.querySelectorAll(".category-btn");
            categoryButtons.forEach((button) => {
                button.addEventListener("click", function() {
                    const filterType = this.getAttribute("data-filter-type");
                    const filterValue = this.getAttribute("data-filter-value");

                    if (filterValue === "all") {
                        // Clear filters of this type
                        AtanorModules.FilterSystem.clearFilters(filterType);
                    } else {
                        // Add filter
                        AtanorModules.FilterSystem.addFilter(filterType, filterValue);
                    }
                });
            });
            
            // Clear all filters button
            clearFiltersBtn.addEventListener("click", function() {
                AtanorModules.FilterSystem.clearAllFilters();
            });
            
            // Inicjalizacja symboli alchemicznych
            symbols.forEach((symbol) => {
                symbol.addEventListener("click", function() {
                    const process = this.getAttribute("data-process");

                    // Update active symbol
                    symbols.forEach((s) => s.classList.remove("active"));
                    this.classList.add("active");

                    // Update process description
                    if (AtanorData.processes[process]) {
                        const processData = AtanorData.processes[process];
                        const processIcon = document.getElementById("process-icon");
                        const processTitle = document.getElementById("process-title");
                        const processText = document.getElementById("process-text");
                        
                        processIcon.textContent = processData.icon;
                        processTitle.textContent = processData.title;
                        processText.textContent = processData.text;
                    }
                    
                    processDescription.classList.add("active");

                    // Add filter for this process
                    AtanorModules.FilterSystem.addFilter("process", process);

                    // Update status
                    const statusDisplay = document.getElementById("status-display");
                    if (statusDisplay) {
                        statusDisplay.textContent = `Status: Proces ${AtanorData.processes[process].title} aktywowany`;
                    }
                });
            });
        },
        
        addFilter: function(type, value) {
            // Check if filter already exists
            if (!activeFilters[type].includes(value)) {
                // Add filter
                activeFilters[type].push(value);

                // Update active filters display
                updateActiveFiltersDisplay();

                // Update module visibility
                applyFilters();

                // Update filter button states
                updateFilterButtonStates();
            }
        },
        
        removeFilter: function(type, value) {
            // Remove filter
            activeFilters[type] = activeFilters[type].filter((v) => v !== value);

            // Update active filters display
            updateActiveFiltersDisplay();

            // Update module visibility
            applyFilters();

            // Update filter button states
            updateFilterButtonStates();

            // If it was a process filter, also deactivate the symbol
            if (type === "process") {
                symbols.forEach((s) => {
                    if (s.getAttribute("data-process") === value) {
                        s.classList.remove("active");
                    }
                });

                // Hide process description if no process filter is active
                if (activeFilters.process.length === 0) {
                    processDescription.classList.remove("active");
                }
            }
        },
        
        clearFilters: function(type) {
            // Clear filters of specific type
            activeFilters[type] = [];

            // Update active filters display
            updateActiveFiltersDisplay();

            // Update module visibility
            applyFilters();

            // Update filter button states
            updateFilterButtonStates();

            // If clearing process filters, also deactivate all symbols
            if (type === "process") {
                symbols.forEach((s) => s.classList.remove("active"));
                processDescription.classList.remove("active");
            }
        },
        
        clearAllFilters: function() {
            // Clear all filters
            activeFilters.process = [];
            activeFilters.category = [];

            // Update active filters display
            updateActiveFiltersDisplay();

            // Show all modules
            moduleItems.forEach((module) => module.classList.remove("hidden"));

            // Update filter button states
            updateFilterButtonStates();

            // Deactivate all symbols
            symbols.forEach((s) => s.classList.remove("active"));
            processDescription.classList.remove("active");
        },
        
        getActiveFilters: function() {
            return activeFilters;
        }
    };
})();
