/* Author: See humans.txt

*/

$(document).ready(function() {
	// Attach the error handler.
	$(window).error(function(error, fileName, lineNumber) {
		debug.error(error, fileName, lineNumber);
	});
	
	debug.group("Notebook");
	debug.info("Starting Notebook...");
	
	// Create main Application object.
	debug.group("Main Application object");
	debug.info("Creating main Notebook object...");
	var mainNotebook = new Notebook();
	debug.info("Main Notebook object created successfully.", mainNotebook);
	debug.groupEnd();
	
	// Apply Knockout bindings.
	debug.info("Applying Knockout bindings", mainNotebook);
	ko.applyBindings(mainNotebook);
	
	debug.groupEnd();
});






