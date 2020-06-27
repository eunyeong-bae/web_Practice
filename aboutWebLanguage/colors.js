		/* object */
		var Body = {
			setColor:function(color){
				document.querySelector('body').style.color = color;
			},
			setBackgroundColor:function(color){
				document.querySelector('body').style.backgroundColor = color;
			}
		};
		var links = {
			setLinkColor:function(color){
				/* loop & array */
				var alist = document.querySelectorAll('a');
				var i = 0;
				while(i<alist.length){
					alist[i].style.color = color;
					i+= 1;
				}
			}
		};
		function nightDayHandler(self){
			/* refactoring  target and this(document.querySelector('#night_day'))*/
			var target =document.querySelector('body');
			if(self.value==='night'){
				Body.setBackgroundColor('black');
				Body.setColor('white');
				self.value ='day';
	
				links.setLinkColor('powderblue');
			}else{
				Body.setBackgroundColor('white');
				Body.setColor('black');
				self.value ='night';

				links.setLinkColor('pink');
		}
	}