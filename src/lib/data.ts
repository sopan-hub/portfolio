import { Github, Linkedin } from 'lucide-react';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { href: 'https://github.com/sopan-hub', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/sopan-patil-24b2a1380',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export const skills = {
  'Frontend': [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'TypeScript', level: 90 },
  ],
  'Backend': [
    { name: 'Node.js', level: 85 },
    { name: 'Firebase', level: 80 },
    { name: 'Python', level: 95 },
    { name: 'Express', level: 75 },
  ],
  'AI/ML': [
    { name: 'Genkit', level: 80 },
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 75 },
    { name: 'Scikit-learn', level: 90 },
  ],
  'Tools': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Figma', level: 65 },
    { name: 'Webpack', level: 70 },
  ],
};

export const projects = [
  {
    title: 'AI Chatbot Beta',
    description:
      'A research project exploring natural language understanding with a custom-trained chatbot model.',
    tech: ['Genkit', 'Gemini', 'React'],
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/b1d7b7cf58c5f0bd3e71cf0a53fbc6c2601b51ea/the%20ai%20chat%20bot.png',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'artificial intelligence',
  },
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/b1d7b7cf58c5f0bd3e71cf0a53fbc6c2601b51ea/fsscscs.png',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'online store',
  },
  {
    title: 'Image Recognition API',
    description:
      'A deep learning model trained to identify objects in images, exposed via a REST API.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/b1d7b7cf58c5f0bd3e71cf0a53fbc6c2601b51ea/unnamed%20(1).png',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://github.com',
    dataAiHint: 'machine learning',
  },
];

export const achievements = [
  {
    title: 'Software Engineering Job Simulation – Forage',
    year: '2024',
    description:
      'Successfully completed the Software Engineering Job Simulation on Forage, gaining hands-on experience in project scoping, agile methodologies, API integration, and REST API controllers.',
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/certificste.png',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation – Forage',
    year: '2024',
    description:
      'Completed the GenAI Powered Data Analytics Job Simulation on Forage, developing skills in exploratory data analysis, risk profiling, business report writing, and implementing AI-driven collection strategies.',
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/efewfwe.png',
  },
  {
    title: 'GenAI Job Simulation – BCG X (via Forage)',
    year: '2023',
    description:
      'Successfully completed the GenAI Job Simulation with BCG X on Forage, focusing on data extraction, AI-based data analysis, and developing an AI-powered financial chatbot.',
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/fwefwe.png',
  },
  {
    title: 'Data Analytics Job Simulation – Deloitte (via Forage)',
    year: '2023',
    description:
      'Completed the Deloitte Data Analytics Job Simulation on Forage, gaining practical knowledge in data analysis and forensic technology applications.',
    image:
      'https://raw.githubusercontent.com/sopan-hub/my-image-assets/a505d28ffcda90ceb7b2570a6ecefd8e62851624/wfwefw.png',
  },
];
