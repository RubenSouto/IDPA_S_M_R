import { Injectable } from '@angular/core';
import { Theorie } from './interface/thema';

@Injectable({
  providedIn: 'root'
})
export class TheorieDataService {

  public theorieInhalte: Theorie[]
  constructor() {
    this.theorieInhalte = [
      {
        parentId: 1,
        id: 1,
        titel: "Wahrnehmung von Temperatur",
        inhalt:
        "Im Alltag sagen wir zu sachen warm/kalt je nach dem wie wir es empfinden.<br>"+
        "Dies ist aber Subjektiv und nicht verlässlich, in der Physik machen wir damit Aussagen über die physikalische Grösse der Temperatur. <br>"+
        "Dies ist ein objektives Mass dafür, wie warm ein Körper ist."
      },
      {
        parentId: 1,
        id: 2,
        titel: "Definition: Temperatur",
        inhalt:
        "Die Temperatur gibt an, wie warm oder kalt ein Körper ist. <br>"+
        "Sie ist ein Mass für die mittlere kinetische Energie pro Teilchen."
      },
      {
        parentId: 2,
        id: 3,
        titel: "Funktionsweise von Temperaturmessgeräte",
        inhalt:
        "Viele dieser Geräte beruhen auf zwei Tatsachen: <br>"+
        "<ul><li>1. Viele feste, flüssige und gasförmige Stoffe dehnen sich aus, wenn sie erwärmt werden. </li>"+
        "<li>2. Zwei verschieden Warme Gegenstände werden nach längerer Zeit die selbe Temperatur haben, die Körper sind dann im thermischen Gleichgewicht.</li></ul>"
      },
      {
        parentId: 2,
        id: 4,
        titel: "Temperaturskala: Celsius",
        inhalt: "Der Schwede Anders Celsius schlug die Temperaturskala vor, die wir heute alle, ausser Amerikaner, kennen. <br>"+
        "Schmelztemperatur von Eis = 0 C. <br>"+
        "Siedetemperatur von Wasser (bei Normaldruck) = 100 C. "
      },
      {
        parentId: 2,
        id: 7,
        titel: "Temperaturskala: Kelvin",
        inhalt: "Die absolute Temperatur 'T' wird in Kelvin angegeben. <br>"+
        "Der absolute Nullpunkt ist die tiefstmögliche Temperatur im Universum, wo es theoretisch gar keine Teilchenbewegungen mehr gibt. <br>"+
        "Die Kelvin-Skala beginnt bei 0 K = -273.15 C und besitzt die gleiche Skalierung wie die Celsius-Skala. <br>"+
        //Formel
        "<ul><li>T [K] = T (in C) + 273.15 K</li>"+
        "<li> T [C] = T (in K) - 273.15 C</ul>"
      },
      {
        parentId: 2,
        id: 8,
        titel: "Temperaturskala: Fahrenheit",
        inhalt: "Daniel Gabriel Fahrenheit erstellte die Fahrenheitskale. Dabei wählte er als Nullpunkt die tiefste Temperatur des strengen Winters von 1709. <br>"+
        "Er hoffte mit diesem Nullpunkt negative Temperaturen vermeiden zu können. Als zweiter 'Fixpunkt' wählte er seine eigene Körpertemperatur, der er einfach die Zahl 100 zuordnete. <br>" +
        "Dazu kommt noch, dass ein Schritt auf der Celsiusskala grösser ist als auf der Fahrenheitskala. <br>"+
        "Siedepunkt von Wasser = 212 F, Schmelpunkt von Wasser = 32 F, das ist nicht ein Abstand von 180 F!<br>"+
        //Formel
        "T [F] = 9/5 C + 32 F"
      },
      {
        parentId: 4,
        id: 9,
        titel: "Beispiele aus dem Alltag und der Technik",
        inhalt: "Diese Beispiel zeigen, dass die Ausdehnung von Körpern bei Erwärmung ein Phänomen ist, das man berücksichtigen muss: <br>"+
        "Autobrücken müssen sich entsprechend der jahreszeitlichen Temperaturschwankungen dehnen oder zusammenziehen können. Dabei darf die Fahrbahn nicht unterbrochen werden. <br>"+
        "Dieses Problem existiert auch bei Eisenbahnschienen. In Gegenden mit sehr grossen Temperaturschwankungen werden diese durch die thermische Ausdehnung verbogen."
      },
      {
        parentId: 4,
        id: 10,
        titel: "Formel für thermisch bedingte Verlängerung (Längenausdehnung)",
        inhalt: "Die Verlängerung ist abhängig von den folgenden Grössen: <br>"+
        "<ul><li>&#8710;T =Temperaturdifferenz </li>"+
        "<li>&alpha; = (Längenausdehungskoeffizient) </li>"+
        "<li>l<sub>0</sub> = Anfangslänge</li></ul><br>"+
        // Formel
        "l = l<sub>0</sub> + l<sub>0</sub> &times; &alpha; &times; &#8710;T"
      },
      {
        parentId: 5,
        id: 11,
        titel: "Funktionsweise von Flächenausdehnung",
        inhalt: "Ein erwärmter Festkörper dehnt sich in alle Richtungen aus. <br>"+
        "Bei einem Querschnitt kann man die Flächenausdehnung beobachten."
      },
      {
        parentId: 5,
        id: 12,
        titel: "Formel für die Flächenausdehnung",
        inhalt: "<ul><li>&#8710;A = Flächendifferenz</li>"+
        "<li>A<sub>0</sub> = Anfangsfläche</li>"+
        "<li>&Beta; = Flächenausdehungskoeffizient</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li></ul><br>"+
        //Formel
        "Formel: &#8710;A = A<sub>0</sub> &times; &Beta; &times; &#8710;T"
      },
      {
        parentId: 6,
        id: 13,
        titel: "Funktionsweise von Volumenausdehnung",
        inhalt: "Ein Körper dehnt sich natürlich auf alle Richtungen aus. Dies hat eine Volumenänderung zu Folge. <br>"+
        "Diese Ausdehunung kann man ausrechnen"
      },
      {
        parentId: 6,
        id: 14,
        titel: "Formel für Volumenausdehnung",
        inhalt: "<ul><li>&#8710;V = Volumendifferenz</li>"+
        "<li>V<sub>0</sub> = Anfangsvolumen</li>"+
        "<li>&gamma; = Volumenausdehungskoeffizient</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li></ul><br>"+
        //Formel
        "Formel: &#8710;V = V<sub>0</sub> &times; &gamma; &times; &#8710;T"
      },
      {
        parentId: 7,
        id: 15,
        titel: "Formel für Dichte eines Stoffes",
        inhalt: "<ul><li>&rho; = Dichte</li>"+
        "<li>m = Masse in kg</li>"+
        "<li>V = Volumen in m<sup>3</sup></li></ul><br>"+
        "&rho; = m/V"
      },
      {
        parentId: 7,
        id: 16,
        titel: "Formel für Veränderung der Dichte bei Temperaturänderungen",
        inhalt: "<ul><li>&rho = Dichte</li>"+
        "<li>&gamma; = Volumenausdehungskoeffizient</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li></ul><br>"+
        "&rho; = &rho;<sub>0</sub> &times; 1/(1+&gamma;&times;&#8710;T)"
      },
      {
        parentId: 8,
        id: 17,
        titel: "Bedeutung von 'Wärme",
        inhalt: "Wenn sich ein Gegenstand erwärmt bewegen sich die Teilchen schneller. Dadurch wird die Temperatur erhöht <br>"+
        "Ein Gegenstand erwärmen ist also nichts anderes als diesem Energie zu zu führen.<br>"+
        "Wärme ist also eine Form von Energie."
      },
      {
        parentId: 8,
        id: 18,
        titel: "Zusammenhang von Zugeführter Wärme und der Temperaturdifferenz",
        inhalt: "<ul><li>Q = zugeführte Wärme Energie</li>"+
        "<li>c = Wärmekapazität</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li></ul><br>"+
        //Formel
        "Q = c &times; &#8710;T"
      },
      {
        parentId: 8,
        id: 19,
        titel: "Wärmekapazität",
        inhalt: "Die Wärmekapazität 'c' beschreibt das Verhältnis zwischen der zugeführten Wärme und der dadurch erreichten Temperaturänderung<br>"+
        "<br><ul><li>Q = zugeführte Wärme Energie</li>"+
        "<li>c = Wärmekapazität</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li></ul><br>"+
        "c = Q/&#8710;T"
      },
      {
        parentId: 8,
        id: 20,
        titel: "spezifische Wärmekapazität",
        inhalt: "Die spezifische Wärmekapazität bezeichnet die auf die Masse bezogene Wärmekapazität und ist eine Stoffeigenschaft der Thermodynamik. Sie bemisst die Fähigkeit eines Stoffes, thermische Energie zu speichern.<br>"+
        "<br><ul><li>Q = zugeführte Wärme Energie</li>"+
        "<li>c = spezifische Wärmekapazität</li>"+
        "<li>&#8710;T = Temperaturdifferenz</li>"+
        "<li>m = Masse in kg</li></ul><br>"+
        //Formel
        "c = Q/(m &times;&#8710;T)"
      },
      {
        parentId: 9,
        id: 21,
        titel: "Erkenntnisse beim experimentieren mit Wasser",
        inhalt: "Um eine Menge Wasser zu erwärmen ist eine bestimmte Energiemenge nötig, die: <br> "+
        "<br><ul><li>proportional zur Wassermenge ist (4 kg Wasser brauchen doppelt so viel Energie wie 2 kg, bei einer bestimmten Temperaturänderung)</li>"+
        "<li>proportional zur Temperaturänderung ist (Wasser um 10 Grad zu erwärmen braucht doppelt so viel Energie wie es um 5 Grad zu erwärmen)</li></ul>"
      },
      {
        parentId: 10,
        id: 22,
        titel: "Heizwert",
        inhalt: "Der Heizwert gibt an wie viel Energie durch die Verbrennung von 1kg/1m<sup>3</sup> von einem Stoff gewonnen wird. "+
        "Der Heizwert wird in J/kg angegeben."
      },
      {
        parentId: 10,
        id: 23,
        titel: "Fromel für die Verbrennungswärme",
        inhalt: "<ul><li>Q<sub>Brenn</sub> = Verbrennungswärme</li>"+
        "<li>H = Heizwert in J/kg</li>"+
        "<li>m = Masse in kg</li></ul><br>"+
        //Formel
        "Q<sub>Brenn</sub> = m &times; H"
      },
      {
        parentId: 11,
        id: 24,
        titel: "Grundlagen der Phasenübergänge",
        inhalt: "Materie kann in 3 Zuständen vorkommen: "+
        "<ul><li>fest</li>"+
        "<li>flüssig</li>"+
        "<li>gasförmig</li></ul><br>"
      },
      {
        parentId: 11,
        id: 25,
        titel: "Änderung des Aggregatzustandes",
        inhalt: "Die Temperatur steigt/sinkt linear, bis zur Umwandlung in den nächsten Zustand.<br>"+
        "Wenn die Änderung des Aggregatzustandes vollbracht werden sollte muss die sog. 'Umwandlungswärme' hinzugefügt / entfernt werden.<br>"+
        "Diese Wärme ist gleich wie die Energiedifferenz der verschiedenen Zustände.<br>"+
        "Beim Schmelzen muss das Gitter des Stoffes gelöst werden, wobei sich die Energie vergrössert.<br>"+
        "Die Umwandlung in ein Gas braucht noch viel Energie, da das Verdampfen immer mit einer grossen Volumenzunahme einher geht.<br>"+
        "Wenn aber das Gegenteil passiert, also von Gas zur Flüssigkeit oder von der Flüssigkeit zum Feststoff, wird die Gleiche Energie wieder frei gesetzt."
      },
      {
        parentId: 11,
        id: 26,
        titel: "Formel für Schmelwärme / Erstarrungswärme",
        inhalt: "<ul><li>Q<sub>f</sub> = Schmelwärme / Erstarrungswärme</li>"+
        "<li>L<sub>f</sub> = spezifische Schmelzwärme</li>"+
        "<li>m = Masse des Stoffs in kg</li></ul><br>"+
        "Q<sub>f</sub> = L<sub>f</sub> &times; m"
      },
      {
        parentId: 11,
        id: 27,
        titel: "Formel für Verdampfungswärme / Kondensationswärme",
        inhalt: "<ul><li>Q<sub>u</sub> = Verdampfungswärme / Kondensationswärme</li>"+
        "<li>L<sub>u</sub> = spezifische Verdampfwärme</li>"+
        "<li>m = Masse des Stoffs in kg</li></ul><br>"+
        "Q<sub>f</sub> = L<sub>f</sub> &times; m"
      },
      {
        parentId: 12,
        id: 28,
        titel: "Wärme",
        inhalt: "In der Physik bezeichnet man Energie die zwischen zei Körpern aufgrund "+
        "der Temperaturdifferenz ausgetauscht wird als <b>Wärme</b> <br>"+
        "Q ist das Formzelzeichen, Einheit = Joule"+
        "<ul><li>Wärme ist eine Prozessgrösse (Wie Arbeit)<li>"+
        "<li>Ein Körper selbst hat keine Wärme. Mit der Wärme beschreibt man wie viel ein Körper Energie abgibt oder aufnimmt."+
        "Wärme beschreibt also die Veränderung und nicht einen Zustand</li>"+
        "<li>Die Energie wird aufgrund der Temperaturdifferenz übertrage."+
        "Bei der Arbeit passiert dies weil ein Körper eine Kraft auf einen anderen ausübt.</li></ul>"
      },
      {
        parentId: 12,
        id: 29,
        titel: "Innere Energie",
        inhalt: "Als innere Energie bezeichnet man die Energie, die im System steckt."+
        "Diese nimmt durch Wärmefluss zu oder ab. <br>"+
        "U ist das Formelzeichen, Einheit = Joule <br>"+
        "<ul><li>Die innere Energie ist eine Zustandsgrösse. Sie beschreibt, wie viel Energie im Körper steckt<li>"+
        "<li>Nicht zur inneren Energie eines Körpers gehört: die kinetische Energie & die potentielle Energie</li>"+
        "<li>Die innere Energie lebst kann man nicht messen. Messbar ist nur die Änderung der inneren Energie</li></ul>"
      },
      {
        parentId: 12,
        id: 30,
        titel: "erster Hauptsatz der Thermodynamik",
        inhalt: "<ul><li>&#8710; U = Änderung der inneren Energie</li>"+
        "<li>Q = Wärme</li>"+
        "<li>W = Arbeit(Work)</li></ul><br>"+
        "Die ist eigentlich 'nur' ein Spezialfall der Energieerhaltung für ein offenes System: <br>"+
        "&#8710; Energie = &#8710; E<sub>kin</sub> + &#8710; E<sub>pot</sub> + &#8710; E<sub>spann</sub> + &#8710; U <br>"+
        "&#8710; Energie = W + Q <br>"+
        "Für ein geschlossenes System würde der 1 Hauptsatz lauten: <br>"+
        "&#8710; Energie = 0 <br>"+
        "&#8710; U = 0 <br>"
      },
      {
        parentId: 12,
        id: 31,
        titel: "zweiter Hauptsatz der Thermodynamik",
        inhalt: "Wärme (Q) fliesst immer vom Körper mit der höheren Temperatur zum Körper mit der tieferen Temperatur.<br>"+
        "<ul><li>Im thermischen Gleichgewicht befinden sich zwei Körper dann, wenn ihre Temperatur gleich ist. An diesem Punkt wird keine Wärme mehr ausgetauscht.</li>"+
        "<li>Nur wenn eine Temperaturdifferenz existiert fliesst Wärme.</li></ul>"
      },
      {
        parentId: 12,
        id: 32,
        titel: "dritter Hauptsatz der Thermodynamik (Nernst-Theorem)",
        inhalt: "Es ist unmöglich ein System bis zum absoluten Nullpunkt (0 Kelvin) abzukülen."
      },
      {
        parentId: 13,
        id: 33,
        titel: "Energieerhaltung bei Mischungen",
        inhalt: "Wenn mehrere Stoffe mit unterschiedlichen Temperaturen in Kontakt kommen, fliesst so lange Wärme, bis alle Stoffe eine gemeinsame Temperatur erreicht haben. <br>"  +
        "Anhand des 1. Hauptsatzes der Thermodynamik, also der Energieerhaltung, lässt sich eine Wärmebilanzgleichung aufstellen, mit welcher man die Mischtemperatur berechnen kann.<br>"+
        "<br>Wärmebilanzgleichung: <br>Q1 + Q2 + Q3 + … + Qn = 0 "+
        "Q1, Q2, Q3, …, Qn := die von Systemteilen aufgenommenen bzw. abgegebenen Wärmen. "
      },
      {
        parentId: 3,
        id: 38,
        titel: "Wärmeausdehnung",
        inhalt: "Hier beginnt das Subthema Wärmeausdehnung."
      },
    ]
  }
}
