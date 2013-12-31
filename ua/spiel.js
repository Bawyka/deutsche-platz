$(function(){
		
	// Start Array
	var st_words = [  
					['Sonne','Sun'],             // 1
				    ['Licht','Light'],		     // 2
				    ['Morgen','Morning'],        // 3
				    ['Nacht','Night'],		     // 4
				    ['Wasser','Water'], 	     // 5
				    ['Freund','Friend'],         // 6
				    ['Sprache','Language'],      // 7
					['Mutter','Mother'],	     // 8
					['Hertz','Heart'],		     // 9
					['Stein','Stone'],		     // 10
					['Angst','Scare'],		     // 11
					['Ritter','Rider'],		     // 12
					['Entwicklung','Extension'], // 13
					['Tag','Day'],				 // 14
					['Grab','Grave'],			 // 15
					['Zeit','Time'],			 // 16
					['Vater','Father'],			 // 17
					['Auge','Eye'],				 // 18
					['Stück','Part'],			 // 19
					['Holz','Wood'],			 // 20
					['Kamerad','Companion'],	 // 21
					['Mund','Mouth'],			 // 22
					['Mond','Moon'],			 // 23
					['Weg','Path'],				 // 24
					['Schlag','Beat'],			 // 25
					['Recht','Right'],			 // 26
					['Glück','Luck'],			 // 27
					['Mensch','Human'],			 // 28
					['Zug','Train'],			 // 29
					['Anmeldung','Registration'],// 30
					['Geschichte','Story'],		 // 31
					['Schnee','Snow'],			 // 32
					['Bau','Construction'],		 // 33
					['Kampf','Struggle'],		 // 34
					['Tun','Activity'],			 // 35
					['Feuer','Fire'],			 // 36
					
					['Fahrung','Skills'],		 // 37
					['Fahrrad','Bicycle'],		 // 38
					['Nahrung','Food'],			 // 39
					['Katze','Cat'],			 // 40
					['Spiel','Game'],			 // 41
					['Woche','Week'],			 // 42
					['Jahr','Year'],			 // 43
					['Kopf','Head'],			 // 44
					['Hut','Hat'],				 // 45
					['Hund','Dog'],				 // 46
					['Klang','Sound'],			 // 47
					['Himmel','Sky'],			 // 48
					['Wunsch','Wish'],			 // 49
					['Milch','Milk'],			 // 50
					['Dorf','Village'],			 // 51
					['Ort','Place'],			 // 52
					['Melkerin','Milkmaid'],     // 53
					['Ausgang','Exit'],			 // 54
					['Meer','Sea'],				 // 55
					['Fisch','Fish'],			 // 56
					['Sicherheit','Security'],	 // 57
					['Woche','Week'],			 // 58
					['Monat','Month'],			 // 59
					['Achtung','Attention'],	 // 60
					['Gesundheit','Health'],	 // 61
					['Zahn','Tooth'],			 // 62
					['Geburtstag','Birthday'],	 // 63
					['Weinnachten','Christmas'], // 64
					['Geschenk','Gift'],		 // 65
					['Gott','God'],				 // 66
					['Suche','Search'],			 // 67
					['Wahrheit','Truth'],		 // 68
					['Regenbogen','Rainbow'],	 // 69
					['Regen','Rain'],			 // 70
					['Hintergrundbilder','Wallpappers'], // 71
					['Kuh','Cow'],				 // 72
					['Sieg','Victory'],			 // 73
					['Stern','Star'],			 // 74
					['Tee','Tea'],				 // 75
					['Seite','Page'],			 // 76
					['Nase','Nose'],			 // 77
					['Haar','Hair'],			 // 78
					['Anruf','Call'],			 // 79
					['Bruder','Brother'],		 // 80
					['Schule','School'],		 // 81
					['Frühling','Spring'],		 // 82
					['Höhe','Height'],			 // 83
					['Breite','Width'],			 // 84
					['Länge','Length'],			 // 85
					['Mannschaft','Team'],		 // 86
					['Maus','Mouse'],			 // 87
					['Bär','Bear'],				 // 88
					['Kühlschrank','Fridge'],	 // 89
					['Arbeit','Work'],			 // 90
					['Bein','Leg'],				 // 91
					['Weiß','White'],			 // 92
					['Buch','Book'],			 // 93
					['Blitz','Flash'],			 // 94
					['Abend','Evening'],		 // 95
					['Zeitschrift','Magazine'],	 // 96
					['Staubsauger','Hoover'],	 // 97
					['Spur','Sign'],			 // 98
					['Ewigkeit','Eternety'],	 // 99
					['Mühe','Effort']			 // 100
				];
				
	var de_words, clicks, step, pts, used = new Array(), current, scale_height, clicks_done;
	
	scale_height = $('#level .scale').height();
			
	// Click on Answer
	$('#slist').on('click','li.current span', function(){ isRight($(this)); });
	
	// checking the Right Answer s:span
	function isRight( s ) {
	
		if ( de_words.length <=4 ) return false;
		
		var q = s.parent(); // parent div is .q
		var spans = q.find('span'); // select all spans
		var main_word = q.find('.de'); // main word
		var valid = 0; // right word
				
		// checking valid
		for (var n = 0; n < used.length; n++){
			if (used[n][0][0]==main_word.text() && used[n][0][1]==s.text()){
				valid=1;
			}
		}
								
		// Right Answer
		if ( valid == 1 ) {
		
			// Get the new Word from deutsche words array
			var new_word = de_words[0][0], right_answer = de_words[0][1];
			
			// remove from first
			used.push( de_words.splice( 0, 1 ) );
			
			pts++;
			
			if ( pts == clicks ) {
						
				$('#slist').fadeOut('slow',function(){
				
					$('#platz .new_start').fadeIn('slow');
				
				});
				
				pts = 0;
			}			
						
			$('#level .scale').height( $('#level .scale').height() - step );
						
			main_word.css('color','lime'); // in green
			spans.css('color','green');
		
		} else {
		
			// Get the new Word from deutsche words array
			var new_word = de_words[0][0], right_answer = de_words[0][1];
			
			// remove from first
			used.push( de_words.splice( 0, 1 ) );
					
			$('#wrongs .scale').height( $('#wrongs .scale').height() - step );
		
			main_word.css('color','red'); // in red
			spans.css('color','red');
		}
		
		// if isset New Haupt Wort
		if ( new_word!=='' && new_word!==undefined ) {			
			
			answers = [ right_answer ];
			
			answers.push( de_words[0][1] ); used.push( de_words.splice( 0 , 1 ) );
			answers.push( de_words[0][1] ); used.push( de_words.splice( 0 , 1 ) );
			answers.push( de_words[0][1] ); used.push( de_words.splice( 0 , 1 ) );
			
			shuffle(answers);
		}
		
		// animation of spans
		spanime(spans,q,answers,new_word);
		
		clicks_done++;
		
		if (clicks_done>=clicks) {
		
			$('#slist').fadeOut('slow',function(){
				
				if ( $('#level .scale').height() <= $('#wrongs .scale').height() ) {
					
					$('#platz .new_start').css('color','#00FF70');
				
				} else {
				
					$('#platz .new_start').css('color','red');
				
				}
				
				$('#platz .new_start').fadeIn('slow');
				
			});
		}
	}
	
	// function Animate Spans q:parent | s:spans | a:answers
	function spanime( s, q, a, w ) {
		
		var speed = 500;
		
		// animation
		s.animate({
			top: '80px',
			left: '100px'
		},speed,function(){	

			q.find('span.rword-0').text( a[0] );
			q.find('span.rword-1').text( a[1] );
			q.find('span.rword-2').text( a[2] );
			q.find('span.rword-3').text( a[3] );
			
			q.find('h2.de').text( w );
						
			q.find('span.rword-0')
				.animate({
					top: '10px',
					left: '10px'
				},speed);
			
			q.find('span.rword-1')
				.animate({
					top: '10px',
					left:  250 - ( q.find('span.rword-1').width() + 20 ) + 'px'
				},speed);
			
			q.find('span.rword-2')
				.animate({
					top: '160px',
					left: '10px'
				},speed);
			
			q.find('span.rword-3')
				.animate({
					top: '160px',
					left: 250 - ( q.find('span.rword-3').width() + 20 ) + 'px'
				},speed);
				
			// return colors to white
			q.find('.de').css('color','#fff');
			s.css('color','#fff');
		
		});
		
		$('#slist li').removeClass('current');
		
		current++;
		
		if ( current >= 9 ) current=0;
		
		$('#slist li:eq('+current+')').addClass('current');
	}
	
	// Shuffle array function
	function shuffle(array) {
	  var currentIndex = array.length
		, temporaryValue
		, randomIndex
		;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	
	$('#platz').on('click','a.new_start',function(){ 
	
		$(this).fadeOut('slow',function(){
		
			Start();
		});
		
		return false;
	});
	
	function Start() {
	
		$('#slist li').removeClass('current');
		
		current = 0;
		
		$('#slist li:eq('+current+')').addClass('current');
	
		de_words = st_words.slice(0);
		
		// how much words as a winner?
		clicks = Math.floor(( de_words.length - 36 )/4) - 1;
		
		$('#level .scale, #wrongs .scale').animate({ height: '624px' },1000);
	
		step = Math.floor( scale_height / clicks );
						
		// 15 words as a winner!!! 
		pts = 0;
		
		clicks_done = 0;
				
		// shuffling Deutsche Words Start Array
		shuffle(de_words);
	
		// Setting a Haupt Worts und Antworts
		$('.q h2.de').each(function(i){ 
		
			$(this).text(de_words[i][0]);
			
			var right_answer = de_words[i][1];
			
			used.push( de_words.splice( i, 1 ) );
			
			answers = [ right_answer ];
			
			answers.push( de_words[i][1] ); used.push ( de_words.splice( i, 1 ) );
			answers.push( de_words[i][1] ); used.push ( de_words.splice( i, 1 ) );
			answers.push( de_words[i][1] ); used.push ( de_words.splice( i, 1 ) );
			
			shuffle(answers);
			
			spans = $(this).parent().find('span');
			
			spans.each(function(s){ $(this).text(answers[s]); }); // setting the Answers
			
		});
		
		$('#slist').fadeIn('slow'); 
		
		// Left Position
		for (var p = 0; p <=9; p++) {
		
			$('.q:eq('+p+') .rword-1').css('left', 250 - ($('.q:eq('+p+') .rword-1').width() + 20) );
			$('.q:eq('+p+') .rword-3').css('left', 250 - ($('.q:eq('+p+') .rword-3').width() + 20) );
		}
	}
	
	Start();

});