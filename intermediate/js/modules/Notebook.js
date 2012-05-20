var Notebook=function(){var a=this;a.STORE_KEY="NOTEBOOK_STORE";a.notes=ko.observableArray();a.isEmpty=ko.observable(!0);a.notesAsJson=ko.observable("");a.initialize=function(){Modernizr.localstorage||$("#errorMessagesNoLocalStorage").show();a.loadNotes();a.updateIsEmpty();debug.info("Successfully created notebook!",a)};a.addNote=function(){if($("#createNewNoteForm").valid()){var b=$("#noteTitle").val(),e=$("#noteContent").val(),b=new Note(b,e);debug.info("Adding new note...",b);a.notes(a.notes().reverse());
a.notes.push(b);a.notes(a.notes().reverse());a.saveNotes()&&($("#noteTitle").val(""),$("#noteContent").val(""));a.updateIsEmpty()}};a.removeNote=function(b){a.notes.remove(b);a.saveNotes();a.updateIsEmpty()};a.editNote=function(b,e){debug.info("Editing",b,$(e.target).parent().parent().parent().parent());$(e.target).parent().parent().parent().hide();$("#noteTitle").val(b.title());$("#noteContent").val(b.content());a.removeNote(b);$("#createNewNoteDiv").collapse("show");$("#noteContent").focus()};a.postProcess=
function(){$("time.timeago").timeago()};a.focusCreateNote=function(){$("#createNewNoteDiv").collapse("show");$("#noteTitle").focus()};a.updateIsEmpty=function(){a.notes().length==0?a.isEmpty(!0):a.isEmpty(!1)};a.loadNotes=function(){if(Modernizr.localstorage){var b=localStorage.getItem(a.STORE_KEY);b?(debug.info("Found previously stored data! Applying Knockout mapping...",b),b=JSON.parse(b),$.each(b,function(b,c){debug.log(b,c);var d=new Note;d.setTitle(c.title);d.setContent(c.content);d.createdOn(c.createdOn);
d.isFavourited(c.isFavourited);d.isStarred(c.isStarred);a.notes.push(d)}),debug.info("Restored from localstorage.")):debug.warn("No previously stored data found.")}else debug.warn("No localstorage capability found.")};a.saveNotes=function(){if(Modernizr.localstorage)try{return localStorage.setItem(a.STORE_KEY,ko.toJSON(a.notes())),debug.info("Saved to localstorage."),$("#errorMessagesLocalStorageFull").hide(),!0}catch(b){b==QUOTA_EXCEEDED_ERR&&$("#errorMessagesLocalStorageFull").show()}return!1};
a.deleteAllNotes=function(){!a.isEmpty()&&confirm("Are you sure you want to permanently delete all your notes?")&&(debug.log("Removing all notes and clearing local storage."),a.notes.removeAll(),a.saveNotes(),a.updateIsEmpty())};a.toggleStar=function(b){b.toggleStar();a.saveNotes()};a.toggleHeart=function(b){b.toggleHeart();a.saveNotes()};a.toggleAboutModal=function(){$("#aboutMe").modal("toggle")};a.notesToJson=function(){var b=ko.toJSON(a.notes()),b=JSON.parse(b),b=JSON.stringify(b,void 0,4);a.notesAsJson(b);
$("#importExportModal").modal("toggle")};a.initialize()};
