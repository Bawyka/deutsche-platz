$(function(){
		
	// Start Array
	var st_words = [  
					['Sonne','Солнце'],             // 1
				    ['Licht','Свет'],		     // 2
				    ['Morgen','Утро'],        // 3
				    ['Nacht','Ночь'],		     // 4
				    ['Wasser','Вода'], 	     // 5
				    ['Freund','Друг'],         // 6
				    ['Sprache','Язык'],      // 7
					['Mutter','Мать'],	     // 8
					['Hertz','Сердце'],		     // 9
					['Stein','Камень'],		     // 10
					['Angst','Страх'],		     // 11
					['Ritter','Рыцарь'],		     // 12
					['Entwicklung','Расширени'], // 13
					['Tag','День'],				 // 14
					['Grab','Могила'],			 // 15
					['Zeit','Время'],			 // 16
					['Vater','Отец'],			 // 17
					['Auge','Глаз'],				 // 18
					['Stück','Часть'],			 // 19
					['Holz','Древесина'],			 // 20
					['Kamerad','Компаньон'],	 // 21
					['Mund','Рот'],			 // 22
					['Mond','Луна'],			 // 23
					['Weg','Путь'],				 // 24
					['Schlag','Удар'],			 // 25
					['Recht','Право'],			 // 26
					['Glück','Удача'],			 // 27
					['Mensch','Человек'],			 // 28
					['Zug','Поезд'],			 // 29
					['Anmeldung','Регистрация'],// 30
					['Geschichte','История'],		 // 31
					['Schnee','Снег'],			 // 32
					['Bau','Конструкция'],		 // 33
					['Kampf','Борьба'],		 // 34
					['Tun','Активность'],			 // 35
					['Feuer','Огонь'],			 // 36
					
					['Fahrung','Умение'],		 // 37
					['Fahrrad','Велосипед'],		 // 38
					['Nahrung','Еда'],			 // 39
					['Katze','Кот'],			 // 40
					['Spiel','Игра'],			 // 41
					['Woche','Неделя'],			 // 42
					['Jahr','Год'],			 // 43
					['Kopf','Голова'],			 // 44
					['Hut','Шляпа'],				 // 45
					['Hund','Собака'],				 // 46
					['Klang','Звук'],			 // 47
					['Himmel','Небо'],			 // 48
					['Wunsch','Желание'],			 // 49
					['Milch','Молоко'],			 // 50
					['Dorf','Село'],			 // 51
					['Ort','Место'],			 // 52
					['Melkerin','Доярка'],     // 53
					['Ausgang','Выход'],			 // 54
					['Meer','Море'],				 // 55
					['Fisch','Рыба'],			 // 56
					['Sicherheit','Безопасность'],	 // 57
					// ['Woche','Week'],			 // 58 repeat // should be off or replaced
					['Monat','Месяц'],			 // 59
					['Achtung','Внимание'],	 // 60
					['Gesundheit','Здоровье'],	 // 61
					['Zahn','Зуб'],			 // 62
					['Geburtstag','Деньрождения'],	 // 63
					['Weinnachten','Рождество'], // 64
					['Geschenk','Подарок'],		 // 65
					['Gott','Бог'],				 // 66
					['Suche','Поиск'],			 // 67
					['Wahrheit','Правда'],		 // 68
					['Regenbogen','Радуга'],	 // 69
					['Regen','Дождь'],			 // 70
					['Hintergrundbilder','Обои'], // 71
					['Kuh','Корова'],				 // 72
					['Sieg','Победа'],			 // 73
					['Stern','Звезда'],			 // 74
					['Tee','Чай'],				 // 75
					['Seite','Страница'],			 // 76
					['Nase','Нос'],			 // 77
					['Haar','Волосы'],			 // 78
					['Anruf','Звонок'],			 // 79
					['Bruder','Брат'],		 // 80
					['Schule','Школа'],		 // 81
					['Frühling','Весна'],		 // 82
					['Höhe','Высота'],			 // 83
					['Breite','Ширина'],			 // 84
					['Länge','Длинна'],			 // 85
					['Mannschaft','Команда'],		 // 86
					['Maus','Мышь'],			 // 87
					['Bär','Медведь'],				 // 88
					['Kühlschrank','Холодильник'],	 // 89
					['Arbeit','Работа'],			 // 90
					['Bein','Нога'],				 // 91
					['Weiß','Белый'],			 // 92
					['Buch','Книга'],			 // 93
					['Blitz','Молния'],			 // 94
					['Abend','Вечер'],		 // 95
					['Zeitschrift','Журнал'],	 // 96
					['Staubsauger','Пылесос'],	 // 97
					['Spur','Знак'],			 // 98
					['Ewigkeit','Бесконечность'],	 // 99
					['Mühe','Попытка'],			 // 100
					
					['Wahn', 'Бред'],
					['Trubel' ,'Переполох'],
					['Rampenlicht','Прожектор'],
					['Darstellung','Представление'],
					['Beachtung','Соответствие'],
					['Stimmung','Настроение'],
					['Richtung','Направление'],
					['Brief','Письмо'],
					['Gatter','Ворота'],
					['Kaff ','Свалка'],
					['Trost','Утешение'],
					['Wohl','Благосостояние'],
					['Wink','Намек'],
					['Schale','Оболочка'],
					['Käfer','Жук'],
					['Stößel','Кулачек'],
					['Unterricht','Занятия'],
					['Abzug','Вычитание'],
					['Gelegenheit','Возможность'],
					['Wehwehchen','Боль'],
					['Lacher','Смех'],
					['Heft','Вопрос'],
					['Kessel','Котел'],
					['Gesicht','Лицо'],
					['Wahnvorstellung','Заблуждение'],
					['Bengel','Еж'],
					['Wut','Ярость'],
					['Berühmtheit','Знаменитость'],
					['Nähe','Близость'],
					['Taubheit','Онемение'],
					['Messer','Нож'],
					['Verbindung','Связь'],
					['Ziegenbart','Эспаньолка'],
					['Lumpen','Тряпка'],
					['Berg','Гора'],
					// ['Maul','Рот'], should be off cause repeat
					['Schwanz','Хвост'],
					['Spalt','Разрыв'],
					['Fels','Камень'],
					['Brot','Хлеб'],
					['Erkrankung','Болезнь'],
					['Zorn','Гнев'],
					['Aufruhr','Бунт'],
					['Zelt','Палатка'],
					['Befehl','Приказ'],
					['Abteilung','Отделение'],
					['Gewalt','Насилие'],
					['Ahnung','Идея'],
					['Abgestumpftheit','Тупость'],
					['Zelle','Клетка'],
					['Verzweiflung','Отчаяние'],
					['Festung','Крепость'],
					['Verruf','Репутация'], 
					['Belastung','Нагрузка']
					
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
	
	$('#platz').on('click','.new_start',function(){ 
	
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