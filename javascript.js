var DateTime = ''
var now = luxon.DateTime.local();
{
    console.log(now.toString());
    $('#currentDay').html(JSON.stringify(now));
}

$(".fas").on('click',function(){
    console.log("you got clicked", $(this).attr('name'))// 9
    console.log('what we typed',$('#' + $(this).attr('name') +'-input').val())
    localStorage.setItem($(this).attr('name'), $('#' + $(this).attr('name') +'-input').val());

})

console.log('thing from locl storage!!!!!',localStorage.getItem("9"))
$('#9-input').val(localStorage.getItem("9"))



for (var i = 9; i < 17; i++){
    if (i > 12) {
        console.log('Time:', i - 12)
        var num = i - 12
        $('#' + num + '-input').val(localStorage.getItem(num))
    } else {
        console.log("Time: ", i)
        $('#' + i + '-input').val(localStorage.getItem(i))

    }
    
    var d = new Date();
  var currentHour = d.getHours(); 
    var timeBlock = i
if(currentHour === timeBlock) {
    $('#' + i + '-row').addClass('present')

} else if (currentHour > timeBlock){
      console.log('add past class', timeBlock)
      $('#' + i + '-row').addClass('past')
      
  } else {
      console.log('timeblock in the future')
      $('#' + i + '-row').addClass('future')
  }
}







