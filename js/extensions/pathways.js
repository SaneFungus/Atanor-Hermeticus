window.AtanorExtensions = window.AtanorExtensions || {};

// Ścieżki praktyczne
AtanorExtensions.Pathways = (function() {
    // Definicje ścieżek praktycznych
    const practicalPathways = {
        
    original: {
      name: "Wyjście Oryginalne (Hermetyczne)",
      description:
        "Pełna analiza filozoficzno-epistemiczna bez uproszczeń, zachowująca wszystkie niuanse i złożoności.",
      template: "", // Pusty template oznacza brak modyfikacji oryginalnego promptu
    },
    academic: {
      name: "Format Akademicki",
      description:
        "Struktura typowa dla artykułów naukowych, z jasno wydzielonymi częściami i formalnym językiem akademickim.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw wyniki analizy w formie akademickiego artykułu z następującymi częściami:

# TYTUŁ
[Zwięzły, akademicki tytuł odzwierciedlający główne zagadnienie]

## Abstrakt
[1-2 akapity przedstawiające istotę i wyniki analizy]

## Wprowadzenie
[Tło problemowe i kontekst badawczy]

## Metodologia
[Opis zastosowanego podejścia analitycznego]

## Analiza
[Właściwa część analityczna podzielona na podsekcje]

## Wnioski
[Synteza wyników i ich znaczenie]

## Bibliografia
[Sugerowane źródła rozwijające temat]
        `,
    },
    essay: {
      name: "Esej",
      description:
        "Płynna, narracyjna forma z rozwiniętymi metaforami i przykładami ułatwiającymi zrozumienie.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw wyniki analizy w formie eseju literacko-filozoficznego:

# [Intrygujący, metaforyczny tytuł]

[Otwierający akapit wprowadzający główny motyw lub pytanie]

[Rozwinięcie narracji, płynnie przechodzącej między poziomami analizy]

[Bogactwo metafor i przykładów ilustrujących omawiane zjawiska]

[Odniesienia do różnych dziedzin wiedzy i doświadczenia]

[Zakończenie z refleksyjną puentą lub pytaniem otwierającym]
        `,
    },
    didactic: {
      name: "Format Dydaktyczny",
      description:
        "Informacje uporządkowane w sposób ułatwiający nauczanie, z pytaniami pomocniczymi, ćwiczeniami i sugestiami do dyskusji.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie materiału dydaktycznego:

# [Tytuł zajęć/lekcji]

## Cele dydaktyczne
- [Cel 1]
- [Cel 2]
- [Cel 3]

## Kluczowe pojęcia
[Lista i wyjaśnienie najważniejszych pojęć]

## Wprowadzenie do tematu
[Przystępne wprowadzenie włączające doświadczenia uczniów/studentów]

## Rozwinięcie tematu
[Strukturyzowane rozwinięcie z podziałem na mniejsze części]

## Pytania do refleksji
- [Pytanie 1]
- [Pytanie 2]
- [Pytanie 3]

## Ćwiczenia i aktywności
1. [Opis ćwiczenia 1]
2. [Opis ćwiczenia 2]
3. [Opis ćwiczenia 3]

## Sugestie do dyskusji
[Tematy i pytania do dyskusji grupowej]

## Materiały uzupełniające
[Sugestie dodatkowych materiałów]
        `,
    },
    freshman: {
      name: "Język Studentów Pierwszego Roku",
      description:
        "Uproszczone wyjaśnienia bez żargonu filozoficznego, wykorzystujące codzienne analogie i przykłady.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw te złożone idee w sposób zrozumiały dla osoby bez wykształcenia filozoficznego:

# [Prosty, bezpośredni tytuł - pytanie lub stwierdzenie]

## O co w tym wszystkim chodzi?
[Wyjaśnienie sedna problemu w 2-3 prostych zdaniach]

## Wyobraź sobie, że...
[Codzienna analogia lub metafora]

## Krok po kroku
[Rozbicie złożonego procesu na proste etapy]

## Przykłady z życia
[2-3 konkretne przykłady z codziennego doświadczenia]

## Dlaczego to ważne?
[Praktyczne znaczenie tych idei w życiu]

## W skrócie
[Podsumowanie w 3-5 punktach]

WAŻNE:
- Używaj języka prostego, unikaj terminów specjalistycznych
- Jeśli musisz użyć trudnego terminu, natychmiast go wyjaśnij
- Pisz krótkie zdania
- Używaj wielu konkretnych przykładów
- Odwołuj się do powszechnych doświadczeń
        `,
    },
    visual: {
      name: "Format Wizualno-Konceptualny",
      description:
        "Sugestie dotyczące wizualizacji koncepcji w formie diagramów, map myśli i struktur przestrzennych.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie sugerującej wizualizacje konceptualne:

# [Tytuł wizualizacji]

## Główne elementy wizualne
[Opis kluczowych elementów do zwizualizowania]

## Struktura wizualizacji
[Opis proponowanej struktury - liniowa, promieniująca, hierarchiczna, sieciowa, etc.]

## Mapy konceptualne
[Opis map konceptualnych z węzłami, połączeniami i hierarchiami]

## Diagramy relacyjne
[Opis diagramów ukazujących relacje między elementami]

## Metafory wizualne
[Propozycje metafor wizualnych ułatwiających zrozumienie]

## Sugestie kolorystyczne i formalne
[Propozycje dotyczące kolorów, form i stylów wizualnych]

WAŻNE:
- Opisz wizualizacje w sposób umożliwiający ich wykonanie przez osobę z umiejętnościami wizualnymi
- Zaproponuj różne podejścia dla różnych zastosowań (analiza, prezentacja, nauczanie)
- Uwzględnij aspekty przestrzenne, kolorystyczne i formalne
        `,
    },
    workshop: {
      name: "Format Warsztatowy",
      description:
        "Przekształcenie treści teoretycznych w ćwiczenia praktyczne i doświadczalne, które można przeprowadzić w przestrzeni warsztatowej.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie scenariusza warsztatu praktycznego:

# [Tytuł warsztatu]

## Cele warsztatu
[Jasno określone cele edukacyjne i doświadczalne]

## Czas trwania i uczestnicy
[Sugerowany czas trwania i liczba uczestników]

## Potrzebne materiały
[Lista materiałów niezbędnych do przeprowadzenia warsztatu]

## Przygotowanie przestrzeni
[Wskazówki dotyczące aranżacji przestrzeni]

## Wprowadzenie (... min)
[Sposób wprowadzenia uczestników w temat]

## Ćwiczenie 1: [Nazwa] (... min)
[Szczegółowy opis pierwszego ćwiczenia]

## Ćwiczenie 2: [Nazwa] (... min)
[Szczegółowy opis drugiego ćwiczenia]

## Ćwiczenie 3: [Nazwa] (... min)
[Szczegółowy opis trzeciego ćwiczenia]

## Dyskusja podsumowująca (... min)
[Struktura i pytania do dyskusji podsumowującej]

## Możliwe warianty
[Sugestie alternatywnych podejść i adaptacji]
        `,
    },
    socratic: {
      name: "Dialog Sokratejski",
      description:
        "Przedstawienie treści w formie dialogu pytań i odpowiedzi, pomagającego stopniowo zgłębiać temat.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie dialogu sokratejskiego:

# [Tytuł dialogu]

*Rozmówcy: Nauczyciel i Uczeń*

**Nauczyciel**: [Początkowe pytanie otwierające dialog]

**Uczeń**: [Wstępna odpowiedź, pokazująca początkowe rozumienie tematu]

**Nauczyciel**: [Pytanie pogłębiające, wskazujące na ograniczenia początkowego rozumienia]

**Uczeń**: [Próba odpowiedzi, pokazująca proces myślowy]

**Nauczyciel**: [Kolejne pytanie, prowadzące do głębszego zrozumienia]

[Kontynuacja dialogu, z progresywnym pogłębianiem zrozumienia]

**Nauczyciel**: [Pytanie prowadzące do kluczowego odkrycia]

**Uczeń**: [Moment olśnienia, nowe zrozumienie]

**Nauczyciel**: [Pytanie o implikacje nowego zrozumienia]

**Uczeń**: [Eksploracja praktycznych konsekwencji]

**Nauczyciel**: [Końcowe pytanie otwierające dalszą refleksję]

WAŻNE:
- Dialog powinien pokazywać stopniowy postęp od powierzchownego do głębokiego zrozumienia
- Pytania nauczyciela powinny być otwarte, niepodające gotowych odpowiedzi
- Odpowiedzi ucznia powinny pokazywać proces myślowy, również momenty konfuzji i odkrycia
- Dialog powinien kończyć się nie definitywną konkluzją, lecz otwarciem na dalszą refleksję
        `,
    },
    manifesto: {
      name: "Manifest Artystyczny",
      description:
        "Prezentacja idei w wyrazistej, programowej formie manifestu artystycznego, z silnym nacechowaniem emocjonalnym i wizjonerskim.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie manifestu artystycznego:

# [TYTUŁ MANIFESTU W FORMIE WEZWANIA LUB DEKLARACJI]

[Silna deklaracja otwierająca, ustanawiająca ton i patos manifestu]

[Seria stanowczych twierdzeń i wezwań wyrażonych w pierwszej osobie liczby mnogiej]

[Radykalne odrzucenie zastanego porządku lub konwencji w danej dziedzinie]

[Wizjonerska propozycja nowego podejścia lub paradygmatu]

[Stanowcze stwierdzenia dotyczące relacji sztuki/wiedzy do życia i społeczeństwa]

[Odwołania do przyszłości i transformacyjnego potencjału proponowanych idei]

[Konkluzja w formie wezwania do działania]

WAŻNE:
- Używaj języka wyrazistego, wizjonerskiego, emocjonalnego
- Stosuj krótkie, stanowcze zdania
- Używaj form ekspresyjnych jak wykrzykniki, powtórzenia, pytania retoryczne
- Łącz rewolucyjny zapał z głęboką treścią filozoficzną
- Twórz poczucie historycznego momentu i przełomu
        `,
    },
    creative: {
      name: "Proces Twórczy",
      description:
        "Strukturyzacja wiedzy w formie odzwierciedlającej etapy procesu twórczego, od inspiracji przez eksplorację do realizacji.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie odzwierciedlającej proces twórczy:

# [Tytuł procesu twórczego]

## I. INSPIRACJA
[Opis początkowych impulsów, pytań, obserwacji i intuicji]

## II. INKUBACJA
[Opis podświadomego dojrzewania idei, gromadzenia materiałów, pierwszych szkiców]

## III. EKSPLORACJA
[Opis procesu badawczego, eksperymentowania, prób i błędów]

## IV. ILUMINACJA
[Opis momentów przełomowych, odkryć, rozwiązań kluczowych problemów]

## V. WERYFIKACJA
[Opis procesu krytycznej analizy, testowania, udoskonalania]

## VI. REALIZACJA
[Opis procesu materializacji koncepcji, wykonania]

## VII. REFLEKSJA
[Meta-analiza całego procesu, wnioski na przyszłość]

WAŻNE:
- Przedstaw analizę jako żywy, organiczny proces
- Uwzględnij zarówno racjonalne jak i intuicyjne aspekty
- Zaznacz momenty niepewności, zwątpienia i ich przezwyciężania
- Pokaż nielinearne aspekty procesu twórczego
        `,
    },
    curatorial: {
      name: "Format Kuratorski",
      description:
        "Organizacja wiedzy w formie koncepcji kuratorskiej, łączącej elementy teoretyczne z propozycjami ekspozycyjnymi.",
      template: `
INSTRUKCJA FORMATOWANIA:
Przedstaw analizę w formie koncepcji kuratorskiej:

# [Tytuł wystawy/projektu]

## Koncept kuratorski
[Główna idea kuratorsja, teza, pytanie badawcze]

## Kontekst i znaczenie
[Umiejscowienie projektu w szerszym kontekście kulturowym, społecznym, artystycznym]

## Struktura narracyjna
[Opis narracji prowadzącej przez projekt, jej rozwoju i kulminacji]

## Przestrzeń i architektura
[Koncepcja przestrzenna, aranżacja, choreografia ruchu zwiedzających]

## Sekcja I: [Tytuł]
[Opis pierwszej sekcji tematycznej, jej treści i elementów]

## Sekcja II: [Tytuł]
[Opis drugiej sekcji tematycznej, jej treści i elementów]

## Sekcja III: [Tytuł]
[Opis trzeciej sekcji tematycznej, jej treści i elementów]

## Program towarzyszący
[Propozycje wydarzeń, dyskusji, publikacji towarzyszących]

WAŻNE:
- Łącz rygor teoretyczny z wrażliwością na doświadczenie odbiorcy
- Uwzględniaj aspekty materialne i niematerialne prezentacji
- Zaproponuj możliwości różnych ścieżek odbioru
- Uwzględnij kontekst przestrzenny i temporalny
        `,
    },
    };
    
    // Stan prywatny
    let currentPathway = null;
    let pathwayDescription;
    let moduleItems;
    let statusDisplay;
    
    // Metody publiczne
    return {
        initialize: function() {
            pathwayDescription = document.getElementById("pathway-description");
            moduleItems = document.querySelectorAll(".module-item");
            statusDisplay = document.getElementById("status-display");
            
            // Inicjalizacja przycisków ścieżek
            this.setupPathwayButtons();
            
            // Inicjalizacja dodatkowych ścieżek
            this.setupAdditionalPathways();
            
            console.log("Pathways zainicjalizowany");
        },
        
        setupPathwayButtons: function() {
            // Obsługa przycisków ścieżek
            document.querySelectorAll(".pathway-btn").forEach((button) => {
                button.addEventListener("click", function() {
                    const pathType = this.getAttribute("data-path");
                    const pathway = practicalPathways[pathType];
                    
                    if (!pathway) return;
                    
                    // Aktualizacja aktywnego przycisku
                    document.querySelectorAll(".pathway-btn").forEach((btn) => btn.classList.remove("active"));
                    this.classList.add("active");
                    
                    // Aktualizacja opisu ścieżki
                    if (pathwayDescription) {
                        pathwayDescription.textContent = pathway.description;
                        pathwayDescription.classList.add("highlight-anim");
                        
                        // Usunięcie animacji po zakończeniu
                        setTimeout(() => {
                            pathwayDescription.classList.remove("highlight-anim");
                        }, 2000);
                    }
                    
                    // Zapamiętanie wybranej ścieżki
                    currentPathway = pathway;
                    
                    // Zastosowanie ścieżki (wybór odpowiednich modułów)
                    AtanorExtensions.Pathways.applyPracticalPathway(pathway);
                    
                    // Aktualizacja statusu
                    if (statusDisplay) {
                        statusDisplay.textContent = `Status: Wybrano ścieżkę "${pathway.name}"`;
                    }
                });
            });
        },
        
        setupAdditionalPathways: function() {
            // Obsługa przycisku dodatkowych ścieżek
            const additionalPathwaysToggle = document.querySelector(".additional-pathways-toggle");
            if (additionalPathwaysToggle) {
                additionalPathwaysToggle.addEventListener("click", function() {
                    const content = document.querySelector(".additional-pathways-content");
                    if (content) {
                        content.classList.toggle("visible");
                        
                        // Zmiana ikony i tekstu przycisku
                        if (content.classList.contains("visible")) {
                            this.innerHTML = 'Mniej ścieżek praktycznych <i class="fas fa-chevron-up"></i>';
                        } else {
                            this.innerHTML = 'Więcej ścieżek praktycznych <i class="fas fa-chevron-down"></i>';
                        }
                    }
                });
            }
        },
        
        applyPracticalPathway: function(pathway) {
            // Resetowanie aktualnej selekcji modułów
            moduleItems.forEach((item) => {
                item.classList.remove("active");
                item.classList.remove("pathway-module");
            });
            
            // Zaznaczenie modułów ze ścieżki
            if (pathway && pathway.modules) {
                pathway.modules.forEach((moduleName) => {
                    const moduleElement = AtanorModules.ModuleManager.findModuleByName(moduleName);
                    if (moduleElement) {
                        moduleElement.classList.add("pathway-module");
                        // Animacja podświetlająca moduły
                        moduleElement.classList.add("highlight-anim");
                        setTimeout(() => {
                            moduleElement.classList.remove("highlight-anim");
                        }, 2000);
                    }
                });
                
                // Aktywacja pierwszego modułu
                const firstModule = AtanorModules.ModuleManager.findModuleByName(pathway.modules[0]);
                if (firstModule) {
                    firstModule.click();
                }
            }
        },
        
        getCurrentPathway: function() {
            return currentPathway;
        },
        
        getAllPathways: function() {
            return practicalPathways;
        }
    };
})();
