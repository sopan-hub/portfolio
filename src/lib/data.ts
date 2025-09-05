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
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    image: 'https://picsum.photos/400/300?q=4',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'online store',
  },
  {
    title: 'Image Recognition API',
    description: 'A deep learning model trained to identify objects in images, exposed via a REST API.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    image: 'https://picsum.photos/400/300?q=5',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'machine learning',
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
