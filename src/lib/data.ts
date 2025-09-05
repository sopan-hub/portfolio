import { Codepen, Database, Bot, GitFork, Linkedin, Github, Award, Users, Paintbrush, PenTool } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
];

export const skills = {
  'Frontend': [
    { name: 'React', icon: Codepen },
    { name: 'Next.js', icon: Codepen },
    { name: 'Tailwind CSS', icon: Paintbrush },
    { name: 'TypeScript', icon: Codepen },
  ],
  'Backend': [
    { name: 'Node.js', icon: Database },
    { name: 'Firebase', icon: Database },
    { name: 'Python', icon: Codepen },
    { name: 'Express', icon: Database },
  ],
  'AI/ML': [
    { name: 'Genkit', icon: Bot },
    { name: 'TensorFlow', icon: Bot },
    { name: 'PyTorch', icon: Bot },
    { name: 'Scikit-learn', icon: Bot },
  ],
  'Tools': [
    { name: 'Git', icon: GitFork },
    { name: 'Docker', icon: GitFork },
    { name: 'Figma', icon: PenTool },
    { name: 'Webpack', icon: GitFork },
  ],
};

export const projects = [
  {
    title: 'Course Project Alpha',
    description: 'A web-based platform for visualizing complex sorting algorithms, built for a data structures course.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://picsum.photos/400/300',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'web application',
  },
  {
    title: 'AI Chatbot Beta',
    description: 'A research project exploring natural language understanding with a custom-trained chatbot model.',
    tech: ['Genkit', 'Gemini', 'React'],
    image: 'https://picsum.photos/400/300?q=2',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'artificial intelligence',
  },
  {
    title: 'Hackathon Project Gamma',
    description: 'A mobile-first web app to connect students with local volunteer opportunities, built in a 48-hour hackathon.',
    tech: ['React', 'Firebase', 'Node.js'],
    image: 'https://picsum.photos/400/300?q=3',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'mobile app',
  },
];

export const achievements = [
  {
    title: 'Hackathon Winner',
    year: 2023,
    icon: Award,
    description: 'First place at the university hackathon for creating an innovative solution for campus sustainability.',
  },
  {
    title: 'Dean\'s List',
    year: '2022-2023',
    icon: Award,
    description: 'Achieved academic excellence by maintaining a GPA in the top 10% of the computer science department.',
  },
  {
    title: 'Open Source Contributor',
    year: 'Ongoing',
    icon: GitFork,
    description: 'Active contributor to several popular open-source AI and web development projects on GitHub.',
  },
];

export const testimonials = [
  {
    name: 'Dr. Alan Grant',
    title: 'Professor of AI',
    quote: "Sopan is one of the brightest students I've had the pleasure of teaching. Their grasp of complex AI concepts is truly impressive.",
    image: 'https://picsum.photos/100/100?q=5',
    dataAiHint: 'man professor',
  },
  {
    name: 'Ellie Sattler',
    title: 'Group Project Lead',
    quote: "An incredibly dedicated teammate. Sopan's problem-solving skills were crucial to our project's success. Always willing to help.",
    image: 'https://picsum.photos/100/100?q=6',
    dataAiHint: 'woman student',
  },
  {
    name: 'Ian Malcolm',
    title: 'Hackathon Judge',
    quote: "Their project was a standout. The technical implementation was solid, and the presentation was clear and compelling. A well-deserved win.",
    image: 'https://picsum.photos/100/100?q=7',
    dataAiHint: 'man professional',
  },
];
