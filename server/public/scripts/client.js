
$(document).ready(function(){

init();

//variables
var i = 0;
var highStudentCount = 18;
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
          $el.append("<div class='informationAppend'><p>" + data.phirephiters[i].name + "</p></div>");
          $el.append("<div><p>" + '<strong>Git Username: </strong>' + data.phirephiters[i].git_username + "</p></div>");
          $el.append("<div><p>" + '<strong>Shoutout: </strong>' + data.phirephiters[i].shoutout + "</p></div>");
        }//end of appendInfo()

        carousel();
        function carousel() {
          //adds # of blocks to highStudentCount var
          for (var i = 0; i < highStudentCount; i++) {
            var block = $("<div>");
            block.addClass("blocks");
            block.data("lowStudentCount", i);
            $(".slider").append(block);
          }//end of FOR
          //highlights indexed selection
          $(".blocks").each(function() {
            console.log(this);//logs indivual div's
            console.log($(this).data());

            if($(this).data() == currentStudentIndex) {
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
            i++;
              if (i == highStudentCount){
                i = lowStudentCount;
              }//end of IF
              console.log("next: " + i);
              appendInfo();
            });//end of #nextButton on click function
//previous button
            $("#prevButton").click(function(){
              $(".phirephiters").remove();
              i--;
                if (i == -1){
                  i = highStudentCount;
                }//end of IF
                console.log("previous: " + i);
                appendInfo();
            });//end of #prevButton on click function
          }//end of click()

      }//end of sucess: function
    });//end of ajax
  }//end of init()
});//end of document.ready
