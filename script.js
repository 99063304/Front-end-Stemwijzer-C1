
// variables worden aangemaakt
var dividervalGp = 0;
var dividervalSp = 0;
var ids = ['slaoverknop', 'eensknop', 'oneensknop', 'geenvanbeideknop', 'back'];
var idsv = [
                        {'id':'slaoverknop','count':0,'patroon':'-'},
                        {'id':'eensknop','count':-2,'patroon':'pro'},
                        {'id':'oneensknop','count':0,'patroon':'contra'},
                        {'id':'geenvanbeideknop','count':0,'patroon':'none'}
                    ];
var eensCount = -2;
var oneensCount = 0;
var stellingCount = 0;
var pastChoice = 0;
var iCount = 0;
var patroon = [];
var newPartypointers = {};
var partyPointers2 = {};
var pasPastChoice = 0;
var oneUseArray = [];
var partyPointersSort = [];
var resultCount = [[]];
var partyPointers = [];
var extragewicht = [];
var new_array = [];
var pastId = '';
var newPatroon = '';
var subjectsInnersubject = ['name', 'opinion', 'position'];
var gvbknop = 0;
var stellingTitel = document.getElementById('stellingTitel');
var stelling = document.getElementById('stelling');
var bar = document.getElementById('bar');
var start = 'eensknop';
const VOTE_DIVIDER = 30;
var slaVraagOver = 0;
var number = 100 / subjects.length-1;

var calc = '-' + number + '%';

for (var pe = 0; pe <subjects.length; pe++) {
    patroon.push('');
}

// Er wordt een event op de buttons gezet
// BUG: en er wordt 2x extra geklikt om bug te voorkomen
for (var i = 0; i < ids.length; i++) {
    var replace = document.getElementById(ids[i]);
    replace.value = ids[i];
    replace.addEventListener("click", stemwijzerstart);

    if (replace.id == 'eensknop') {
        replace.click();
        replace.click();
    }
}
  // De punten telling van de parties worden aangemaakt
for (var t = 0; t < parties.length; t++) {
    partyPointers[parties[t]['name']] = 0;
  console.log(partyPointers);
}
  // Hier staat de event die op de buttons geplaatst zijn
function stemwijzerstart() {
    console.log(patroon);
    var sum = '+';
    var val = this.value;
    var oldPatern = patroon[stellingCount+1];

  // Dit zorgt ervoor dat de punten omhoog gaan wanneer je erop klikt
  // En de gebruiker stem wordt ook opgeslagen


console.log(oldPatern);

    for (var ie = 0; ie < idsv.length; ie++) {
        if (val == idsv[ie]['id']) {
            patroon[stellingCount] = idsv[ie]['patroon'];
            idsv[ie]['count']++;
        }
    }

  // Dit zorgt eroor dat als je terug klikt de punten en de sten worden verwijdert zodat de telling goed blijft
  // het zorgt er ook voor dat kleur verandert naar blauw op de vorige stem van de gebruiker
  // en ook dat de knop terug gaat naar zijn oude kleur

    if (val == 'back') {
        for (var ji = 0; ji < ids.length; ji++) {
            document.getElementById(ids[ji]).style.backgroundColor = null;
        }
        if (stellingCount >= 0) {
            stellingCount -= 2;
            sum = '-';
        }


        for (var ie = 0; ie < idsv.length; ie++) {
            if (patroon[stellingCount+1] == idsv[ie]['patroon']) {
                document.getElementById(idsv[ie]['id']).style.backgroundColor = 'gray';
                idsv[ie]['count']--;
            }
        }

        document.getElementById(pastId).style.backgroundColor = '#0d6efd';
    } else {

        for (var ves = 0; ves < ids.length; ves++) {
            document.getElementById(ids[ves]).style.backgroundColor = null;
        }
        pasPastChoice = pastChoice;
        pastChoice = this.id;
        document.getElementById(pasPastChoice).style.backgroundColor = null;

        for (var gie = 0; gie < idsv.length; gie++) {
            if (newPatroon[stellingCount+1] == idsv[gie]['patroon']) {
                document.getElementById(idsv[gie]['id']).style.backgroundColor = 'gray';
            }
        }

            console.log(patroon);

    }
    // Berekent de blauwe lijn boven de pagina
    calc = calc + ' ' + sum + ' ' + number + '%';

    // Hier worden de stellingen aangemaakt in de pagina
    if (stellingCount <= subjects.length - 1) {
        stellingTitel.innerHTML = stellingCount + 1 + '. ' + subjects[stellingCount]['title'];
        stelling.innerHTML = subjects[stellingCount]['statement'];

        bar.style.width = 'calc(' + calc + ')';
        stellingCount++;
        if (this.value != 'back') {
            this.style.backgroundColor = '#0d6efd';
            pastId = this.id;
        }
        if (stellingCount == 1) {
            back.style.display = 'none';
        } else {
            back.style.display = 'block';
        }
    } else {
    // hier Worden alle elementen verwijdert en wordt er een functie aangeroepen die je laat kiezen welke vraag meer gewicht krijgt
    // en of je wel of niet grote of seculiere partijen wil zien

        var overzicht = document.getElementById('overzicht');
        for (var i = 0; i <= diediv.children.length + 6; i++) {
            diediv.removeChild(diediv.lastChild);
        }
        gewichtVraag();
    }
    for (var ie = 0; ie < idsv.length; ie++) {
        if (oldPatern == idsv[ie]['patroon']) {
            document.getElementById(idsv[ie]['id']).style.backgroundColor = 'gray';
        }
    }
}

function getResults() {
  // BUG: dit is om de 2extra clicks weg te halen die veroorzaakt zijn door een bug op te lossen
    patroon.shift();
    // patroon.shift();
  // BUG:

  // er wordt gekeken of de de gebruiker seculiere of grote partijen wilt laten zien
    for (var vi = 0; vi < 2; vi++) {
        var checks = document.getElementById(vi + 'partij');
        if (checks.checked) {
            if (checks.id == '0partij') {
                dividervalGp = true;
            } else {
                //Zet een l achter de a
                dividervaSp = true;
            }
        }
    }
  // Hier worden array gefilterd gebaseerd op de keuze van de gebruiker dat houd in dat als de gebruiker
  // alleen grote partijen wilt zien of seculiere of beide
  // dan Worden partijen die dat niet zijn eruitgehaald

  // hier wordt per keuze van gebruiker gekeken welke het best bij hem past
  // en alle scorres worden uitgerekent van alle partijen
    for (var o = 0; o < subjects.length; o++) {
        for (var a = 0; a < subjects[o]['parties'].length; a++) {
            var limiArray = [];
            for (var e = 0; e < subjectsInnersubject.length; e++) {
                if (e == 2) {
                    if (subjects[o]['parties'][a][subjectsInnersubject[e]] == patroon[o]) {
                        partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
                        if (extragewicht[o] == 'x') {
                            partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
                        }
                    }
                }
                limiArray.push(subjects[o]['parties'][a][subjectsInnersubject[e]]);
            }
            resultCount.push(limiArray);
        }
    }

  if (dividervalGp == true) {
    parties = parties.filter(checkAdult);

    console.log(parties);
    // verwisselt array
    partyPointers['Niet Stemmers'] = idsv[3]['count'];

  }else if (dividervalSp == true) {
    parties = parties.filter(checkAdult2);
    // verwisselt array
    partyPointers['Niet Stemmers'] = idsv[3]['count'];

  }

  // hier worden de partij scorres gestorteerd van hoog naar laag
    for (var g = 0; g < parties.length; g++) {
        partyPointersSort[g] = partyPointers[subjects[0]['parties'][g][subjectsInnersubject[0]]];
    }
    for (key in partyPointers) {
        new_array.push([key, partyPointers[key]])
    }
    new_array.sort(function (item1, item2) {
        return item2[1] - item1[1];
    });
    var fast_array = [];
    for (var coc = 0; coc < new_array.length; coc++){
     for (var cocs = 0; cocs < parties.length; cocs++){
       if(parties[cocs]['name'] == new_array[coc][0]){
        fast_array.push([new_array[coc][0], new_array[coc][1]]);
       }
     }
    };
    new_array = fast_array;
    partyPointersSort.sort();

}

function gewichtVraag() {
  // hier wordt heel de pagina van keuze gemaakt
  // hier krijgt de gebruiker de keuze of die grote, seculiere partijen wilt zien
  // en of een vraag extra gewicht moet krijgen

    var textArr = ['Zijn er onderwerpen die u extra belangrijk vindt?', 'Aangevinkte stellingen tellen extra mee bij het berekenen van het resultaat.'];
    var textPartijen = ['Laat grote partijen zien', 'Laat seculiere partijen zien'];
    for (var i = 0; i < 2; i++) {
        var type = 'p';
        if (i == 0) {
            type = 'h1';
        }
        var elemt = document.createElement(type);
        elemt.innerHTML = textArr[i];
        overzicht.appendChild(elemt);
    }
    var elemtp = document.createElement('p');
    elemtp.innerHTML = 'Extra belangrijke onderwerpen';
    overzicht.appendChild(elemtp);

    for (var s = 0; s < subjects.length; s++) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        var br = document.createElement('br');

        input.setAttribute('type', 'checkbox');
        label.innerHTML = subjects[s]['title'];
        input.id = s;
        label.id = s + 'label';

        overzicht.appendChild(input);
        overzicht.appendChild(label);
        overzicht.appendChild(br);

    }
    for (var p = 0; p < textPartijen.length; p++) {
        var label2 = document.createElement('label');
        var input2 = document.createElement('input');
        var br2 = document.createElement('br');

        input2.setAttribute('type', 'checkbox');
        label2.innerHTML = textPartijen[p];
        input2.id = p + 'partij';
        input2.checked = true;
        overzicht.appendChild(input2);
        overzicht.appendChild(label2);
        overzicht.appendChild(br2);
    }
  // Hier wordt er een event geplaatst op de ga verder button die eerst de resultaten berekent en dan laat zien
    var button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = 'Ga verder';
    button.onclick = function () {
        for (var i = 0; i < subjects.length; i++) {
            var check = document.getElementById(i);
            if (check.checked) {
                extragewicht[i] = 'x';
            }
        }
        getResults();
        Showresult();
    }
    overzicht.appendChild(button);
}

function Showresult() {
    var overzicht = document.getElementById('overzicht');
  // Alle elementen worden verwijdert om ruimte te maken voor de resultaat
    while (overzicht.firstChild) {
  overzicht.removeChild(overzicht.lastChild);
}

  //// /// /

    var element = document.createElement('h1');
    element.innerText = 'Overzicht';
    overzicht.appendChild(element);
  console.log(new_array);
 // de resultaten worden opgehaald en laat ze aan de gebruiker zien in de vlgorde van de partij zijn stemmen
 // en welke het best bij de gebruiker past naar minder
    for (var i = 0; i < new_array.length; i++) {
    console.log(i);
            var elemt = document.createElement('p');

            if (new_array[i][0] != 'Niet Stemmers') {
                elemt.innerHTML = i+iCount+' '+new_array[i][0];
            } else {
                var iDoublecount = i+1
                elemt.innerHTML = iDoublecount+ '. ' + 'Geen stemmen: Niet Stemmers';
                iCount++;
            }
            overzicht.appendChild(elemt);
    }

  // als de gebruiker geen stmmen heeft ingevuld dan krijgt die dit als resultaat
    if (slaVraagOver == subjects.length) {
        var slaVraagOverText = document.createElement('p');
        slaVraagOverText.innerHTML = 'U heeft geen Stem gegeven';
        overzicht.appendChild(slaVraagOverText);

    }
}

function checkAdult(age) {
    return age.size >= 18;
}

function checkAdult2(age) {
    return age.secular == true;
}
