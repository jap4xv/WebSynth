/**
 * @author Alex Politis
 */

var pianoKeys ={
     90 : '3C',
     83 : '3Cs',
     88 : '3D',
     68 : '3Ds',
     67 : '3E',
     86 : '3F',
     71 : '3Fs',
     66 : '3G',
     72 : '3Gs',
     78 : '4A',
     74 : '4As',
     77 : '4B',
     81 : '4C',
     50 : '4Cs',
     87 : '4D',
     51 : '4Ds',
     69 : '4E',
     82 : '4F',
     53 : '4Fs',
     84 : '4G',
     54 : '4Gs',
     89 : '5A',
     55 : '5As',
     85 : '5B',
     73 : '5C',
     57 : '5Cs',
     79 : '5D'
};

var pianoKeyFlag ={
     90 : true,
     83 : true,
     88 : true,
     68 : true,
     67 : true,
     86 : true,
     71 : true,
     66 : true,
     72 : true,
     78 : true,
     74 : true,
     77 : true,
     81 : true,
     50 : true,
     87 : true,
     51 : true,
     69 : true,
     82 : true,
     53 : true,
     84 : true,
     54 : true,
     89 : true,
     55 : true,
     85 : true,
     46 : true,
     57 : true,
     79 : true
};

$(document).ready(function() {
	
	$(document).keydown(function (evt){
		key = pianoKeys[evt.keyCode]; // Sets the ID for the key
    	audio = $('#play_' + key)[0];
    	$('#' + key + '.white').css("background-color","#C6C6C6");
    	$('#' + key + '.black').css("background-color","#333333");
    	if (pianoKeyFlag[evt.keyCode] == true) {
        	audio.play(); // play the sound
        	$('#' + key).addClass('down');
        	pianoKeyFlag[evt.keyCode] = false;
    	}
	});
	
	$(document).keyup(function (evt){
    	key = pianoKeys[evt.keyCode]; // name of Piano key
    	audio = $('#play_' + key)[0];
    	$('#' + key + '.white').css("background-color","#F4F4F4");
    	$('#' + key + '.black').css("background-color","#000000");
    	$('#play_' + key)[0].pause(); // pause the sound
    	audio.currentTime = 0; // reset the sound
    	pianoKeyFlag[evt.keyCode] = true;
    	return false;
	});
	
	$('.white').on('mousedown keydown', function(evt){
		$(this).css("background-color","#C6C6C6"); //Change color when white is pressed
		keyID = $(this).attr('id');
		audio = $('#play_' + keyID)[0];
		audio.play();
	});		
	$('.white').on('mouseup keyup mouseleave', function(){
		$(this).css("background-color","#F4F4F4");
        audio = $('#play_' + key)[0];
        audio.pause(); 
        audio.currentTime = 0; 
	});
	$('.black').on('mousedown keydown', function(){
		$(this).css("background-color","#333333"); //Change color when black is pressed
		keyID = $(this).attr('id');
		audio = $('#play_' + keyID)[0];
		audio.play();
	});		
	$('.black').on('mouseup keyup mouseleave', function(){
		$(this).css("background-color","#000000");
		audio = $('#play_' + key)[0];
        audio.pause(); 
        audio.currentTime = 0; 
	});
});