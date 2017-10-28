
$(document).ready(function(){
	 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8MolB6enfH0M9lKhrs5Db1_BaAQrnO5g",
    authDomain: "employee-management-138b3.firebaseapp.com",
    databaseURL: "https://employee-management-138b3.firebaseio.com",
    projectId: "employee-management-138b3",
    storageBucket: "employee-management-138b3.appspot.com",
    messagingSenderId: "983041657173"
  };
  firebase.initializeApp(config);
  
  var database = firebase.data();


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