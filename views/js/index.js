$(document).ready(function(){
  $('form').on('submit', function(){

    var miles = $('#miles');
    var paper = $('#paper');
    var jsonData = {"miles" : miles.val(), "paper" : paper.val()};

    $.ajax({
      type: 'POST',
      url: '/index',
      data: jsonData,
      success: function() {
        location.reload();
      }
    });

    return false;

  })
})
