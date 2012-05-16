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
	debug.info("Creating main Application object...");
	var mainApplication = new Application();
	debug.info("Main Application object created successfully.", mainApplication);
	debug.groupEnd();
	
	debug.groupEnd();
});






