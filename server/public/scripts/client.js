
$(document).ready(function(){
init();
//variables
var i = 0;
var highStudentCount = 18;
var lowStudentCount = -18;

function init(){
// Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        //phirephiters = data;
        console.log('data from server: ', data);
        for (var i = 0; i < data.phirephiters.length; i++) {
        }//end of FOR loop
click();

//info append to <div id="informationContainer"></div> on html
        function appendInfo(phirephiters){
          $("#informationContainer").append("<div class='phirephiters'></div>");
          var $el = $("#informationContainer").children().last();
          $el.append("<div><p>" + data.phirephiters[i].name + "</p></div>");
          $el.append("<div><p>" + 'Git Username: ' + data.phirephiters[i].git_username + "</p></div>");
          $el.append("<div><p>" + 'Shoutout: ' + data.phirephiters[i].shoutout + "</p></div>");
        }//end of appendInfo()

function click() {
//next button
          $("#nextButton").click(function(){
            $(".phirephiters").remove();
            i++;
              if (i == highStudentCount){
                i = 0;
              }//end of IF

              $("#slider").each(function() {
                    if ($(this).data(i) == i) {
                      $(this).css("background-color", "teal");
                    } else {
                      $(this).css("background-color", "white");
                    }//end of IF
              });//end of .each()
appendInfo();
            });//end of #nextButton on click function

//previous button
            $("#prevButton").click(function(){
              $(".phirephiters").remove();
              i--;
                if (i === -1){
                  i = highStudentCount;
                }//end of IF

                $("#slider").each(function() {
                      if ($(this).data(i) == i) {
                        $(this).css("background-color", "teal");
                      } else {
                        $(this).css("background-color", "white");
                      }//end of IF
                });//end of .each()
appendInfo();
            });//end of #prevButton on click function
}//end of click()

bottom();

//appends bottom index
        function bottom(phirephiters){
          for (var i = 0; i < data.phirephiters.length; i++) {
          $(".bottom").append('<div class="indexClass"></div>');
          $(".bottom").children().last().data("name", i);
          $(".bottom").children().first().css("background-color", "teal");
          }//end of FOR
        }//end of addBottomIndex()
      }//end of sucess: function
    });//end of ajax
  }//end of loadData()
});//end of document.ready
