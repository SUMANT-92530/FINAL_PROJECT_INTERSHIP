import React, { useState } from "react";

export default function NoteForm({ onSave }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onSave(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <textarea
            className="w-full p-2 border rounded mb-2"
            rows={3}
            placeholder="Write your note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
            Save Note
        </button>
        </form>
    );
}
