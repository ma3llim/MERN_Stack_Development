# React Todo App 📝

A **modern notes management application** built with **React**, **TypeScript**, and **Tailwind CSS**. Users can **add, update, and delete notes** with an intuitive and responsive interface. Notifications are shown using **react-toastify**.

## Overview

React Todo App helps you **organize your notes efficiently** with a clean UI. Notes include a **title and description**, and you can easily manage them using edit and delete features. The app uses **React hooks and useReducer** for state management and provides **real-time toast notifications**.

## Features

- **Add Notes:** Create notes with title and description.
- **Update Notes:** Edit notes in a modal popup.
- **Delete Notes:** Remove notes permanently.
- **Todo List:** See all notes in a responsive table layout.
- **Notifications:** Success/error messages using `react-toastify`.
- **Custom Hooks:** State management with `useTodos` hook.
- **Unique IDs:** Generated with `nanoid`.

## Technologies Used

- **React 18** – Frontend library
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **react-toastify** – Notifications
- **nanoid** – Unique ID generation
- **useReducer** – State management

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/ma3llim/MERN_Stack_Development.git
    cd MERN_Stack_Development/11_typescritp_project/todo_app
    ```

2. **Install dependencies**

    ```bash
    yarn install
    ```

3. **Run the app**

    ```bash
    yarn start
    ```

4. _(Optional)_ Make it globally accessible

    ```bash
    yarn link
    notes
    ```

## Usage

### Add a Note

- Fill in the **title** and **description**, then click **Add Note**.
- Notes will appear in the table below.

### Update a Note

- Click **Edit** on a note.
- Modify the **title** or **description** in the modal.
- Click **Update** to save changes.

### Delete a Note

- Click **Delete** on a note to remove it.

### Notifications

- Success or error messages appear for actions like add, update, or delete.

## Project Structure

```
src/
├─ components/
│  ├─ AddTodo.tsx
│  ├─ ListTodos.tsx
│  ├─ UpdateTodoModal.tsx
│  └─ Header.tsx
├─ hooks/
│  └─ useTodos.ts
├─ reducer/
│  └─ todoReducer.ts
├─ types/
│  └─ todo.ts
├─ App.tsx
├─ index.tsx
└─ index.css
```

- `components/` – UI components for adding, listing, and updating notes.
- `hooks/` – Custom `useTodos` hook for state management.
- `reducer/` – Reducer for handling todo actions.
- `types/` – TypeScript type definitions.
- `App.tsx` – Main application layout.
- `index.tsx` – Application entry point.

## Development & Contribution

To contribute:

1. **Fork the repository**
2. **Clone your fork**

    ```bash
    git clone https://github.com/ma3llim/MERN_Stack_Development.git
    cd <your-repo-folder>
    ```

3. **Install dependencies**

    ```bash
    yarn install
    ```

4. **Make your changes** – Add features, fix bugs, improve UI.
5. **Test locally**

    ```bash
    yarn dev
    ```

6. **Commit and push changes**

    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin <branch-name>
    ```

7. **Open a Pull Request**

## Contribution Guidelines

- Write **clean, readable, and commented code**.
- Follow **TypeScript type safety** conventions.
- Test UI components and interactions locally.
- Add **features incrementally** and keep PRs focused.
- Respect **existing code style** and Tailwind utility classes.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React** – UI library
- **TypeScript** – Strong typing
- **Tailwind CSS** – Styling
- **react-toastify** – Toast notifications
- **nanoid** – Unique ID generation
