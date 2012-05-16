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

		equal(note.title(), title, "title: " + note.title() + " equals " + title);
		equal(note.content(), content, "content: " + note.content() + " equals " + content);
		equal(note.createdOn(), createdOn, "createdOn: " + note.createdOn() + " equals " + createdOn);
		equal(note.isFavourited(), isFavourited, "isFavourited: " + note.isFavourited() + " equals " + isFavourited);
		equal(note.isStarred(), isStarred, "isStarred: " + note.isStarred() + " equals " + isStarred);
	});
	
	test("Create Note: using normal constructor", function() {
		var title = "Normal title";
		var content = "Normal content";
		var createdOn = new Date();
		var isFavourited = false;
		var isStarred = false;
		
		var note = new Note(title, content);
		
		note.createdOn(createdOn);

		equal(note.title(), title, "title: " + note.title() + " equals " + title);
		equal(note.content(), content, "content: " + note.content() + " equals " + content);
		equal(note.createdOn(), createdOn, "createdOn: " + note.createdOn() + " equals " + createdOn);
		equal(note.isFavourited(), isFavourited, "isFavourited: " + note.isFavourited() + " equals " + isFavourited);
		equal(note.isStarred(), isStarred, "isStarred: " + note.isStarred() + " equals " + isStarred);
	});
	
	test("Create note: using null values", function() {
		var title = null;
		var content = null;
		var createdOn = null;
		var isFavourited = null;
		var isStarred = null;
		
		var note = new Note(title, content);
		
		note.createdOn(createdOn);

		notEqual(note.title(), title, "title: " + note.title() + " equals " + title);
		notEqual(note.content(), content, "content: " + note.content() + " equals " + content);
		// notEqual(note.createdOn(), createdOn, "createdOn: " + note.createdOn() + " equals " + createdOn);
		notEqual(note.isFavourited(), isFavourited, "isFavourited: " + note.isFavourited() + " equals " + isFavourited);
		notEqual(note.isStarred(), isStarred, "isStarred: " + note.isStarred() + " equals " + isStarred);
	});
	
	test("Create note: using lots of whitespace", function() {
		var title = "              There is lotsa white       space here!         ";
		var content = "              There is lotsa white       space here too!         ";;
		var isFavourited = false;
		var isStarred = false;
		
		var note = new Note(title, content);
		
		equal(note.title(), $.trim(title), "title: " + note.title() + " equals " + $.trim(title));
		equal(note.content(), $.trim(content), "content: " + note.content() + " equals " + $.trim(content));
		equal(note.isFavourited(), isFavourited, "isFavourited: " + note.isFavourited() + " equals " + isFavourited);
		equal(note.isStarred(), isStarred, "isStarred: " + note.isStarred() + " equals " + isStarred);
	});
};