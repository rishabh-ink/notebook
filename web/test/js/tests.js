$(document).ready(function(){
	// Attach the error handler.
	$(window).error(function(error, fileName, lineNumber) {
		debug.error(error, fileName, lineNumber);
	});
	
	// Run tests for Note.
	NoteTest();
	
	// Run tests for Notebook.
	NotebookTest();
});