import React, { useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null); // Store the note being edited
  const [editTitle, setEditTitle] = useState(''); // Store the title being edited
  const [editContent, setEditContent] = useState(''); // Store the content being edited

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const startEditing = (note) => {
    setEditingNote(note); // Set the note to be edited
    setEditTitle(note.title); // Initialize edit form with current title
    setEditContent(note.content); // Initialize edit form with current content
  };

  const saveEdit = (e) => {
    e.preventDefault();
    if (editingNote) {
      const updatedNotes = notes.map((note) =>
        note === editingNote ? { title: editTitle, content: editContent } : note
      );
      setNotes(updatedNotes);
      setEditingNote(null); // Clear editing mode
      setEditTitle('');
      setEditContent('');
    }
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Notes App</h1>
      {editingNote ? ( // Conditionally render edit form or note form
        <form onSubmit={saveEdit} className="bg-gray-100 p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button type="button" onClick={cancelEdit} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </form>
      ) : (
        <NoteForm addNote={addNote} />
      )}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <div key={index} onClick={() => startEditing(note)}> {/* Make Note clickable */}
            <Note title={note.title} content={note.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;