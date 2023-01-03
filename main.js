/* Es gibt 3 verschiedene Methoden zur Verkettung in Javascript.
Deklariere zwei Variablen: x mit String "Hello " und y mit String "World<br>". */

let x = "Hello";
let y = "World<br>";

// === 1. ===

/* Addiere x mit y und speichere das Ergebnis als Variable z;
Nutze den Befehl document.write() mit Wert z zwischen Klammern um im Dokument Werte anzuzeigen. Es wird im HTML Dokument angezeigt. */
let z = x + y;
document.write(z);


// === 2. ===

/*  Schreibe x + " " + y und speichere alles in der Variable n;
Nutze den Befehl document.write() mit Wert n; */

let n = x + " " + y;
document.write(n);


// === 3. ===
/*  Addiere x und String "World" mit dem passenden Zuweisungsoperator. */

x = x + " World";

/*  Nutze den Befehl document.write() mit Wert x den String im Dokument auszugeben; */

document.write(x)



let meinString = "Ich bin erster"
meinString += " / Ich komme auf Platz zwei"
/* meinString = meinString + "<br> Ich komme auf Platz zwei" */
console.log(meinString);


document.write("<br><br>" + meinString);
