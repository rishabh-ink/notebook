/**
 * A <code>Note</code> contains a <code>title</code> and a <code>content</code>.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Note
 * @param {String} title A short title for the Note.
 * @param {String} content A descriptive content for the Note.
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Notebook = function() {
	var self = this;
	
	self.notes = ko.observableArray();
	
	/**
	 * Intializes the <code>Notebook</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.initialize = function() {	
		debug.log("Creating sample note.");
		var note = new Note("New note " + self.notes.length, "New note " + self.notes.length);
		
		debug.log("Pushing sample note to notes.", note);
		self.notes.push(note);
		
		debug.info("Successfully created notebook!", self);
	};
	
	/**
	 * Appends a note to the list of notes in this notebook.
	 * @param {Note} note The new note to be appended.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.addNote = function() {
		var note = new Note("New note", "New note");
		debug.info("Adding new note...", note);
		
		self.notes(self.notes().reverse());
		self.notes.push(note);
		self.notes(self.notes().reverse());
	};
	
	/**
	 * Removes the note from the list of notes in this notebook.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.removeNote = function() {
		self.notes.remove(this);
	};
	
	self.initialize();
};