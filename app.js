
var startDate;
var monthsWorked;
var name = "";
var role = "";
var monthlyRate;
var totalBilled;

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
		name = $("#nameInput").val().trim();
		role = $("#roleInput").val().trim();
		console.log(name, role);

		calculations();


	});


	function calculations(){

		startDate = $("#startDateInput").val().trim();
		var dateSplit = startDate.split('/');
		var formattedDate = dateSplit[1]+ '/' + dateSplit[0]+ '/'+dateSplit[2];
		var newDate = moment(new Date(formattedDate));

		var todaysDate = moment(new Date());
		monthsWorked = todaysDate.diff(newDate,'months');

		monthlyRate = $("#monthlyRateInput").val().trim();
		totalBilled = monthlyRate * monthsWorked;

		console.log("Start Date: " + newDate);
		console.log("Today's Date: " + todaysDate);
		console.log("Months Worked: " + monthsWorked + " months");
		console.log("Months Rate: " + monthlyRate);
		console.log("Total Billed: " + totalBilled);


	}//end of calculations()

});//end document.ready()