var NotebookTest = function() {
	module("Notebook.js");
	
	ko.applyBindings(new Notebook());

	test("Create Notebook: initialize", function() {
		var note1 = new Note();
		var note2 = new Note("Second note title", "Second note content");
		
		var notebook = Notebook();
		
		notebook.notes();
	});

	test("Create Notebook: addNote", function() {

	});

	test("Create Notebook: deleteNote", function() {

	});
};