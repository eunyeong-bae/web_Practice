		/* object */
		var Body = {
			setColor:function(color){
				//using JavaSCript language
				//document.querySelector('body').style.color = color;
				//using JQuery 
				$('body').css('color',color);
			},
			setBackgroundColor:function(color){
				//using JavaSCript language
				//document.querySelector('body').style.backgroundColor = color;
				//using JQuery 
				$('body').css('backgroundColor',color);
			}
		};
		var links = {
			setLinkColor:function(color){
				//using JavaScript language
				// /* loop & array */
				// var alist = document.querySelectorAll('a');
				// var i = 0;
				// while(i<alist.length){
				// 	alist[i].style.color = color;
				// 	i+= 1;
				// }
				//using JQuery 
				$('a').css('color',color);
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