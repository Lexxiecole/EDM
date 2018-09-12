


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtckO05P8UvebCfEZX6srXdEYzFPKc3Fg",
    authDomain: "edm2-af99d.firebaseapp.com",
    databaseURL: "https://edm2-af99d.firebaseio.com/",
    projectId: "edm2-af99d",
    storageBucket: "edm2-af99d.appspot.com",
    messagingSenderId: "247789688856"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  var eName = "";
  var eRole = "";
  var start = "";
  var months = "";
  var rate = 0;

  // Capture Button Click
  $("#submit").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    ename = $("#employeeName").val().trim();
    eRole = $("#role").val().trim();
    start = $("#startDate").val().trim();
    months = $('#comment-input').val().trim();
    rate = $('#rate').val().trim();

    database.ref().set({
      eName: ename,
      eRole: eRole,
      start: start,
      months: months,
      rate: rate
    });
  });

  

//   database.ref().on("value", function(snapshot) {
//     console.log(snapshot.val());

//     // Log the value of the various properties
//     console.log(snapshot.val().eName);
//     console.log(snapshot.val().eRole);
//     console.log(snapshot.val().start);
//     console.log(snapshot.val().months);
//     console.log(snapshot.val().rate);

//     // If any errors are experienced, log them to console.
// }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });

  var createRow = function(data) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var eNameDisplay = $("<td>").text(snapshot.val().eName);
    var roleDisplay = $("<td>").text(snapshot.val().eRole);
    var startDisplay = $("<td>").text(snapshot.val().start);
    var monthsDisplay = $("<td>").text(snapshot.val().months);
    var rateDisplay = $("<td>").text(snapshot.val().rate);
    // Append the newly created table data to the table row
    tRow.append(eNameDisplay, roleDisplay, startDisplay, monthsDisplay, rateDisplay);
    // Append the table row to the table body
    tBody.append(tRow);
  };