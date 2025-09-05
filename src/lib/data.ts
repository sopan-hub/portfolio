import { Codepen, Database, Briefcase, Bot, Paintbrush, Mic, PenTool, GitFork, Linkedin, Github } from 'lucide-react';

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
    { name: 'SQL', icon: Database },
  ],
  'AI/ML': [
    { name: 'Genkit', icon: Bot },
    { name: 'Gemini', icon: Bot },
  ],
  'Tools': [
    { name: 'Git', icon: GitFork },
    { name: 'Figma', icon: PenTool },
  ],
};

export const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application that solves a modern problem with an elegant solution.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    image: 'https://picsum.photos/400/300',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'web application',
  },
  {
    title: 'AI Assistant Beta',
    description: 'An intelligent AI assistant designed to streamline daily tasks and boost productivity.',
    tech: ['Genkit', 'Gemini', 'React'],
    image: 'https://picsum.photos/400/300?q=2',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'artificial intelligence',
  },
  {
    title: 'Project Gamma',
    description: 'A versatile tool for developers, enhancing workflow and code quality.',
    tech: ['React', 'Node.js', 'SQL'],
    image: 'https://picsum.photos/400/300?q=3',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'developer tool',
  },
  {
    title: 'Other Project Delta',
    description: 'A unique project outside the main categories, showcasing diverse skills.',
    tech: ['Figma', 'React'],
    image: 'https://picsum.photos/400/300?q=4',
    category: 'Other',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'design system',
  },
];

export const achievements = [
  {
    title: 'Certified React Developer',
    year: 2023,
    icon: Codepen,
    description: 'Completed an intensive certification program focusing on advanced React patterns.',
  },
  {
    title: 'AI Innovation Award',
    year: 2024,
    icon: Bot,
    description: 'Recognized for developing a novel AI application with significant real-world impact.',
  },
  {
    title: 'Open Source Contributor',
    year: 'Ongoing',
    icon: GitFork,
    description: 'Active contributor to several popular open-source projects on GitHub.',
  },
];

export const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, Tech Corp',
    quote: "Working with them was a game-changer. Their expertise and dedication are unparalleled. I can't recommend them enough.",
    image: 'https://picsum.photos/100/100?q=5',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'John Smith',
    title: 'Lead Developer, Innovate LLC',
    quote: "An incredibly talented developer who brings not just skill, but also a creative and problem-solving mindset to the table.",
    image: 'https://picsum.photos/100/100?q=6',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Emily White',
    title: 'Project Manager, Solutions Inc.',
    quote: "Their ability to deliver high-quality work on schedule is remarkable. A true professional and a pleasure to work with.",
    image: 'https://picsum.photos/100/100?q=7',
    dataAiHint: 'woman professional',
  },
];
