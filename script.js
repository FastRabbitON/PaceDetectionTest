const YesBtn = document.getElementById('YesBtn');
const NoBtn = document.getElementById('NoBtn');

const UserInfo = ["Użytkownik"]
const RoundNumber = ["Runda"];
const BasePaceInfo = ["Tempo_bazowe"]
const DevPaceInfo = ["Tempo_drugie"]
const AnswerKind = ["Odpowiedź"];
const bpmDiff = ["Różnica_bpm"]

const ToSave = [UserInfo, RoundNumber, AnswerKind, BasePaceInfo, DevPaceInfo, bpmDiff];

let AnswerGood = 0;
let AnswerWrong = 0;
let Round = 0;
let ToEnd = 10
let MaxRound = 10;

var i = -1;

var GapTime = 1500;

var User = "UserOne";
var BasePace = 150;

var PaceList75bpm = [75,76,77,78,79,80,82,85,90];
let MixPaceList75bpm = PaceList75bpm
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

var PaceList150bpm = [150,151,152,153,154,157,160,165,170,175,180];
let MixPaceList150bpm = PaceList150bpm
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

var PaceList250bpm = [250,251,252,253,254,255,256,257,260,265,270,275,285,290,295,300];
let MixPaceList250bpm = PaceList250bpm
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)




var BorderInfo = document.getElementById("infoBorder");

const Render = document.getElementById("stimulusContainer");
const RenderBtnSave = document.getElementById("saveRend");

const InfoRoundRender = document.getElementById("infoRound");

csvContent = "data:text/csv;charset=utf-8,";

function VariableChange() {


    User = document.getElementById("user").value;
    GapTime = Number(document.getElementById("timeGap").value);
    BasePace = Number(document.getElementById("basePaceList").value);


    if(Number(document.getElementById("basePaceList").value) == 75){
        MaxRound = MixPaceList75bpm.length;
    }

    if(Number(document.getElementById("basePaceList").value) == 150){
        MaxRound = MixPaceList150bpm.length;
    }

    if(Number(document.getElementById("basePaceList").value) == 250){
        MaxRound = MixPaceList250bpm.length;
    }

    console.log(User);
    console.log(GapTime);
    console.log(BasePace);
    console.log(ToEnd);
}



VariableReset = () => {
    window.location.reload();
}

InfoPush = () => {

    RoundNumber.push(Round);
    BasePaceInfo.push(BasePace)
    UserInfo.push(User);
}


RenderSave = () => {
    RenderBtnSave.innerHTML = `<button id="saveBtn" class="saveBtn" onclick="SaveFunction()">Save Result</button>`
}

RenderRoundInfo = () => {
    InfoRoundRender.innerHTML = `${Round} / ${MaxRound}`;
}

GetRandomElement = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}


RenderPace75 = () => {

    i++

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500);
    setTimeout(() => new Audio("Source/baza_75bpm.mp3").play(), 2500); // <- Czas do uruchomienia pierwszego
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000);

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500 + 6000 + GapTime);
    setTimeout(() => new Audio(`Source/75bpm_${MixPaceList75bpm[i]}bpm.mp3`).play(), (2500 + 6000 + GapTime )); // <- Czas do uruchomienia pierwszego + Czas trwania bazy + gapTime
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000 + GapTime + 6000);

    console.log("List:" + MixPaceList75bpm)
    console.log(RoundNumber)
    console.log(BasePaceInfo)
    console.log(DevPaceInfo)
    console.log(AnswerKind)
    console.log(bpmDiff)
}

RenderPace150 = () => {
    
    i++

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500);
    setTimeout(() => new Audio("Source/baza_150bpm.mp3").play(), 2500); // <- Czas do uruchomienia pierwszego
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000);

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500 + 6000 + GapTime);
    setTimeout(() => new Audio(`Source/150bpm_${MixPaceList150bpm[i]}bpm.mp3`).play(), (2500 + 6000 + GapTime )); // <- Czas do uruchomienia pierwszego + Czas trwania bazy + gapTime
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000 + GapTime + 6000);

    console.log("List:" + MixPaceList150bpm)
    console.log(RoundNumber)
    console.log(BasePaceInfo)
    console.log(DevPaceInfo)
    console.log(AnswerKind)
    console.log(bpmDiff)

}

RenderPace250 = () => {

    i++

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500);
    setTimeout(() => new Audio("Source/baza_250bpm.mp3").play(), 2500); // <- Czas do uruchomienia pierwszego
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000);

    setTimeout(() => BorderInfo.style.boxShadow = "inset 0 0 5rem  #0066CC", 2500 + 6000 + GapTime);
    setTimeout(() => new Audio(`Source/250bpm_${MixPaceList250bpm[i]}bpm.mp3`).play(), (2500 + 6000 + GapTime )); // <- Czas do uruchomienia pierwszego + Czas trwania bazy + gapTime
    setTimeout(() => BorderInfo.style.boxShadow = "none", 2500 + 6000 + GapTime + 6000);

    console.log("List:" + MixPaceList250bpm)
    console.log(RoundNumber)
    console.log(BasePaceInfo)
    console.log(DevPaceInfo)
    console.log(AnswerKind)
    console.log(bpmDiff)

}




SaveFunction = () => {
    ToSave.forEach(function (rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Data.csv");
    document.body.appendChild(link);
    link.click();

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}


StartFunction = () => {

    if(Number(document.getElementById("basePaceList").value) == 75){
        ToEnd = MixPaceList75bpm.length;
    }

    if(Number(document.getElementById("basePaceList").value) == 150){
        ToEnd = MixPaceList150bpm.length;
    }

    if(Number(document.getElementById("basePaceList").value) == 250){
        ToEnd = MixPaceList250bpm.length;
    }
    
    document.getElementById("mainTestContainer").classList.toggle("off");
    document.getElementById("settingContainer").classList.toggle("off");

    VariableChange();

    RenderFunction();
}


YesAnswer = () => {

    ToEnd--

    InfoPush()

    if (BasePace == 75){

        DevPaceInfo.push(MixPaceList75bpm[i]);
        bpmDiff.push(MixPaceList75bpm[i]-BasePace);

        if (BasePace == MixPaceList75bpm[i]){
            AnswerGood++
            AnswerKind.push(1);
        }
        else{
            AnswerWrong++
            AnswerKind.push(0);
        }
    }

    if (BasePace == 150){

        DevPaceInfo.push(MixPaceList150bpm[i])
        bpmDiff.push(MixPaceList150bpm[i]-BasePace);

        if (BasePace == MixPaceList150bpm[i]){
            AnswerGood++
            AnswerKind.push(1);
        }
        else{
            AnswerWrong++
            AnswerKind.push(0);
        }
    }

    if (BasePace == 250){

        DevPaceInfo.push(MixPaceList150bpm[i])
        bpmDiff.push(MixPaceList250bpm[i]-BasePace);

        if (BasePace == MixPaceList250bpm[i]){
            AnswerGood++
            AnswerKind.push(1);
        }
        else{
            AnswerWrong++
            AnswerKind.push(0);
        }
    }

    if (ToEnd == 0) {
        RenderSave();
    }
    else {
        RenderFunction();
    }



    console.log(ToEnd);

}

NoAnswer = () => {
  
    ToEnd--

    InfoPush()

    if (BasePace == 75){

        DevPaceInfo.push(MixPaceList75bpm[i])
        bpmDiff.push(MixPaceList75bpm[i]-BasePace);

        if (BasePace == MixPaceList75bpm[i]){
            AnswerWrong++
            AnswerKind.push(0);
        }
        else{
            AnswerGood++
            AnswerKind.push(1);
        }
    }

    if (BasePace == 150){

        DevPaceInfo.push(MixPaceList150bpm[i])
        bpmDiff.push(MixPaceList150bpm[i]-BasePace);

        if (BasePace == MixPaceList150bpm[i]){
            AnswerWrong++
            AnswerKind.push(0);
        }
        else{
            AnswerGood++
            AnswerKind.push(1);
        }
    }

    if (BasePace == 250){

        DevPaceInfo.push(MixPaceList250bpm[i])
        bpmDiff.push(MixPaceList250bpm[i]-BasePace);

        if (BasePace == MixPaceList250bpm[i]){
            AnswerWrong++
            AnswerKind.push(0);
        }
        else{
            AnswerGood++
            AnswerKind.push(1);
        }
    }


    if (ToEnd == 0) {
        RenderSave();
    }
    else {
        RenderFunction();
    }

}





RenderFunction = () => {

    Round++

    RenderRoundInfo();

    YesBtn.setAttribute('disabled', 'true');
    NoBtn.setAttribute('disabled', 'true');

    if (BasePace == 75){
        RenderPace75();
    }
    else if (BasePace == 150){
        RenderPace150();
    }
    else if (BasePace == 250){
        RenderPace250();
    }

    setTimeout(() => YesBtn.removeAttribute('disabled', 'true'), (2500 + 6000 + GapTime + 6000));
    setTimeout(() => NoBtn.removeAttribute('disabled', 'true'), (2500 + 6000 + GapTime + 6000));

    
}

