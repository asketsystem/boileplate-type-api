import { Note } from "../models/note.model";
import './Notes.css'

interface INotesProps {
    note: Note,
}

const Notes: React.FC<INotesProps> = ({ note }) => {
    return (
        <div className="notes-container">
            <h3>{note.title}</h3>
            <p className="text-light">{note.body}</p>
            <button className="notes-btn">Delete</button>
        </div>
    );
}

export default Notes;