
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

		var startDate = new Date($("#startDateInput").val().trim());
		console.log("Start Date: " + startDate);

	}//end of calculations()

});//end document.ready()