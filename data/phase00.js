const phase00 = {
  id: 0,
  label: 'PHASE 00',
  name: 'Mindset & Orientation',
  tag: 'START HERE', tagClass: 'tag-orange',
  week: '2 weeks',
  locked: false,
  tasks: [
    { id: 't0_1', text: 'Understand what coding is: Writing instructions in a language a computer can understand. Every app, website, and software you use was built by someone writing code.' },
    { id: 't0_2', text: 'Learn what a Programming Language is: Just like English or Yoruba, programming languages have rules and vocabulary. Examples: HTML, CSS, JavaScript, Python. Each language has a purpose.' },
    { id: 't0_3', text: 'Understand HTML: HyperText Markup Language. It is the skeleton of every webpage. It tells the browser what to display — headings, images, buttons. It is a markup language, not a programming language.' },
    { id: 't0_4', text: 'Understand CSS: Cascading Style Sheets. It is the design layer. It takes your HTML skeleton and adds color, fonts, spacing, and animations. Without CSS, every website looks like a plain document.' },
    { id: 't0_5', text: 'Understand JavaScript: The brain of a website. It makes things interactive — when you click a button and something happens, that is JavaScript. It is a real programming language that runs inside your browser.' },
    { id: 't0_6', text: 'Understand Python: A popular general-purpose programming language used for AI, data science, automation, and backend web development. It works behind the scenes — not used for website visuals.' },
    { id: 't0_7', text: 'Understand Frontend: Everything the user sees and touches — design, buttons, forms, animations. Built with HTML, CSS, and JavaScript. If it shows on screen, it is frontend.' },
    { id: 't0_8', text: 'Understand Backend: The engine behind the scenes — the database, business logic, and server. Built with Python, Node.js, PHP, etc. Users never see it but everything depends on it.' },
    { id: 't0_9', text: 'Understand Full-Stack: A developer who can build both frontend AND backend is Full-Stack. They can build an entire product alone. This is the goal of this bootcamp.' },
    { id: 't0_10', text: 'Understand what a Framework is: A pre-built set of tools that speeds up development. React is a JS framework for building UIs. Flask and Django are Python frameworks for backends. You learn the base language first, then frameworks.' },
    { id: 't0_11', text: 'Understand what a Library is: Smaller than a framework. A library gives you ready-made code for specific tasks. Think of it as: framework = full kitchen setup, library = one good knife.' },
    { id: 't0_12', text: 'Understand what a Database is: A database stores data permanently. When you register on a website, your details go into a database. Common types: MySQL (table-based like Excel), MongoDB (document-based like JSON).' },
    { id: 't0_13', text: 'Understand what an API is: Application Programming Interface — a bridge between two systems. When a weather app shows today\'s temperature, it fetched that from a weather API. You will build and consume APIs as a developer.' },
    { id: 't0_14', text: 'Understand Deployment: When you finish building locally, your site only exists on your laptop. Deployment means pushing it live to the internet so anyone can visit it. Platforms like Vercel, Render, and Netlify do this for free.' },
    { id: 't0_15', text: 'Understand what a Server is: A server is a computer that is always on and connected to the internet. When someone visits your website, their browser sends a request to your server, and the server sends back the webpage.' },
    { id: 't0_16', text: 'Understand what a Domain is: A domain is a website\'s address — like google.com or yourname.dev. You buy it from registrars like Namecheap. Without a domain, your site has a long default URL. With one, it looks professional.' },
    { id: 't0_17', text: 'Understand Version Control & Git: Git tracks every change you make to your code. If you break something, you can go back. GitHub is an online platform where you store and share your code. Every developer uses it daily.' },
    { id: 't0_18', text: 'Understand what a Repository (Repo) is: A repository is a project folder tracked by Git. It holds all your files and the full history of every change ever made. Each project = one repo.' },
    { id: 't0_19', text: 'Understand the Stack: The "stack" is the combination of technologies used to build a product. Example: HTML + CSS + JavaScript (frontend) + Python Flask (backend) + MySQL (database) = a full stack.' },
    { id: 't0_20', text: 'Understand the Terminal: A text-based interface to control your computer by typing commands instead of clicking. Every developer uses the terminal daily. It sounds scary — you will get used to it fast.' },
    { id: 't0_21', text: 'Write honestly: Why do I want to learn coding? What do I want to build or earn in 2 years? Keep this somewhere you can read it on hard days.' },
  ],
  explanations: [
    {
      label: 'What is Coding?',
      body: 'Coding is writing instructions that tell a computer what to do. These instructions are written in a programming language — a structured set of words and rules the computer understands. Everything digital you use was built by someone writing code: apps, websites, games, banking systems, hospital software. All of it.'
    },
    {
      label: 'Frontend vs Backend vs Full-Stack',
      body: 'Frontend is what users see and interact with — the design, layout, buttons, and animations. Built with HTML (structure), CSS (design), and JavaScript (interactivity). Backend is the server side — it handles logic, databases, authentication, and security. Built with Python, Node.js, PHP, etc. Full-Stack means you can do both. A full-stack developer can build an entire product from scratch, alone.'
    },
    {
      label: 'The Stack Explained',
      body: 'HTML: page structure. CSS: visual styling. JavaScript: interactivity in the browser. Python: backend logic and data processing. React: a JavaScript framework for building complex UIs. Flask/Django: Python frameworks for building web backends. MySQL/MongoDB: databases for storing data. API: a bridge between systems. Git: tracks code changes. GitHub: hosts your code online. Deployment: making your site live. Server: a computer serving your website. Domain: your site\'s address (e.g. mysite.com).'
    },
    {
      label: 'How the Internet Works (Simplified)',
      body: 'When you type google.com and press Enter: 1) Your browser looks up the IP address of google.com using DNS (like a phonebook for the internet). 2) Your browser sends an HTTP request to Google\'s server. 3) Google\'s server processes the request and sends back HTML, CSS, and JavaScript files. 4) Your browser reads those files and renders the page visually. This entire process happens in milliseconds, every single time you visit a website.'
    },
  ],
  quiz: [
    {
      question: 'What language gives a webpage its STRUCTURE — headings, paragraphs, images?',
      options: ['CSS', 'JavaScript', 'HTML', 'Python'],
      answer: 2,
      explanation: 'HTML (HyperText Markup Language) is the skeleton of every webpage. It defines what content is on the page and where it goes.'
    },
    {
      question: 'What does CSS do?',
      options: [
        'Stores data in a database',
        'Makes pages interactive with logic',
        'Handles server requests',
        'Controls the visual design — colors, fonts, spacing'
      ],
      answer: 3,
      explanation: 'CSS (Cascading Style Sheets) is the design layer. It takes your HTML structure and makes it look beautiful.'
    },
    {
      question: 'A developer who can build both frontend AND backend is called a...',
      options: ['Backend Developer', 'Full-Stack Developer', 'DevOps Engineer', 'UI Designer'],
      answer: 1,
      explanation: 'A Full-Stack Developer can handle the entire product — from the visual interface users see to the server and database behind the scenes.'
    },
    {
      question: 'What is an API?',
      options: [
        'A type of database',
        'A bridge that lets two systems communicate and share data',
        'A code editor',
        'A deployment platform'
      ],
      answer: 1,
      explanation: 'API stands for Application Programming Interface. It\'s how systems talk to each other — like when a weather app fetches temperature data from a weather service.'
    },
    {
      question: 'What does "deployment" mean?',
      options: [
        'Writing code on your laptop',
        'Designing the UI of a website',
        'Pushing your finished project live to the internet',
        'Saving your code to GitHub'
      ],
      answer: 2,
      explanation: 'Deployment means taking your project from your local machine and making it live on the internet so anyone in the world can access it.'
    },
    {
      question: 'What is Git used for?',
      options: [
        'Styling web pages',
        'Hosting websites online',
        'Running JavaScript in the browser',
        'Tracking every change you make to your code over time'
      ],
      answer: 3,
      explanation: 'Git is a version control system. It records every change you make so you can go back to any previous version. GitHub is where you store and share your Git repos online.'
    },
    {
      question: 'What is the "backend" of a web application?',
      options: [
        'The buttons and visual design the user sees',
        'The server, database, and logic that powers the app behind the scenes',
        'The CSS file that styles the page',
        'The browser that displays the webpage'
      ],
      answer: 1,
      explanation: 'The backend is everything the user doesn\'t see — the server that handles requests, the database that stores data, and the logic that makes the app work.'
    },
    {
      question: 'Which of these is a Python web framework used for building backends?',
      options: ['React', 'Tailwind', 'Flask', 'VS Code'],
      answer: 2,
      explanation: 'Flask is a lightweight Python framework for building web backends. Django is another popular one. React on the other hand is a JavaScript framework for frontends.'
    },
  ],
  note: 'No laptop or tools needed yet. This phase is pure understanding. Read every task slowly. Your job is to walk into Phase 01 knowing what all the key words mean. Ask your mentor anything on WhatsApp.'
};

export default phase00;
