
$(document).ready(function(){

init();

//variables
var i = 0;
var highStudentCount = 17;
var lowStudentCount = 0;
var currentStudentIndex = 0;

function init(){
// Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        for (var i = 0; i < data.phirephiters.length; i++) {
        }//end of FOR loop
        click();

//info append to <div id="informationContainer"></div> on html
        function appendInfo(){
          $("#informationContainer").append("<div class='phirephiters'></div>");
          //animation
          $("#informationContainer").animate({opacity: "0"}, 200).animate({opacity: "1"}, 200);
          var $el = $("#informationContainer").children().last();
          $el.append("<div class='informationAppend'><p>" + data.phirephiters[currentStudentIndex].name + "</p></div>");
          $el.append("<div><p>" + '<strong>Git Username: </strong>' + data.phirephiters[currentStudentIndex].git_username + "</p></div>");
          $el.append("<div><p>" + '<strong>Shoutout: </strong>' + data.phirephiters[currentStudentIndex].shoutout + "</p></div>");
        }//end of appendInfo()

        carousel();
        function carousel() {
          $(".slider").empty();
          //adds # of blocks to highStudentCount var
          for (var i = 0; i < highStudentCount; i++) {
            var block = $("<div>");
            block.addClass("blocks");
            block.data("studentIndex", i);
            $(".slider").append(block);
          }//end of FOR
          //highlights indexed selection
          $(".blocks").each(function() {
            console.log(this);//logs individual div's
            console.log($(this).data("studentIndex"));
        //The perameters for the IF ELSE below are wrong.  I hope im on the right path but am stuck on how to tie (this) to currentStudentIndex
            if($(this).data("studentIndex") == currentStudentIndex) {
              $(this).css("background-color", "red");
            } else {
              $(this).css("background-color", "white");
            }//end of IF
          })//end of each()
        }//end of carousel()

              // for (var i = 0; i < data.phirephiters.length; i++) {
              //   $(".slider").append("<div class='blocks'" + i + "></div>");
              //}//end of FOR
              //}//end of carousel()

        function click() {

//next button
          $("#nextButton").click(function(){
            $(".phirephiters").remove();
            currentStudentIndex++;
              if (currentStudentIndex == highStudentCount){
                currentStudentIndex = lowStudentCount;
              }//end of IF
              console.log("next: " + i);
              appendInfo();
                carousel();
            });//end of #nextButton on click function
//previous button
            $("#prevButton").click(function(){
              $(".phirephiters").remove();
              currentStudentIndex--;
                if (currentStudentIndex == -1){
                  currentStudentIndex = highStudentCount;
                }//end of IF
                console.log("previous: " + i);
                appendInfo();
                  carousel();
            });//end of #prevButton on click function
          }//end of click()

      }//end of sucess: function
    });//end of ajax
  }//end of init()
});//end of document.ready
