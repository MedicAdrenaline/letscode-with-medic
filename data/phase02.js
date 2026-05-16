const phase02 = {
  id: 2,
  label: 'PHASE 02',
  name: 'Programming Logic with JavaScript',
  tag: 'CORE SKILL', tagClass: 'tag-green',
  week: '3-4 weeks',
  locked: true,
  tasks: [
    { id: 't2_1', text: 'Understand what JavaScript is: It is a programming language that runs inside your browser. HTML builds the structure, CSS styles it, JavaScript makes it alive and interactive.' },
    { id: 't2_2', text: 'Learn Variables — the three ways to declare them: var (old, avoid), let (use for values that change), const (use for values that never change). Variables are named containers that hold data.' },
    { id: 't2_3', text: 'Learn Data Types: string (text in quotes), number (123 or 3.14), boolean (true or false), null (intentionally empty), undefined (not yet assigned), array (list of values), object (key-value pairs).' },
    { id: 't2_4', text: 'Learn Conditions (if/else): Code that makes decisions. "If this is true, do this. Otherwise, do that." The foundation of all logic in programming.' },
    { id: 't2_5', text: 'Learn Loops: for loops and while loops let you repeat an action many times without writing it repeatedly. Loop through a list of items, count up, repeat until a condition is met.' },
    { id: 't2_6', text: 'Learn Functions: A function is a reusable block of code with a name. You define it once, call it many times. Functions can take inputs (parameters) and return outputs.' },
    { id: 't2_7', text: 'Learn Arrays: An ordered list of values stored in one variable. Example: let fruits = ["mango", "banana", "orange"]. You access items by index starting at 0.' },
    { id: 't2_8', text: 'Learn Objects: A collection of key-value pairs. Example: let student = { name: "Dami", age: 20, city: "Lagos" }. Objects represent real-world things with multiple properties.' },
    { id: 't2_9', text: 'Learn DOM Manipulation: The DOM (Document Object Model) is JavaScript\'s view of your HTML page. JS can select HTML elements and change them — update text, change styles, show/hide elements.' },
    { id: 't2_10', text: 'Learn Events: JavaScript listens for things that happen — a click, a keypress, a form submission. You attach event listeners to elements: "when this button is clicked, run this function."' },
    { id: 't2_11', text: 'Build: A simple calculator that does addition, subtraction, multiplication, and division using HTML buttons and JavaScript logic.' },
    { id: 't2_12', text: 'Build: A to-do list app — add tasks, mark them done, delete them. All working in the browser using DOM manipulation.' },
    { id: 't2_13', text: 'Push all your projects to GitHub with clear commit messages describing what you built.' },
  ],
  explanations: [
    {
      label: 'Variables: let, const, var',
      body: 'Variables are named boxes that hold data. Use const for values that never change: const PI = 3.14. Use let for values that will change: let score = 0. Avoid var — it\'s the old way and has confusing rules. Naming: use camelCase (myVariableName), be descriptive (userAge not x), no spaces.'
    },
    {
      label: 'Data Types Explained',
      body: 'String: text in quotes — "Hello" or \'World\'. Number: any number — 42 or 3.14. Boolean: only true or false. Array: an ordered list — [1, 2, 3] or ["a", "b"]. Object: key-value pairs — { name: "Dami", age: 20 }. Null: intentionally empty — let x = null. Undefined: declared but not given a value — let y; (y is undefined). JavaScript figures out the type automatically — it\'s called dynamic typing.'
    },
    {
      label: 'Functions Deep Dive',
      body: 'A function is a reusable block of code. Define it: function greet(name) { return "Hello, " + name; }. Call it: greet("Dami") → returns "Hello, Dami". Parameters are the inputs (name), the return value is the output. Arrow functions are a shorter syntax: const greet = (name) => "Hello, " + name. Functions help you avoid repeating code — if you\'re writing the same thing twice, make it a function.'
    },
    {
      label: 'DOM Manipulation',
      body: 'The DOM (Document Object Model) is how JavaScript sees and controls your HTML page. Key methods: document.getElementById("id") — selects one element by ID. document.querySelector(".class") — selects first matching element. element.textContent = "new text" — changes text. element.style.color = "red" — changes style. element.classList.add("active") — adds a CSS class. element.addEventListener("click", myFunction) — listens for clicks. This is how you make web pages interactive.'
    },
    {
      label: 'if/else and Comparison Operators',
      body: 'if (condition) { // do this } else { // do that }. Comparison operators: === (equal), !== (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal). Logical operators: && (AND — both must be true), || (OR — at least one must be true), ! (NOT — flips true to false). Example: if (age >= 18 && hasID) { allowEntry(); } else { denyEntry(); }'
    },
  ],
  quiz: [
    {
      question: 'Which keyword should you use for a variable whose value will CHANGE over time?',
      options: ['var', 'const', 'let', 'def'],
      answer: 2,
      explanation: 'Use let for variables that will change. Use const for values that never change. Avoid var — it\'s outdated and has confusing scoping rules.'
    },
    {
      question: 'What does this code return? → function add(a, b) { return a + b; } → add(3, 4)',
      options: ['34', '7', 'undefined', 'add(3,4)'],
      answer: 1,
      explanation: 'The function add takes two numbers and returns their sum. add(3, 4) calls the function with 3 and 4 as arguments, so it returns 3 + 4 = 7.'
    },
    {
      question: 'What is the DOM?',
      options: [
        'A type of database',
        'A JavaScript framework',
        'JavaScript\'s representation of the HTML page that it can read and modify',
        'A CSS layout system'
      ],
      answer: 2,
      explanation: 'The DOM (Document Object Model) is how JavaScript sees the HTML page as a tree of objects it can interact with — selecting elements, changing content, adding/removing classes, listening for events.'
    },
    {
      question: 'What does this do? → document.getElementById("title").textContent = "Hello!"',
      options: [
        'Creates a new HTML element called title',
        'Deletes the element with id="title"',
        'Finds the element with id="title" and changes its text to "Hello!"',
        'Logs "Hello!" to the console'
      ],
      answer: 2,
      explanation: 'getElementById selects the HTML element with that ID, and .textContent = "Hello!" sets its visible text content to "Hello!". This is basic DOM manipulation.'
    },
    {
      question: 'What does this loop do? → for (let i = 0; i < 3; i++) { console.log(i); }',
      options: [
        'Prints: 1, 2, 3',
        'Prints: 0, 1, 2',
        'Prints: 0, 1, 2, 3',
        'Runs forever'
      ],
      answer: 1,
      explanation: 'The loop starts at i=0, runs while i < 3, and increments i each time. So it runs for i=0, i=1, i=2 — printing 0, 1, 2. It stops before 3 because the condition is i < 3, not i <= 3.'
    },
    {
      question: 'What is an array?',
      options: [
        'A single value stored in a variable',
        'An ordered list of values stored in one variable',
        'A function that loops through data',
        'A CSS layout technique'
      ],
      answer: 1,
      explanation: 'An array is an ordered list: let colors = ["red", "green", "blue"]. You access items by index: colors[0] is "red", colors[1] is "green". Arrays are essential for working with lists of data.'
    },
    {
      question: 'How do you make something happen when a button is clicked in JavaScript?',
      options: [
        'button.onClick = run()',
        'button.click(myFunction)',
        'button.addEventListener("click", myFunction)',
        'button.trigger("click")'
      ],
      answer: 2,
      explanation: 'addEventListener is the correct way. You select the element, then call .addEventListener("event", functionToRun). "click" is the event name, and myFunction is what runs when it fires.'
    },
  ],
  note: 'This is the hardest phase for most beginners. Frustration is completely normal — it means you\'re actually learning. When you\'re stuck, message your mentor on WhatsApp. Do NOT skip tasks. Build the calculator and to-do list — they will teach you more than reading ever will.'
};

export default phase02;
