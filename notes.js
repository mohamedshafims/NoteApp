console.log("starting notes");
const fs = require('fs');
var addNote = (title,body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try{
       var notestring =  fs.readFileSync('not.json');
       notes = JSON.parse(notestring);
    }
    catch(e){

    }
    var duplicates = notes.filter((noty) => noty.title === title);
    if(duplicates.length === 0)
    {
        notes.push(note);
        fs.writeFileSync('not.json',JSON.stringify(notes));
    }
};
var getAll = () => {
    console.log("list of notes");
};
var getNote = (title) => {
    console.log("reading note",title);
};
var removeNote = (title) => {
    console.log("removing note",title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};