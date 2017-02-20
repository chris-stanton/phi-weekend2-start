
$(document).ready(function(){
init();
//variables
var i = 0;
var objectIndex = 0;
var highStudentCount = 18;
var lowStudentCount = -18;

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
          $("#informationContainer").animate({opacity: "0"}, 300).animate({opacity: "1"}, 300);
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




// bottom();
// //appends bottom index
//         function bottom(){
//           for (var j = 0; j < data.phirephiters.length; j++) {
//           var $el = $(".bottom").children().last();
//           $(".bottom").append("<div class='bottomIndex'>" + i + "</div>");
//           $(".bottom").children().last().data("name", j);
//           $(".bottom").children().first().css("background-color", "teal");
//           }//end of FOR
//         }//end of addBottomIndex()




      }//end of sucess: function
    });//end of ajax
  }//end of loadData()
});//end of document.ready
