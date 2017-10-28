
$(document).ready(function(){
	

	$("#submit").on("click", function(event){
		event.preventDefault();
		calculations();

	});


	function calculations(){

		var startDate = $("#startDateInput").val().trim();
		var dateSplit = startDate.split('/');
		var formattedDate = dateSplit[1]+ '/' + dateSplit[0]+ '/'+dateSplit[2];
		var newDate = new Date(formattedDate);

		var todaysDate = moment(new Date());
		console.log("Start Date: " + newDate);
		console.log("Today's Date: " + todaysDate);

	}//end of calculations()

});//end document.ready()