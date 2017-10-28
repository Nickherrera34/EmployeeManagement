
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
  
  var database = firebase.database();


	$("#submit").on("click", function(event){
		event.preventDefault();
		calculations();

	});


	function calculations(){

		var startDate = $("#startDateInput").val().trim();
		var dateSplit = startDate.split('/');
		var formattedDate = dateSplit[1]+ '/' + dateSplit[0]+ '/'+dateSplit[2];
		var newDate = moment(new Date(formattedDate));

		var todaysDate = moment(new Date());
		//var monthsWorked = startDate.diff(todaysDate,'months');
		console.log("Start Date: " + newDate);
		console.log("Today's Date: " + todaysDate);
		//console.log("Months Worked: " + monthsWorked);


	}//end of calculations()

});//end document.ready()