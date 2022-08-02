import { Note } from '../models/note.model'

interface IListNotesProps {
    notes: Note[];
}

const ListNotes: React.FC<IListNotesProps> = ({ notes }) => {

    return (
        <>
            <h2 className="mt-4">Notes</h2>
            <div>{notes.map((note) => <div><h3>{note.title}</h3><p>{note.body}</p></div>)}</div>
        </>
    )
}

export default ListNotes;