//generate the keyboard after the window loads
window.onload=generateKeys;

function generateKeys(numberOfKeys) {
    //the order of piano keys is WBWBW-WBWBWBW
    //61 keys include both the black and the white keys
    //generate the keyboard by drawing the white keys first;
    //then draw the black keys on top
    /*
    var i;
    var main = document.getElementById("keyboard");
    for (i = 1; i <= 36; i++) {
        var Newbutton = document.createElement("h2");
        Newbutton.style.position = "absolute";
        Newbutton.style.left = i * 28 + "px";
        Newbutton.classList.add("whiteKey");
        Newbutton.onclick=playNote;
        Newbutton.value()
        main.appendChild(Newbutton);
    }


    var o;
    for (o=0; o<5;o++){
        var positionV=20+7*28*o;
        for (i=1;i<=2;i++){
            var NewbuttonA = document.createElement("h2") ;
            NewbuttonA.style.position="absolute";
            NewbuttonA.style.left= positionV+28*i+"px";
            NewbuttonA.classList.add("blackKey");
            main.appendChild(NewbuttonA);
        }
        for (i=1;i<=3;i++){
            var NewbuttonB = document.createElement("h2") ;
            NewbuttonB.style.position="absolute";
            NewbuttonB.style.left= positionV+28*i+28*3+"px";
            NewbuttonB.classList.add("blackKey");
            main.appendChild(NewbuttonB);
        }
    }

*/


    var i;
    var Wblockcounter = 0;
    var main = document.getElementById("keyboard");
    var positions;
    for (i = 0; i < 61; i++) {
        positions = i % 12;

        if ([1,3,5,6,8,10,0].indexOf(positions)!==-1) {
            var NewWhitebutton = document.createElement("h2");
            NewWhitebutton.style.position = "absolute";
            Wblockcounter=Wblockcounter+1;
            NewWhitebutton.style.left = Wblockcounter * 28 + "px";
            NewWhitebutton.classList.add("whiteKey");
            NewWhitebutton.value=i;
            NewWhitebutton.onclick=playNote;
            main.appendChild(NewWhitebutton);

        }
        else {
            var NewBlackbutton = document.createElement("h2");
            NewBlackbutton.style.position = "absolute";
            NewBlackbutton.style.left = Wblockcounter * 28-8  + "px";
            NewBlackbutton.classList.add("blackKey");
            NewBlackbutton.value=i;
            NewBlackbutton.onclick=playNote;
            main.appendChild(NewBlackbutton);
        }
    }
}


function playNote (){
	//initializes the sound synthesizer

    var fre=2**((this.value-33)/12)*440;

	const synth = new Tone.Synth().toDestination();

    synth.triggerAttackRelease(fre+"Hz", "8n")




	//convert the key value from the 0-60 range to the note frequency in Hz
	//https://en.wikipedia.org/wiki/Piano_key_frequencies (a 61-key keyboard 
	//starts with the 16-th key of the standard piano

	//this plays a standard-concert-pitch 440Hz tone
	//replace the 440 Hz with the frequency you computed above
	//synth.triggerAttackRelease("440Hz", "8n");
}