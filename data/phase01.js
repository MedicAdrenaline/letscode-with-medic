const phase01 = {
  id: 1,
  label: 'PHASE 01',
  name: 'Setup & How The Web Works',
  tag: 'FOUNDATIONS', tagClass: 'tag-cyan',
  week: '2-3 weeks',
  locked: true,
  tasks: [
    { id: 't1_1', text: 'Install Google Chrome on your laptop — the best browser for web development because of its built-in DevTools for inspecting and debugging.' },
    { id: 't1_2', text: 'Install VS Code (Visual Studio Code) on your laptop — a free code editor by Microsoft. Download from code.visualstudio.com. This is where you will write all your code.' },
    { id: 't1_3', text: 'Create a GitHub account at github.com — use your real name or a professional username. This becomes your developer identity and portfolio on the internet.' },
    { id: 't1_4', text: 'Open VS Code and explore the interface — find the file explorer (left sidebar), the integrated terminal (View → Terminal), and the extensions sidebar. Send a screenshot to your mentor.' },
    { id: 't1_5', text: 'Create your first HTML file — open VS Code, create a file called index.html, type basic HTML tags (html, head, body, h1, p), and open it in Chrome. Watch your code become a webpage.' },
    { id: 't1_6', text: 'Create your first CSS file — create style.css, link it to your index.html using a link tag, and change the background color and font. See the relationship between HTML and CSS in action.' },
    { id: 't1_7', text: 'Understand the Request-Response Cycle: when you type google.com, your browser sends a request to a server → the server sends back HTML/CSS/JS files → your browser renders them as a page.' },
    { id: 't1_8', text: 'Open Chrome DevTools — right-click any webpage and click Inspect. Explore the Elements tab (HTML structure) and the Console tab (JavaScript errors and logs). This is your debugging home.' },
    { id: 't1_9', text: 'Build: A personal webpage with your name, a short bio, and 3 things you like — using only HTML first. Focus on structure, not design.' },
    { id: 't1_10', text: 'Style your personal webpage with CSS — add a background color, change fonts, add spacing and layout. Make it look like something you built.' },
    { id: 't1_11', text: 'Learn the VS Code terminal — open it (Ctrl+` or View → Terminal) and practice: pwd (where am I), ls (list files), cd foldername (enter folder), cd .. (go back).' },
    { id: 't1_12', text: 'Initialize Git in your project folder — open terminal in VS Code, run: git init, git add ., git commit -m "my first website". Your mentor will guide you through this.' },
    { id: 't1_13', text: 'Push your personal webpage to GitHub — your mentor will walk you through creating a repo and pushing your first commit. Your project will live online permanently.' },
  ],
  explanations: [
    {
      label: 'Why Google Chrome for Development?',
      body: 'Chrome has the best built-in DevTools — a set of tools for inspecting HTML/CSS, debugging JavaScript, checking network requests, and testing how your site looks on different screen sizes. Right-click anything on a webpage and click "Inspect" to open them. You will use DevTools every single day as a developer.'
    },
    {
      label: 'What is VS Code?',
      body: 'VS Code (Visual Studio Code) is a free, lightweight code editor made by Microsoft. It gives you syntax highlighting (colors your code by type so it\'s easier to read), IntelliSense (auto-complete suggestions), an integrated terminal, Git support, and thousands of extensions. It is the most popular code editor in the world among web developers.'
    },
    {
      label: 'What is GitHub and Why Does it Matter?',
      body: 'GitHub is an online platform where developers store, share, and collaborate on code. Every project you build lives in a repository (repo) on GitHub. Your GitHub profile becomes your developer portfolio — employers and clients look at it. It also protects your work: even if your laptop dies, your code is safe on GitHub.'
    },
    {
      label: 'The Request-Response Cycle',
      body: 'Every time you visit a website: 1) You type a URL and press Enter. 2) Your browser sends an HTTP request to that website\'s server. 3) The server finds the right files (HTML, CSS, JS) and sends them back as a response. 4) Your browser reads those files and renders the visual page you see. This entire cycle happens in milliseconds. Understanding this is foundational to everything in web development.'
    },
    {
      label: 'HTML Structure Basics',
      body: 'Every HTML file starts with <!DOCTYPE html> then has an <html> tag wrapping everything. Inside: <head> holds invisible info (title, linked CSS files), and <body> holds everything the user sees. Common tags: <h1>-<h6> for headings, <p> for paragraphs, <a> for links, <img> for images, <div> for containers, <button> for buttons. Tags open and close: <p>This is a paragraph</p>.'
    },
    {
      label: 'CSS Basics',
      body: 'CSS targets HTML elements and applies styles. Syntax: selector { property: value; }. Example: p { color: red; font-size: 16px; }. You can target by tag name (p, h1, div), by class (.my-class), or by ID (#my-id). The "cascade" in CSS means styles flow down — a style on a parent element affects its children unless overridden.'
    },
  ],
  quiz: [
    {
      question: 'What is VS Code?',
      options: [
        'A web browser for testing websites',
        'A free code editor where you write your code',
        'A database management tool',
        'A deployment platform like Vercel'
      ],
      answer: 1,
      explanation: 'VS Code (Visual Studio Code) is a free code editor made by Microsoft. It\'s where you write all your code, with features like syntax highlighting, auto-complete, and an integrated terminal.'
    },
    {
      question: 'What happens when you type google.com and press Enter?',
      options: [
        'Google\'s design opens directly from your hard drive',
        'Your browser creates the page using only JavaScript',
        'Your browser sends a request to Google\'s server, which sends back HTML/CSS/JS files that your browser renders',
        'Your internet provider builds the page for you'
      ],
      answer: 2,
      explanation: 'This is the Request-Response Cycle. Your browser sends an HTTP request → the server processes it → the server sends back files → your browser renders them as a visual page.'
    },
    {
      question: 'Where in an HTML file do you put content that users will SEE on the page?',
      options: ['Inside the <head> tag', 'Inside the <html> tag only', 'Inside the <body> tag', 'Inside the <!DOCTYPE> declaration'],
      answer: 2,
      explanation: 'The <body> tag contains everything visible to the user — headings, paragraphs, images, buttons. The <head> holds invisible metadata like the page title and links to CSS files.'
    },
    {
      question: 'What does this CSS do? → h1 { color: blue; }',
      options: [
        'Makes all paragraphs blue',
        'Makes all h1 headings blue',
        'Creates a blue background on the page',
        'Links a blue image to all headings'
      ],
      answer: 1,
      explanation: 'In CSS, the selector (h1) targets which HTML elements to style, and the property:value pair (color: blue) defines what changes. This rule makes every h1 heading on the page blue.'
    },
    {
      question: 'Which Chrome tool lets you inspect a webpage\'s HTML and CSS live?',
      options: ['Chrome Extensions', 'Chrome DevTools (right-click → Inspect)', 'Chrome History', 'Chrome Downloads'],
      answer: 1,
      explanation: 'Chrome DevTools is a set of built-in developer tools. Right-click any element on a page and click Inspect to open them. You can see the HTML structure, modify CSS live, and debug JavaScript.'
    },
    {
      question: 'What does "git commit" do?',
      options: [
        'Pushes your code to GitHub',
        'Deletes old files from your project',
        'Saves a snapshot of your current code changes with a message',
        'Creates a new GitHub repository'
      ],
      answer: 2,
      explanation: 'A git commit saves a snapshot of your code at that point in time with a descriptive message. Think of it like a save point in a game. "git push" is what sends it to GitHub.'
    },
    {
      question: 'How do you link a CSS file called style.css to your HTML file?',
      options: [
        '<css src="style.css">',
        '<link rel="stylesheet" href="style.css"> inside the <head>',
        '<script src="style.css"></script>',
        '<style link="style.css">'
      ],
      answer: 1,
      explanation: 'You link CSS files in the <head> section using a <link> tag. The rel="stylesheet" tells the browser it\'s a CSS file, and href points to the file path.'
    },
  ],
  note: 'Milestone: By the end of Phase 01, your laptop is fully set up, you understand how the web works, and you have a real personal webpage pushed to GitHub. You cannot proceed until you pass the quiz.'
};

export default phase01;
