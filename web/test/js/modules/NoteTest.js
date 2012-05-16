var NoteTest = function() {
	module("Note.js");

	ko.applyBindings(new Note());
	
	test("Create Note: using empty constructor", function() {
		var title = "No title";
		var content = "No content";
		var createdOn = new Date();
		var isFavourited = false;
		var isStarred = false;
		
		var note = new Note();
		
		note.createdOn(createdOn);
		
		equal(note.title(), title, note.title() + " equals " + title);
		equal(note.content(), content, note.content() + " equals " + content);
		equal(note.createdOn(), createdOn, note.createdOn() + " equals " + createdOn);
		equal(note.isFavourited(), isFavourited, note.isFavourited() + " equals " + isFavourited);
		equal(note.isStarred(), isStarred, note.isStarred() + " equals " + isStarred);
	});
	
	test("Create Note: using normal constructor", function() {
		var title = "Normal title";
		var content = "Normal content";
		var createdOn = new Date();
		var isFavourited = false;
		var isStarred = false;
		
		var note = new Note(title, content);
		
		note.createdOn(createdOn);

		equal(note.title(), title, note.title() + " equals " + title);
		equal(note.content(), content, note.content() + " equals " + content);
		equal(note.createdOn(), createdOn, note.createdOn() + " equals " + createdOn);
		equal(note.isFavourited(), isFavourited, note.isFavourited() + " equals " + isFavourited);
		equal(note.isStarred(), isStarred, note.isStarred() + " equals " + isStarred);
	});
};