const phase03 = {
  id: 3,
  label: 'PHASE 03',
  name: 'Real Web Development',
  tag: 'BUILD STUFF', tagClass: 'tag-purple',
  week: '4-6 weeks',
  locked: true,
  tasks: [
    { id: 't3_1', text: 'Learn Git branching — how to create branches, switch between them, and merge changes. This is how teams work on the same project without breaking each other\'s code.' },
    { id: 't3_2', text: 'Learn Responsive Design: making your site look good on mobile, tablet, and desktop. Every modern website must work on all screen sizes.' },
    { id: 't3_3', text: 'Learn CSS Flexbox — the most powerful CSS layout tool for arranging elements in rows and columns. Used in almost every modern website.' },
    { id: 't3_4', text: 'Learn CSS Grid — for more complex two-dimensional layouts (rows AND columns at the same time). Flexbox = 1D, Grid = 2D.' },
    { id: 't3_5', text: 'Learn what React is and why developers use it — the most popular JavaScript library for building user interfaces. Built by Meta. Used by Netflix, Airbnb, and thousands of companies.' },
    { id: 't3_6', text: 'Understand React components — the building blocks of React apps. Each piece of the UI is a reusable component. A button, a card, a navigation bar — all components.' },
    { id: 't3_7', text: 'Join the mentor\'s project team on GitHub and read the codebase. Understand what the project does before touching anything.' },
    { id: 't3_8', text: 'Pick up your first real task from the project board and complete it. Ask questions on WhatsApp.' },
    { id: 't3_9', text: 'Make your first pull request on a real project — submit your changes for review. Revise based on feedback.' },
    { id: 't3_10', text: 'Build: A complete multi-page website for a Nigerian business (real or fictional) — homepage, about page, services, contact form. Deploy it live.' },
    { id: 't3_11', text: 'Add at least 3 projects to your GitHub portfolio with proper README files explaining what each project does.' },
  ],
  explanations: [
    {
      label: 'CSS Flexbox',
      body: 'Flexbox makes it easy to align and distribute elements in a row or column. Apply it to a container: .container { display: flex; }. Key properties: flex-direction (row or column), justify-content (horizontal alignment: center, space-between, flex-start), align-items (vertical alignment: center, flex-start, stretch), gap (space between items). Flexbox solves most layout problems — centering something that used to take 10 lines of CSS now takes 3.'
    },
    {
      label: 'CSS Grid',
      body: 'Grid is for 2D layouts — rows and columns simultaneously. Apply it: .container { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }. 1fr means "1 fraction of available space". So 3 columns of 1fr each = three equal columns. Use repeat(3, 1fr) as shorthand. Grid is perfect for card layouts, dashboards, and any design with rows AND columns.'
    },
    {
      label: 'What is React and Why Use It?',
      body: 'React is a JavaScript library for building UIs. Instead of manually manipulating the DOM (document.getElementById etc.), React lets you describe what the UI should look like and it handles the updates. You build the UI as components — reusable pieces. State management means React automatically re-renders parts of the page when data changes. Result: faster development, more organized code, and apps that update smoothly without full page reloads.'
    },
    {
      label: 'Git Branching for Teams',
      body: 'Branching lets multiple people work on the same project without conflict. The main branch holds the working production code. To add a feature: git checkout -b feature/my-feature (creates and switches to new branch). Make your changes and commits there. When done: open a Pull Request on GitHub. Teammates review it. Once approved, it gets merged into main. Rule: never commit broken code directly to main.'
    },
    {
      label: 'Responsive Design with Media Queries',
      body: 'Media queries let you apply different CSS based on screen size. @media (max-width: 768px) { .sidebar { display: none; } } — this hides the sidebar on screens smaller than 768px (mobile). Common breakpoints: 480px (small phones), 768px (tablets), 1024px (laptops), 1280px+ (desktops). Always design mobile-first — start with the smallest screen and build up.'
    },
  ],
  quiz: [
    {
      question: 'What does display: flex do to a CSS container?',
      options: [
        'Makes the element invisible',
        'Enables Flexbox, allowing children to be laid out in a row or column with easy alignment',
        'Creates a fixed-position element on the screen',
        'Adds an animation to the element'
      ],
      answer: 1,
      explanation: 'display: flex activates Flexbox on a container. Its direct children become flex items that you can align, distribute, and reorder using flex properties like justify-content and align-items.'
    },
    {
      question: 'What is a React component?',
      options: [
        'A CSS class that styles HTML',
        'A JavaScript function that returns HTML-like UI code and can be reused anywhere in your app',
        'A type of database table',
        'A Git branch for new features'
      ],
      answer: 1,
      explanation: 'A React component is a reusable piece of UI written as a JavaScript function. It returns JSX (HTML-like syntax). You build entire apps by composing components together.'
    },
    {
      question: 'What is the purpose of a Git Pull Request?',
      options: [
        'To download code from GitHub to your laptop',
        'To delete a branch that is no longer needed',
        'To submit your code changes for review before merging into the main branch',
        'To create a new repository'
      ],
      answer: 2,
      explanation: 'A Pull Request (PR) is how you propose changes to a codebase. You push your feature branch, open a PR, teammates review your code, and once approved it gets merged into main. It\'s the standard collaboration workflow.'
    },
    {
      question: 'What does this media query do? → @media (max-width: 768px) { .menu { display: none; } }',
      options: [
        'Hides .menu on screens wider than 768px',
        'Makes .menu invisible on all screens',
        'Hides .menu on screens 768px wide or smaller (mobile/tablet)',
        'Creates an animation when the screen resizes'
      ],
      answer: 2,
      explanation: 'max-width: 768px means "apply these styles when the screen is 768px wide or smaller." This is how you hide desktop navigation on mobile and show a mobile menu instead.'
    },
    {
      question: 'What is the difference between Flexbox and Grid?',
      options: [
        'Flexbox is for images, Grid is for text',
        'Flexbox handles layout in one direction (row OR column), Grid handles two dimensions (rows AND columns simultaneously)',
        'Grid is older and less powerful than Flexbox',
        'They do the same thing'
      ],
      answer: 1,
      explanation: 'Flexbox is 1D — great for navigation bars, button groups, or any single-row/column layout. Grid is 2D — perfect for full page layouts, card grids, dashboards where you need control over both rows and columns.'
    },
  ],
  note: 'This is where it gets real. You\'ll work on actual projects and write code that real users will see. The fastest way to learn is by doing. Push through the hard parts — your mentor is on WhatsApp.'
};

export default phase03;
