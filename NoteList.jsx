import React from "react";
import { decrypt } from "../utils/crypto";

export default function NoteList({ notes, password, onDelete }) {
    return (
        <div className="space-y-3">
        {notes.length === 0 && <p className="text-gray-500">No notes yet.</p>}
        {notes.map((note) => {
            const plain = password ? decrypt(note.content, password) : "🔒 Encrypted";
            return (
            <div key={note.id} className="p-3 border rounded bg-gray-50">
                <p>{plain || "❌ Wrong password"}</p>
                <small className="text-gray-500 block">{note.created}</small>
                <button
                className="mt-2 text-red-600"
                onClick={() => onDelete(note.id)}
                >
                Delete
                </button>
            </div>
            );
        })}
        </div>
    );
}
