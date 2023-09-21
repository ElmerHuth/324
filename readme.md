Övning 1: Skapa en kortlek
Uppgift: Skapa en array som representerar en standardkortlek med 52 kort (utan jokrar).

Tips: Använd två loopar: en för valörerna (2 till 10, knekt, dam, kung, ess) och en för sviterna (hjärter, ruter, klöver, spader).

Övning 2: Blanda kortleken
Uppgift: Implementera en funktion som blandar kortleken slumpmässigt.

Tips: Du kan använda Fisher-Yates algoritmen (även känd som Knuths blandning) för att effektivt blanda en array.

Övning 3: Dela ut kort
Uppgift: Skriv en funktion som delar ut de översta korten från kortleken till spelare. Varje spelare bör få en hand bestående av ett specifikt antal kort (t.ex. 5 kort i en hand).

Tips: Använd splice() eller slice() för att ta ut kort från kortleken.

Övning 4: Hitta ett specifikt kort
Uppgift: Skriv en funktion som tar en hand (array av kort) som argument och avgör om handen innehåller ett specifikt kort, t.ex. "Hjärter Kung".

Tips: Använd find() eller includes() metoden på arrayen.

Övning 5: Jämför händer
Uppgift: Skapa två händer och skriv en funktion som jämför dem baserat på valfri regel, t.ex. vilken hand som har flest "ess".

Tips: Du kan använda filter() för att räkna antalet specifika kort i varje hand.