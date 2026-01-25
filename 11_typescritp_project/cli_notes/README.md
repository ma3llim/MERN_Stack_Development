# CLI Notes App

A **command-line notes management application** that allows users to **add, update, delete, filter, and search notes**. Designed for simplicity, speed, and productivity with a **colorful CLI interface**.

---

## Overview

CLI Notes App is a Node.js-based command-line application to help you **organize your notes efficiently**. Notes are stored locally in a JSON file and can be categorized with **tags, priority, and status**. The app provides an intuitive interface with **tables, colors, and real-time feedback**.

---

## Features

- **Add Notes:** Create notes with title, description, tags, status, and priority.
- **Update Notes:** Modify notes using their unique ID.
- **Delete Notes:** Remove notes permanently by ID.
- **Get Notes:** Fetch all notes or filter by status, priority, or tags.
- **Search Notes:** Search notes by keyword in title or description.
- **Audit Info:** Track created and modified by username.
- **Timestamps:** Record creation, update, and archive times.
- **CLI Table Display:** Notes are displayed in a readable and colored table.

---

## Technologies Used

- **Node.js** – Runtime environment
- **TypeScript** – Type safety and modern JavaScript features
- **Commander.js** – CLI framework
- **chalk** – Colored console output
- **cli-table3** – Table display in the terminal
- **nanoid** – Unique ID generation
- **fs/promises** – File system operations for storing notes

---

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/ma3llim/MERN_Stack_Development.git
    cd MERN_Stack_Development/11_typescritp_project/cli_notes
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

---

## Usage

### Add a Note

```bash
notes add "<title>" "<description>" -t "tag1,tag2" -p <priority> -s <status>
```

- `-t, --tags` → Comma-separated tags
- `-p, --priority` → `low | medium | high` (default: `low`)
- `-s, --status` → `active | archived | completed` (default: `active`)

**Example:**

```bash
notes add "Project Plan" "Finish the initial draft" -t "work,urgent" -p high -s active
```

---

### Update a Note

```bash
notes update <id> --title "<new title>" --description "<new description>" --tags "tag1,tag2" --priority <priority> --status <status>
```

---

### Delete a Note

```bash
notes delete <id>
```

---

### Get Notes

```bash
notes get [options]
```

**Options:**

- `-p, --priority` → Filter by priority
- `-s, --status` → Filter by status
- `-t, --tags` → Filter by tags

---

### Search Notes

```bash
notes search "<keyword>"
```

---

### Help & Options

```bash
notes help
```

---

## Development & Contribution

To contribute, follow these steps:

1. **Fork the repository**
2. **Clone your fork**

    ```bash
    git clone https://github.com/ma3llim/MERN_Stack_Development.git
    cd MERN_Stack_Development/11_typescritp_project/cli_notes
    ```

3. **Install dependencies**

    ```bash
    yarn install
    ```

4. **Make your changes** (add features, fix bugs, improve CLI interface)
5. **Test locally**

    ```bash
    yarn start
    ```

6. **Commit and push**

    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin <branch-name>
    ```

7. **Open a Pull Request**

---

## Contribution Guidelines

- Write **clean, readable, and commented code**.
- Follow **TypeScript type safety** conventions.
- **Test CLI commands** before committing changes.
- Add **features incrementally** and keep PRs focused.
- Respect **existing code style** and use **chalk & cli-table3** for outputs.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Node.js** – Runtime environment
- **TypeScript** – Strong typing
- **Commander.js** – CLI framework
- **chalk** – Console colors
- **cli-table3** – Table rendering
- **nanoid** – Unique ID generation
