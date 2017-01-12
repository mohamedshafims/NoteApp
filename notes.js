console.log("starting notes");
const fs = require('fs');
var fetchNotes = () => {
    try{
       var notestring =  fs.readFileSync('not.json');
       notes = JSON.parse(notestring);
       return notes;
    }
    catch(e){
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync('not.json',JSON.stringify(notes));
}
var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicates = notes.filter((noty) => noty.title === title);
    if(duplicates.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    return fetchNotes();
};
var getNote = (title) => {
    var notes = fetchNotes();
    var filterednotes = notes.filter((note) => note.title === title);
    return filterednotes.length > 0 ? filterednotes[0].body : undefined;
};
var removeNote = (title) => {
    var notes = fetchNotes();
    var filterednotes = notes.filter((note) => note.title !== title);
    saveNotes(filterednotes);
    return notes.length !== filterednotes.length
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};