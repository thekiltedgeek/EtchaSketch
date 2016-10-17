$(document).ready(function(){
     var div = $('#grid');
     $('input[name=resetButton]').click(function(){
	  var num = prompt('Enter number of squares per side');
	  div.empty();
	  for(var i=0; i< num*num; i++){
	       div.append('<div class="cel"></div>');
	  }
     });
});