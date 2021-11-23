// Example of function and variables

// Global variable is defined outside function
var globalName = 'Global';

window.alert(globalName);

function showName() {
  // This is local variable, which stays inside..
  var globalName = 'Local';

  window.alert(globalName);

  // Define global variable with window
  window.globalVersion = 42;
  window.alert('Global variable from inside function: ' + window.globalVersion);
}

// Run the fuction
showName();

// We are now accessing global variable defined inside function
window.alert('global variable from outside function: ' + window.globalVersion);