
$(document).ready(function(){
	

	$("#submit").on("click", function(event){
		event.preventDefault();
		calculations();

	});


	function calculations(){

		var startDate = new Date($("#startDateInput").val().trim());
		console.log("Start Date: " + startDate);

	}//end of calculations()

});//end document.ready()