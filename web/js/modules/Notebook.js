/**
 * A <code>Note</code> contains a <code>title</code> and a <code>content</code>.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Note
 * @param {String} title A short title for the Note.
 * @param {String} content A descriptive content for the Note.
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Notebook = function(storeManager) {
	var self = this;

	self.notes = ko.observableArray();
	self.isEmpty = ko.observable(true);
	
	/**
	 * Intializes the <code>Notebook</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.initialize = function() {
		self.updateIsEmpty();
		
		debug.info("Successfully created notebook!", self);
	};
	
	/**
	 * Appends a note to the list of notes in this notebook.
	 * @param {Note} note The new note to be appended.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.addNote = function() {
		if($("#createNewNoteForm").valid()) {
			var title = $("#noteTitle").val();
			var content = $("#noteContent").val();
			
			var note = new Note(title, content);
			
			debug.info("Adding new note...", note);
			
			self.notes(self.notes().reverse());
			self.notes.push(note);
			self.notes(self.notes().reverse());
			
			// Clear the input fields.
			$("#noteTitle").val("");
			$("#noteContent").val("");
		}
		
		self.updateIsEmpty();
	};
	
	/**
	 * Removes the note from the list of notes in this notebook.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.removeNote = function(note) {
		self.notes.remove(note);
		self.updateIsEmpty();
	};
	
	/**
	 * Performs post processing on the newly added note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.postProcess = function(domnode, index, item) {
		// FIXME This method is being called 3 times.
		// Initialize jQuery timeago.
		$("time.timeago").timeago();
	};
	
	/**
	 * Makes the user focus on the create note form.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.focusCreateNote = function() {
		$("#createNewNoteDiv").collapse('show');
		$("#noteTitle").focus();
	};
	
	/**
	 * Updates isEmpty in order to show no notes message.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.updateIsEmpty = function() {
		if(self.notes().length == 0) {
			self.isEmpty(true);
		} else {
			self.isEmpty(false);
		}
	};

	self.initialize();
};