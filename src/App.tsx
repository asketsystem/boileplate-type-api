import './App.css';
import Header from './components/Header';
import { useState } from 'react'
import ListNotes from './components/ListNotes';
import { Note } from './models/note.model'

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: 'New Note',
      body: 'This is a new note.'
    }
  ])
  return (
    <>
      <Header />
      <div className="container">
        <ListNotes notes={notes} />
      </div>
    </>
  );
}

export default App;
