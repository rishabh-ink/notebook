/**
 * A <code>Note</code> contains a <code>title</code> and a <code>content</code>.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Note
 * @param {String} title A short title for the Note.
 * @param {String} content A descriptive content for the Note.
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Notebook = function(title) {
	var self = this;
	
	self.title = ko.observable();
	self.notes = ko.observableArray();
	
	/**
	 * Intializes the <code>Notebook</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Notebook.prototype.initialize = function(title) {
		self.setTitle(title);
	};
	
	/**
	 * Setter for title.
	 * @param {String} title A short title for the Notebook.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.setTitle = function(title) {
		$.trim(title) ? self.title($.trim(title)) : self.title("No title");
	};
	
	/**
	 * Appends a note to the list of notes in this notebook.
	 * @param {Note} note The new note to be appended.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.addNote = function(note) {
		self.notes().push(note);
	};
	
	/**
	 * Removes the note from the list of notes in this notebook.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.removeNote = function() {
		self.notes().remove(this);
	};
	
	self.initialize(title);
};