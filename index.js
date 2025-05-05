let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
    const noteText =document.getElementById("noteInput").value;
    if (noteText.trim() === "") return;

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    renderNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}

function editNote(index) {
    const newText = prompt("Edit your note", notes[index]);
    if (newText !== null && newText.trim() !== "") {
        notes[index] = newText;
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    }
}

function renderNotes() {
    const notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const noteEl = document.createElement("div");
        noteEl.className = "note";
        noteEl.innerHTML = `
            <p>${note}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteEl);
    });
}

renderNotes();