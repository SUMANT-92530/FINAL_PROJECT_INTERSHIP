import { openDB } from "idb";

const DB_NAME = "notes-db";
const STORE_NAME = "notes";

export async function initDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        }
        },
    });
    }

    export async function saveNote(note) {
    const db = await initDB();
    return db.put(STORE_NAME, note);
    }

    export async function getNotes() {
    const db = await initDB();
    return db.getAll(STORE_NAME);
    }

    export async function deleteNote(id) {
    const db = await initDB();
    return db.delete(STORE_NAME, id);
}
