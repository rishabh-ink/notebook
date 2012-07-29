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

	self.STORE_KEY = "NOTEBOOK_STORE";

	self.notes = ko.observableArray();
	self.isEmpty = ko.observable(true);

	self.notesAsJson = ko.observable("");

	/**
	 * Intializes the <code>Notebook</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.initialize = function() {
		if(Modernizr.localstorage) {

		} else {
			$("#errorMessagesNoLocalStorage").removeClass("hide");
		}

		self.loadNotes();

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


			var saveStatus = self.saveNotes();

			// Only if the save was successful, then clear the fields, else don't.
			if(saveStatus) {
				// Clear the input fields.
				$("#noteTitle").val("");
				$("#noteContent").val("");
			}

			self.updateIsEmpty();

			// HACK WORKAROUND FIXME Initialize tooltips for the newly created notes.
			$('[title]').tooltip();
		}
	};

	/**
	 * Removes the note from the list of notes in this notebook.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.removeNote = function(note) {
		self.notes.remove(note);
		self.saveNotes();
		self.updateIsEmpty();
	};

	/**
	 * Edit the note.
	 * @author Rishabh Rao
	 * @since 1.0.0
	 */
	self.editNote = function(note, event) {
		debug.info("Editing", note, $(event.target).parent().parent().parent().parent());

		// FIXME Find a better way to select the parent tr.
		$(event.target).parent().parent().parent().hide();

		$("#noteTitle").val(note.title());
		$("#noteContent").val(note.content());

		self.removeNote(note);

		$("#createNewNoteDiv").collapse('show');

		$("#noteContent").focus();
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

		// TODO Use http://shakenandstirredweb.com/240/jquery-moreless-text
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

	/**
	 * Loads the notes stored in localStorage.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.loadNotes = function() {
		if(Modernizr.localstorage) {
			var notebookData = localStorage.getItem(self.STORE_KEY);

			if(notebookData) {
				debug.info("Found previously stored data! Applying Knockout mapping...", notebookData);
				var notesJSON = JSON.parse(notebookData);

				$.each(notesJSON, function(index, item) {
					debug.log(index, item);
					var note = new Note();

					note.setTitle(item.title);
					note.setContent(item.content);
					note.createdOn(item.createdOn);
					note.isFavourited(item.isFavourited);
					note.isStarred(item.isStarred);

					self.notes.push(note);
				});

				debug.info("Restored from localstorage.");
			} else {
				debug.warn("No previously stored data found.");
			}

		} else {
			debug.warn("No localstorage capability found.");
		}
	};

	/**
	 * Saves the notes to localStorage.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.saveNotes = function() {
		if(Modernizr.localstorage) {
			try {
				localStorage.setItem(self.STORE_KEY, ko.toJSON(self.notes()));
				debug.info("Saved to localstorage.");
				$("#errorMessagesLocalStorageFull").addClass("hide");
				return true;
			} catch(e) {
				if(e == QUOTA_EXCEEDED_ERR) {
					$("#errorMessagesLocalStorageFull").removeClass("hide");
				}
			}
		}

		return false;
	};

	/**
	 * Deletes all notes and clears local storage.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.deleteAllNotes = function() {
		if(self.isEmpty()) {
			return;
		} else {
			if(confirm("Are you sure you want to permanently delete all your notes?")) {
				debug.log("Removing all notes and clearing local storage.");
				self.notes.removeAll();
				self.saveNotes();
				self.updateIsEmpty();
			}
		}
	};

	/**
	 * Handles clicking of the heart/star button.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.toggleStar = function(element) {
		element.toggleStar();
		self.saveNotes();
	};

	/**
	 * Handles clicking of the heart/star button.
	 * @author Rishabh Rao
	 * @since 1.0.1
	 */
	self.toggleHeart = function(element) {
		element.toggleHeart();
		self.saveNotes();
	};

	/**
	 * Hides/shows About Me box.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.toggleAboutModal = function() {
		$("#aboutMe").modal("toggle");
	};

	/**
	 * Converts all notes to a JSON array.
	 * @author Rishabh Rao
	 * @since 1.0.1
	 */
	self.notesToJson = function() {
		var rawJson = ko.toJSON(self.notes());
		var parsedJson = JSON.parse(rawJson);
		var formattedJson = JSON.stringify(parsedJson, undefined, 4);
		self.notesAsJson(formattedJson);

		$("#importExportModal").modal("toggle");
	};

	self.initialize();
};