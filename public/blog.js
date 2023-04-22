// // Get the button elements and the hidden display element
// const button1 = document.getElementById("button-1");
// const button2 = document.getElementById("button-2");
// const button3 = document.getElementById("button-3");
// const button4 = document.getElementById("button-4");
// const button5 = document.getElementById("button-5");
// const button6 = document.getElementById("button-6");

// const hiddenDisplay = document.getElementById("hidden-display");

// // Add a click event listener to each button
// button1.addEventListener("click", function() {
//   // Change the style of the hidden display to make it visible
//   hiddenDisplay.style.display = "block";
  
//   // Set the text to be displayed
//   hiddenDisplay.innerHTML = "This is text for button 1.";
// });

// button2.addEventListener("click", function() {
//   // Change the style of the hidden display to make it visible
//   hiddenDisplay.style.display = "block";
  
//   // Set the text to be displayed
//   hiddenDisplay.innerHTML = "This is text for button 2.";
// });

// button3.addEventListener("click", function() {
//   // Change the style of the hidden display to make it visible
//   hiddenDisplay.style.display = "block";
  
//   // Set the text to be displayed
//   hiddenDisplay.innerHTML = "This is text for button 3.";
// });

function myfunction() {
    var x=
    document.getElementById("hidden1");
    if (x.style.display === "none") {
        x.style.display= "block";
    } else {
        x.style.display= "none";
    }
}   
