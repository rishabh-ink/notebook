var NotebookTest = function() {
	module("Notebook.js");
	
	ko.applyBindings(new Notebook());

	test("Create Notebook: initialize", function() {
		var note1 = new Note();
		var note2 = new Note("Second note title", "Second note content");
		var notebook = new Notebook("Sample");
		
		ok(notebook, notebook + " created");
	});

	test("Create Notebook: addNote", function() {
		var note = new Note();
		var notebook = new Notebook("add note test");

		notebook.notes().push(note);
		
		equal(notebook.notes()[0], note, "notes[0]: " + notebook.notes()[0] + " equals " + note);
	});

	test("Create Notebook: deleteNote", function() {
		var note = new Note();
		var notebook = new Notebook("delete note test");
		
		notebook.notes().push(note);
		
		equal(notebook.notes()[0], note, "notes[0]: " + notebook.notes()[0] + " equals " + note);
		
		notebook.notes.remove(note);
		
		notEqual(notebook.notes()[0], note, "notes[0]: " + notebook.notes()[0] + " not equal to " + note);
	});
};