const phase04 = {
  id: 4,
  label: 'PHASE 04',
  name: 'Making Money as a Developer',
  tag: 'THE GOAL', tagClass: 'tag-orange',
  week: 'Ongoing',
  locked: true,
  tasks: [
    { id: 't4_1', text: 'Polish your GitHub profile — add a profile README that introduces you, lists your skills, and links to your best projects. This is your developer CV.' },
    { id: 't4_2', text: 'Build and deploy a personal portfolio website — your name, your projects with live links and screenshots, your stack, and a contact section.' },
    { id: 't4_3', text: 'Create a profile on Fiverr — write a gig: "I will build you a professional website for your business." Use your portfolio projects as samples.' },
    { id: 't4_4', text: 'Create a profile on Upwork — fill in every section completely. A complete profile gets 5x more views than an incomplete one.' },
    { id: 't4_5', text: 'Find 1 local business in your area that has no website or a bad one. Research their business, understand what they do.' },
    { id: 't4_6', text: 'Pitch that business — walk in, send a WhatsApp message, or DM them on Instagram. Offer to build their website. Your first client might be someone you already know.' },
    { id: 't4_7', text: 'Learn how to price your work as a Nigerian developer — factor in your skill level, the complexity of the project, local market rates, and your time.' },
    { id: 't4_8', text: 'Deliver your first paid project — even if it\'s small, treat it professionally. Meet the deadline. Communicate clearly. Do quality work.' },
    { id: 't4_9', text: 'Ask your first client for a written testimonial or screenshot review. Social proof is everything when you\'re starting out.' },
    { id: 't4_10', text: 'Set a monthly income target — be specific (e.g. ₦50,000/month in 3 months) and reverse-engineer what it takes: how many projects? At what price?' },
  ],
  explanations: [
    {
      label: 'How to Price Your Work in Nigeria',
      body: 'As a beginner, a simple business website (5 pages, no backend) should be ₦30,000–₦80,000. An e-commerce site with payment integration: ₦80,000–₦200,000+. Factors that raise your price: complexity, timeline, maintenance, customization. Don\'t undersell — cheap work attracts bad clients. As your portfolio grows, raise your rates. Charge in USD on Fiverr/Upwork for international work ($50–$500+ per project).'
    },
    {
      label: 'Building a Portfolio That Gets Clients',
      body: 'Your portfolio should show 3–5 projects, not 10 average ones. For each project: a live link, a screenshot, what problem it solves, what technologies you used, and a GitHub link. Write a clear "About Me" that says who you are, what you build, and who you help. E.g. "I build fast, mobile-friendly websites for Nigerian small businesses." Specificity wins clients.'
    },
    {
      label: 'Finding Your First Clients',
      body: 'You don\'t need Fiverr to land your first client. Start close: friends, family, local businesses, church/mosque, your university community. Look around — restaurants with bad Instagram pages, shops with no website, professionals who rely on WhatsApp for everything. Offer to build for free OR at a heavy discount for your first 1–2 clients in exchange for a testimonial. Use that testimonial everywhere. Your network is your first marketplace.'
    },
    {
      label: 'The Developer Freelance Mindset',
      body: 'You don\'t need to be perfect to start earning. Phase 01 and 02 skills are enough for your first paying client. Start before you feel ready — you will never feel "ready." Treat every project as a learning opportunity. Under-promise and over-deliver. Communicate clearly and on time — most clients leave developers not because of bad code but because of bad communication. Build your reputation from day one.'
    },
  ],
  quiz: [
    {
      question: 'What should a strong developer portfolio include?',
      options: [
        'As many projects as possible, even unfinished ones',
        '3-5 quality projects with live links, descriptions, and the technologies used',
        'Only your GitHub profile link',
        'A list of courses you completed online'
      ],
      answer: 1,
      explanation: 'Quality beats quantity. 3-5 polished projects with live demos, clear descriptions of what they do, and the tech stack used will impress clients far more than 15 half-finished ones.'
    },
    {
      question: 'When should you start looking for your first client?',
      options: [
        'Only after you know React and Node.js',
        'After completing all 5 phases of this bootcamp',
        'As soon as you can build a basic working website — Phase 01-02 skills are enough',
        'After getting a computer science degree'
      ],
      answer: 2,
      explanation: 'You don\'t need advanced skills to land your first client. A simple 5-page business website requires only HTML, CSS, and basic JavaScript. Start before you feel ready.'
    },
    {
      question: 'A local restaurant wants a simple website (5 pages, no backend). What is a fair starting price in Nigeria?',
      options: ['₦5,000 – ₦10,000', '₦30,000 – ₦80,000', '₦500,000+', 'Free always — for experience'],
      answer: 1,
      explanation: 'A simple business website is worth ₦30,000–₦80,000 for a beginner. Don\'t undersell your work — cheap prices attract bad clients and don\'t reflect your actual value. As your skills grow, your rates grow too.'
    },
    {
      question: 'A client leaves a developer not because of bad code but because of what?',
      options: [
        'The developer used the wrong framework',
        'Poor communication — missing deadlines without notice, ignoring messages, unclear updates',
        'The website loaded too slowly',
        'The developer worked too fast'
      ],
      answer: 1,
      explanation: 'Communication is everything in freelancing. Most client relationships break down over missed deadlines, no updates, and unclear expectations — not technical skill. Over-communicate, always.'
    },
    {
      question: 'What is the best way to get your FIRST client as a new developer?',
      options: [
        'Wait until you have 100 GitHub stars',
        'Only apply on Fiverr and Upwork',
        'Start with your immediate network — friends, family, local businesses who know and trust you',
        'Build 20 projects first before approaching anyone'
      ],
      answer: 2,
      explanation: 'Your first client is almost always someone who already knows you — a friend\'s parent with a business, a local shop owner, your church. Leverage your existing relationships. Fiverr and Upwork come after you have a portfolio and testimonials.'
    },
  ],
  note: 'You made it here. Now go make money. Everything in Phases 00-03 was preparation for this. Your skills are real, your portfolio is real, your GitHub is real. The only thing left is to go get paid. Start today.'
};

export default phase04;
