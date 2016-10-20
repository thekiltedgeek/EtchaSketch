$(document).ready(function(){
     $(document).drawGrid(10);
     $('input[name=resetButton]').click(function(){
         var num = prompt('Enter number of squares per side');
         $(document).drawGrid(num);
     });
});

/* Re-usable function to draw the grid with sides = num */
$.fn.drawGrid=function(num){
    var div = $('#grid');
    var divSize = div.width();
    var mrgSize = 2;
    
    div.empty();
    var newSize = divSize/num - mrgSize * 2;
    for(var i=0; i<num*num; i++){
        div.append('<div class="cel"></div>');
    }
    $('.cel').width(newSize);
    $('.cel').height(newSize);
    
    $('.cel').mouseenter(function(){
        $(this).addClass('visited');
    });
}