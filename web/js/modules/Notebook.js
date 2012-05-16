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
	Notebook.prototype.initialize = function() {
	};

	/**
	 * Appends a new <code>Note</code> object to the current <code>Notebook</code>.
	 * @param note A <code>Note</code> object that needs to be added to the current <code>Notebook</code>.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Notebook.prototype.addNote = function(note) {
		if(!(note instanceof Note)) {
			throw new Error("Notebook.prototype.addNote(): argument 'note' is not an instance of 'Note'.");
		} else {
			self.notes().push(note);
		}
	};
	
	/**
	 * Deletes a <code>Note</code> object from the current <code>Notebook</code>.
	 * If the <code>Note</code> object does not exist, this method does nothing.
	 * @param note The <code>Note</code> object to be deleted.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Notebook.prototype.deleteNote = function(note) {
		if(!(note instanceof Note)) {
			throw new Error("Notebook.prototype.addNote(): argument 'note' is not an instance of 'Note'.");
		} else {
			self.notes().remove(note);
		}
	};
	
	self.initialize();
};