import { Codepen, Database, Bot, GitFork, Linkedin, Github, Award, Users, Paintbrush, PenTool, Trophy, Star } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { href: 'https://github.com/sopan-hub', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sopan-patil-24b2a1380', icon: Linkedin, label: 'LinkedIn' },
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
    title: 'Tata Power Skill Development Institute',
    year: '2024',
    icon: Award,
    description: 'Successfully completed the Power Plant Familiarization course, gaining comprehensive knowledge of power generation and plant operations.',
    image: 'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/certificste.png'
  },
  {
    title: 'Cisco Networking Academy',
    year: '2023',
    icon: Trophy,
    description: 'Earned a certificate for completing the Introduction to Cybersecurity, covering the fundamentals of online safety and digital threats.',
    image: 'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/efewfwe.png'
  },
  {
    title: 'Google Crowdsource',
    year: '2023',
    icon: Star,
    description: 'Received a Certificate of Appreciation for valuable contributions to the Google Crowdsource community, helping improve Google services.',
    image: 'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/fwefwe.png'
  },
  {
    title: 'Internshala',
    year: '2023',
    icon: Award,
    description: 'Awarded a Certificate of Training for successfully completing the Web Development course, mastering modern web technologies.',
    image: 'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/wfwefw.png'
  },
];
