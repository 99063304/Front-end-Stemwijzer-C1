var parties = [
 {
    name: "PVV",
    secular: true,
    size: 20,
    long: "Partij voor de Vrijheid"
  },
  {
    name: "D66",
    secular: true,
    size: 19,
    long: "Democratie 66"
  },
  {
    name: "CU",
    secular: false,
    size: 6,
    long: 'Christen Unie'
  },
  {
    name: "SP",
    secular: true,
    size: 14,
    long: "Socialistische Partij"
  }
];

// Testen op correcte match, voer in:
// PVV: contra, pro, contra, pro
// SP: pro, contra, contra, contra
// D66: pro, contra, pro, contra
// CU: pro, pro, pro, contra

var subjects = [{
    "title": "Bindend referendum",
    "statement": "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
    "parties": [
      {
        "name": "PVV",
        "position": "contra",
        "opinion": "Geen toelichting gegeven"
      },
      {
        "name": "SP",
        "position": "pro",
        "opinion": "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."
      },
      {
        "name": "D66",
        "position": "pro",
        "opinion": "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."
      },
      {
        "name": "CU",
        "position": "pro",
        "opinion": "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."
      }
    ]
  },
  {
    "title": "Maatschappelijke dienstplicht",
    "statement": "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
    "parties": [
      {
        "name": "PVV",
        "position": "pro",
        "opinion": "Geen toelichting gegeven"
      },
      {
        "name": "SP",
        "position": "contra",
        "opinion": "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"
      },
      {
        "name": "D66",
        "position": "contra",
        "opinion": "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zÃ©lf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."
      },
      {
        "name": "CU",
        "position": "pro",
        "opinion": "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen. Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."
      }
    ]
  },
  {
    "title": "Anoniem solliciteren",
    "statement": "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
    "parties": [
      {
        "name": "PVV",
        "position": "contra",
        "opinion": "Geen toelichting gegeven"
      },
      {
        "name": "SP",
        "position": "contra",
        "opinion": "Discriminatie  moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."
      },
      {
        "name": "D66",
        "position": "pro",
        "opinion": "Nederlanders met een niet-westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond. D66 wil dit verschil terugdringen. EÃ©n van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie- en promotieprocedures."
      },
      {
        "name": "CU",
        "position": "pro",
        "opinion": "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties. "
      }
    ]
  },
  {
    "title": "Groepsbelediging",
    "statement": "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.",
    "parties": [
      {
        "name": "PVV",
        "position": "pro",
        "opinion": "Geen toelichting gegeven"
      },
      {
        "name": "SP",
        "position": "contra",
        "opinion": "De strafbaarheid op belediging van groepen blijkt in de praktijk een nuttig middel om bijvoorbeeld antisemitisme of religieuze haatoproepen tegen homoseksuelen tegen te gaan."
      },
      {
        "name": "D66",
        "position": "contra",
        "opinion": "D66 is voor vrije meningsuiting maar vindt dat het opzettelijk beledigen, discrimineren en haat zaaien tegen mensen vanwege het behoren tot een bepaalde bevolkingsgroep, niet past in onze samenleving."
      },
      {
        "name": "CU",
        "position": "contra",
        "opinion": "Onze samenleving is de afgelopen vijftien jaar verruwd. Respectloos gedrag lijkt normaal te zijn geworden. GroenLinks stelt een harde grens: we pakken racisme en discriminatie keihard aan, zeker als het gekoppeld wordt aan geweld of het oproepen tot geweld, intimidatie en bedreigingen."
      }
    ]
  }
];


var ids =  ['slaoverknop','eensknop','oneensknop','geenvanbeideknop','back'];
var eensCount = -2;
var oneensCount = 0;
var stellingCount = 0;
var pastChoice = 0;
var patroon = [];
var newPartypointers = [];
var pasPastChoice = 0;
var partyPointersSort = [];
var resultCount = [[]];
var partyPointers = [];
var extragewicht = [];
var new_array = [];
var subjectsInnersubject = ['name','opinion','position'];
var gvbknop = 0;
var stellingTitel = document.getElementById('stellingTitel');
var stelling = document.getElementById('stelling');
var bar = document.getElementById('bar');
var start = 'eensknop';




var calc = 3+'.'+33+ '%';
console.log(bar.style.width);


for (var i = 0; i <ids.length; i++) {
  var replace = document.getElementById(ids[i]);
  replace.value = ids[i];
  replace.onclick = stemwijzerstart;
  if (replace.id == 'eensknop') {
    replace.click();replace.click();
  }
}
for (var t = 0; t <parties.length; t++) {
    partyPointers[parties[t]['name']] = 0;
}

function stemwijzerstart(startv) {

  var sum = '+';
  var val = this.value;

  if (val == 'slaoverknop') {
    // patroon.push("slaoverknop");
  }
  if (val == 'eensknop' || startv == 'eensknop') {
    eensCount++;
    patroon.push("pro");
  }
  if (val == 'oneensknop') {
    oneensCount++;
    patroon.push("contra");
  }
  if (val == 'geenvanbeideknop') {
    gvbknop++;
    patroon.push("none");
  }
  // if (stellingCount >subjects.length-1) {
  //   getResults();
  // };
  if (val == 'back') {
      this.style.backgroundColor =  null;
      document.getElementById(pastChoice).style.backgroundColor =  'red';
      if (stellingCount >= 0) {
        stellingCount -= 2;
        sum = '-';
      }
      if (patroon[patroon.length-1] == 'eensknop') {
        eensCount--;
      }
        else if (patroon[patroon.length-1] == 'oneensknop') {
          oneensCount--;
      } else if (patroon[patroon.length-1] == 'geenvanbeideknop') {
          gvbknop--;
      }
        patroon.pop();

  }else{

    pasPastChoice = pastChoice;
    pastChoice = this.id;
    document.getElementById(pasPastChoice).style.backgroundColor =  null;
  }

  calc = calc +' '+sum +' '+ 3+'.'+33+'%';
  if (stellingCount <= subjects.length-1) {
    stellingTitel.innerHTML = stellingCount+1 +'. ' + subjects[stellingCount]['title'] ;
    stelling.innerHTML = subjects[stellingCount]['statement'];

    bar.style.width = 'calc('+ calc+  ')';
    stellingCount++;
    if (this.value != 'back') {
      this.style.backgroundColor =  '#0d6efd';
    }
  } else {
    var overzicht = document.getElementById('overzicht');

      for (var i = 0; i <= diediv.children.length +6; i++) {
        diediv.removeChild(diediv.lastChild);
      }
     gewichtVraag();


  }
}
 // getResults();
function getResults() {
  patroon.shift();
  patroon.shift();
  console.log('jj');

  for (var o = 0; o <subjects.length; o++) {
    // vraag 1
    for (var a = 0; a <subjects[o]['parties'].length; a++) {

      var limiArray = [];
      for (var e = 0; e <subjectsInnersubject.length; e++) {

        if (e == 2) {
          // console.log(subjects[o]['parties'][a][subjectsInnersubject[e]]);
          // console.log(patroon[o]);


          if (subjects[o]['parties'][a][subjectsInnersubject[e]] == patroon[o]) {
             // console.log(subjects[o]['parties'][a][subjectsInnersubject[e]]);
             partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
             if (extragewicht[o] == 'x') {
               console.log('hhhhhhh');
               partyPointers[subjects[o]['parties'][a][subjectsInnersubject[0]]]++;
             }
             console.log(extragewicht[o]);

          }
        }
        limiArray.push(subjects[o]['parties'][a][subjectsInnersubject[e]]);
      }
      resultCount.push(limiArray);
    }
  }
    partyPointers['Niet Stemmers'] = gvbknop;

    for (var g = 0; g < parties.length -1; g++) {
     partyPointersSort[g] = partyPointers[subjects[0]['parties'][g][subjectsInnersubject[0]]];

   }


    for(key in partyPointers){
      new_array.push([key, partyPointers[key]])
    }
    new_array.sort(function(item1, item2){
      return item2[1]-item1[1];
    });














    partyPointersSort.sort();

    // for (var h = 0; h < parties.length -1; h++) {
    //   for (var f = 0; f <parties.length -1; f++) {
    //     if (partyPointersSort[h] === partyPointers[parties[f]['name']]) {
    //         // console.log(partyPointersSort[h] + '__' + partyPointers[parties[f]['name']] );
    //
    //         // newPartypointers[f] = h + ":" +partyPointersSort[h];
    //         newPartypointers.push({partyPointers[parties[f]['name'] : partyPointersSort[h]});
    //         // partyPointers[f]w
    //         // console.log( partyPointers[f]['name']+ '____' + newPartypointers[f] );
    //         // parties[f]['name'];
    //
    //         //
    //         // var limi = [partyPointersSort[h]];
    //         //     newPartypointers[f] = limi;
    //
    //     }
    //   }
    // }




  }

function gewichtVraag() {
  var textArr = ['Zijn er onderwerpen die u extra belangrijk vindt?', 'Aangevinkte stellingen tellen extra mee bij het berekenen van het resultaat.'];
  for (var i = 0; i <2; i++) {
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
      label.id = s+ 'label';
      if (input.checked) {

      }


      overzicht.appendChild(input);
      overzicht.appendChild(label);
      overzicht.appendChild(br);
      console.log('ysur');

    }
    var button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = 'Ga verder';
    button.onclick = function () {
      for (var i = 0; i <subjects.length; i++) {
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


for (var i = 0; i <= overzicht.children.length +15; i++) {
overzicht.removeChild(overzicht.lastChild);
}
var element = document.createElement('h1');
element.innerText = 'Overzicht';
overzicht.appendChild(element);


for (var i = 0; i <new_array.length; i++) {
  var elemt = document.createElement('p');
  elemt.innerHTML = i+1 +  '. '+ subjects[0]['parties'][i]['position'] + ',' +subjects[1]['parties'][i]['position']  +','+ subjects[2]['parties'][i]['position'] +',' +subjects[3]['parties'][i]['position']+ ': '+new_array[i][0] ;
  overzicht.appendChild(elemt);
}
}
