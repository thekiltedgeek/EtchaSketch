$(document).ready(function(){
     var div = $('#grid');
     var cel = $('.cel');
     var divSize = div.width();
     var mrgSize = 2;
     $('input[name=resetButton]').click(function(){
	  var num = prompt('Enter number of squares per side');
	  div.empty();
	  var newSize = divSize/num - mrgSize*2;
	  for(var i=0; i< num*num; i++){
	       div.append('<div class="cel"></div>');
	  }
	  $('.cel').width(newSize);
	  $('.cel').height(newSize);
     });
});