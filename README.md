# Math Champions Ontario (JK–Grade 4)

A lightweight front-end concept for a competition-based math program aligned with Ontario elementary expectations (Junior Kindergarten to Grade 4).

## Highlights
- Grade-track overview for JK/SK through Grade 4.
- New JK/SK starter course with units and a daily routine.
- Interactive JK/SK practice arena with instant feedback and star scoring.
- Competition arena with round structure and scoring model.
- Interactive sample leaderboard with simulated score updates.
- 12-week season timeline.

## Beginner guide: how to preview this app step-by-step

You do **not** need to be an expert. Just follow these steps in order.

### 1) Install Node.js (one-time setup)
1. Go to: https://nodejs.org
2. Download the **LTS** version.
3. Install it with default options.

### 2) Open a terminal
- **Windows:** open **Command Prompt** or **PowerShell**.
- **Mac:** open **Terminal**.
- **Linux:** open **Terminal**.

### 3) Go to this project folder
If your folder is at `/workspace/yiupeteTest`, run:

```bash
cd /workspace/yiupeteTest
```

### 4) Start the preview server
Run:

```bash
npm run preview
```

If it works, you will see a message like:

```text
Preview server running at http://localhost:4173
```

### 5) Open the app in your browser
Open this URL:

```text
http://localhost:4173
```

### 6) Try the JK/SK course
1. Scroll to **“JK/SK Starter Course (Ready to Try)”**.
2. Pick an activity in **JK/SK Practice Arena**.
3. Enter answers and click **Check Answers**.
4. Use **New Question Set** to keep practicing.

### 7) Stop the server when done
Go back to the terminal and press:

- **Ctrl + C** (Windows/Linux)
- **Control + C** (Mac)

---

## If `npm run preview` does not work
Use Python instead.

### 1) Start Python server

```bash
python3 -m http.server 8000
```

### 2) Open in browser

```text
http://localhost:8000
```

### 3) Stop server
Press **Ctrl + C** in terminal.

---

## Common beginner issues

### "command not found: npm"
Node.js is not installed yet (or terminal needs restart). Install Node LTS and reopen terminal.

### "Address already in use"
That port is busy. Close other running servers or use another port:

```bash
PORT=5000 npm run preview
```

Then open `http://localhost:5000`.

### I double-clicked `index.html` and it looked wrong
That can happen in some environments due to local file restrictions. Use the server steps above for a reliable preview.
