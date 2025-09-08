# Privacy-Focused Notes App with Encryption

A secure offline-first notes app where all notes are **encrypted with AES** before being stored locally.  
Built with **React, Tailwind CSS, IndexedDB, and CryptoJS**.

---

## ✨ Features
- Create, update, delete notes
- AES-256 encryption before saving
- Offline storage using IndexedDB
- Search, pin, and archive notes
- Responsive UI (mobile & desktop)

---

## 📂 Project Structure
/notes-app/
/src/
components/
NoteForm.jsx
NoteList.jsx
NoteItem.jsx
utils/
crypto.js
db.js

---


Abstract:
This project implements a secure offline-first note-taking application where all notes are encrypted before being saved. The aim is to provide privacy to users so that even if their storage is accessed, the notes remain unreadable without the password.

Tools Used

React.js for UI
Tailwind CSS for styling
IndexedDB (idb library) for local storage
CryptoJS for AES encryption/decryption


Steps Involved:

1. Set up React project with Tailwind.
2. Built CRUD functionality for notes.
3. Integrated IndexedDB to store notes locally in browser.
4. Used CryptoJS AES encryption to secure notes with a user password.
5. Added search, pin, and archive features.
6. Designed a responsive, mobile-friendly UI.

Conclusion:
The Privacy-Focused Notes App provides a simple and secure way to manage personal notes. All data remains on the client side and encrypted, ensuring user privacy. This project demonstrates how client-side encryption and offline storage can enhance security for everyday tools. Future enhancements could include optional cloud sync with secure authentication.

App.jsx
README.md
REPORT.pdf
