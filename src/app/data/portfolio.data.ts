import { PortfolioData } from '../models/portfolio.model';

export const portfolioData: PortfolioData = {
  nav: [
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Writing', target: 'writing' },
    { label: 'Contact', target: 'contact' }
  ],
  profile: {
    name: 'Shahir Abdullah',
    role: 'Software Engineer 2',
    location: 'Bangladesh',
    photo: 'images/finalMe.png',
    summary: 'Full-stack software engineer and EdTech co-founder building Angular/.NET products, data-heavy systems, and learning platforms used by 50,000+ learners.',
    links: [
      { label: 'Work', value: 'Nifty Coders Ltd', href: 'https://niftycoders.com/', tone: 'teal' },
      { label: 'Founder', value: 'VocabPractice & GrammarPractice', tone: 'amber' },
      { label: 'Phone', value: '+8801973772561', href: 'tel:+8801973772561', tone: 'blue' },
      { label: 'Email', value: 'shahir2561@gmail.com', href: 'mailto:shahir2561@gmail.com', tone: 'amber' },
      { label: 'LinkedIn', value: 'shahir-abdullah-bin-shahnoor', href: 'https://www.linkedin.com/in/shahir-abdullah-bin-shahnoor/', tone: 'blue' },
      { label: 'GitHub', value: 'Shahir-Abdullah', href: 'https://github.com/Shahir-Abdullah', tone: 'coral' },
      { label: 'Codeforces', value: 'rotator', href: 'https://codeforces.com/profile/rotator', tone: 'teal' }
    ]
  },
  highlights: [
    {
      title: 'Enterprise full-stack engineering',
      eyebrow: 'Nifty Coders',
      description: 'Building Angular and .NET Core applications, REST APIs, data workflows, and analytics platforms for enterprise clients including IQVIA.',
      tags: ['Angular', '.NET Core', 'REST APIs']
    },
    {
      title: 'EdTech founder',
      eyebrow: 'Nour Technologies',
      description: 'Co-founded VocabPractice and GrammarPractice, scaling them to 50,000+ users, 200-300 daily active users, and revenue-generating subscriptions.',
      tags: ['VocabPractice', 'GrammarPractice', 'Payments']
    },
    {
      title: 'Simulation and ML systems',
      eyebrow: 'Applied work',
      description: 'Worked on warehouse simulation, pricing analytics, OCR, CNNs, image processing, and assistive Bangla text-to-speech systems.',
      tags: ['Python', 'Simulation', 'Computer vision']
    }
  ],
  experience: [
    {
      role: 'Software Engineer 2',
      company: 'Nifty Coders Ltd',
      href: 'https://niftycoders.com/',
      period: 'Sep 2022 - Present',
      summary: 'Developing enterprise-scale full-stack applications with C#/.NET Core and Angular, including RESTful APIs, analytics workflows, complex data models, query optimization, caching, asynchronous processing, profiling, and production deployments.',
      tags: ['Angular', '.NET Core', 'REST APIs', 'RxJS', 'Performance']
    },
    {
      role: 'Co-Founder & Lead Frontend Engineer',
      company: 'Nour Technologies',
      href: '#projects',
      period: 'Dec 2022 - Present',
      summary: 'Co-founded and scaled VocabPractice and GrammarPractice to 50,000+ users with 200-300 daily active users and revenue-generating subscriptions. Led Angular frontend engineering, payment integration, deployment automation, and platform operations.',
      tags: ['Founder', 'VocabPractice', 'GrammarPractice', 'Angular', 'DigitalOcean']
    },
    {
      role: 'Assistant Director - Pricing & Analytics',
      company: 'Chaldal',
      href: 'https://chaldal.com/',
      period: 'Sep 2021 - Feb 2022',
      summary: 'Worked with the early engineering team on pricing strategy and operational optimization, building AnyLogic and Python simulation models for warehouse layouts, pick-paths, item-to-bin assignments, SKU packaging, and post-simulation analysis.',
      tags: ['Python', 'AnyLogic', 'Simulation', 'Analytics', 'Operations']
    },
    {
      role: 'Junior Full-Stack Engineer',
      company: 'BiTechX',
      href: 'https://www.bitechx.com/',
      period: 'Dec 2019 - Mar 2020',
      summary: 'Developed Laravel web applications, responsive JavaScript interfaces, MySQL schemas, RESTful APIs, and integration tests with Postman.',
      tags: ['Laravel', 'MySQL', 'JavaScript', 'REST APIs']
    },
    {
      role: 'AI Engineer Trainee',
      company: 'Intelligent Machines Ltd',
      href: '#experience',
      period: 'Jan 2020 - Apr 2020',
      summary: 'Worked on Python-based computer vision and image-processing pipelines, model design, optimization, fine-tuning, and inference-efficiency experiments.',
      tags: ['Python', 'Computer vision', 'Image processing', 'ML']
    }
  ],
  projects: [
    {
      title: 'VocabPractice',
      eyebrow: 'Co-founded EdTech platform',
      description: 'A vocabulary-learning platform scaled through Nour Technologies with flashcards, MCQs, mock exams, progress tracking, subscriptions, and payment integrations.',
      tags: ['Founder', 'Angular', 'Payments']
    },
    {
      title: 'GrammarPractice',
      eyebrow: 'Co-founded EdTech platform',
      description: 'A grammar-practice platform for structured learning, assessments, analytics, and subscription workflows across web and application layers.',
      tags: ['Founder', 'EdTech', 'Angular']
    },
    {
      title: 'App-Based Bangla Book Reader System for the Blind',
      eyebrow: 'Capstone project',
      description: 'An assistive Android system that captures printed Bangla pages, processes them through OCR, recognizes characters with EfficientNet-B0, and converts text to speech for visually impaired users.',
      tags: ['Android', 'OCR', 'OpenCV', 'CNN']
    },
    {
      title: 'Handwritten Geometric Shape Detector',
      eyebrow: 'Machine learning',
      description: 'A Python desktop application that classifies hand-drawn circles, squares, rectangles, and triangles in real time using a CNN trained on 2,000+ images.',
      href: 'https://github.com/Shahir-Abdullah/Handwritten-Geometric-Shape-Detector',
      tags: ['Python', 'CNN', 'Computer vision']
    },
    {
      title: 'Digital Image Processing',
      eyebrow: 'Python library',
      description: 'A modular Python library implementing filters and transformations including convolution, edge detection, smoothing, thresholding, and Jupyter-based examples.',
      href: 'https://github.com/Shahir-Abdullah/Digital-Image-Processing',
      tags: ['Python', 'Image processing', 'Jupyter']
    },
    {
      title: 'E-Waste Management System',
      eyebrow: 'Database systems',
      description: 'A database-driven web system for collection requests, waste categories, logistics, processing centers, CRUD workflows, transactional consistency, and query optimization.',
      tags: ['MySQL', 'Database design', 'Web app']
    }
  ],
  skillGroups: [
    {
      title: 'Languages',
      skills: ['C#', 'TypeScript', 'Python', 'JavaScript', 'SQL', 'Bash']
    },
    {
      title: 'Frameworks',
      skills: ['.NET Core', 'Angular', 'FastAPI', 'Laravel', 'TensorFlow', 'OpenCV']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server']
    },
    {
      title: 'Cloud and DevOps',
      skills: ['DigitalOcean', 'Apache', 'Nginx', 'Docker', 'systemd', 'CI/CD']
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'RxJS', 'SCSS', 'Responsive UI', 'State management']
    },
    {
      title: 'ML and engineering',
      skills: ['CNNs', 'EfficientNet', 'OCR', 'Image processing', 'Distributed systems', 'Async systems', 'SOLID', 'BDD']
    }
  ],
  education: [
    {
      title: 'Military Institute of Science and Technology',
      meta: 'B.Sc. in Computer Science and Engineering, 2017-2021, CGPA 3.21/4.00',
      href: 'http://www.mist.ac.bd/department/cse'
    },
    {
      title: 'Mirzapur Cadet College',
      meta: 'HSC, Science, 2016, GPA 5.00/5.00',
      href: 'http://www.mcc.army.mil.bd/'
    },
    {
      title: 'Mirzapur Cadet College',
      meta: 'SSC, Science, 2014, GPA 5.00/5.00',
      href: 'http://www.mcc.army.mil.bd/'
    }
  ],
  practice: [
    { title: 'rotator', meta: 'Codeforces', href: 'https://codeforces.com/profile/rotator' },
    { title: 'shahir2561', meta: 'HackerRank', href: 'https://www.hackerrank.com/shahir2561' },
    { title: 'shahir2561', meta: 'LeetCode', href: 'https://leetcode.com/shahir2561/' },
    { title: 'rotator', meta: 'CodeChef', href: 'https://www.codechef.com/users/rotator' }
  ],
  certificates: [
    {
      title: 'Python Basic',
      meta: 'HackerRank',
      href: 'https://www.hackerrank.com/certificates/de4d57e229fe'
    },
    {
      title: 'Generative Adversarial Networks (Advanced)',
      meta: 'DeepLearning.AI',
      href: 'https://coursera.org/share/5f5c0f14f8757cbdc57ade14743e4a4d'
    },
    {
      title: 'Generative Adversarial Networks (Basic)',
      meta: 'DeepLearning.AI',
      href: 'https://developers.google.com/chrome-developer-tools/'
    },
    {
      title: 'Fundamentals of Reinforcement Learning',
      meta: 'University of Alberta',
      href: 'https://coursera.org/share/b151e90dbce3b6482c38de8abd2f9a58'
    }
  ],
  activities: [
    { title: 'Vice President', meta: 'MIST Debating Society' },
    { title: 'Campus Ambassador', meta: '10 Minute School Global' }
  ],
  writing: [
    {
      title: 'Perturbation method',
      eyebrow: 'LinkedIn',
      description: 'A simple but powerful tool for solving linear systems.',
      href: 'https://www.linkedin.com/pulse/perturbation-method-simple-yet-powerful-tool-solve-linear-abdullah',
      tags: ['Math', 'Systems']
    },
    {
      title: 'The rise and fall of microfinance',
      eyebrow: 'LinkedIn',
      description: 'A look at promise, incentives, impact, and unintended consequences.',
      href: 'https://www.linkedin.com/pulse/rise-fall-microfinance-shahir-abdullah',
      tags: ['Economics', 'Policy']
    },
    {
      title: 'How can a poor country like Bangladesh achieve rapid growth?',
      eyebrow: 'LinkedIn',
      description: 'Notes on development, institutions, and economic growth.',
      href: 'https://www.linkedin.com/pulse/how-can-poor-country-like-bangladesh-achieve-rapid-growth-abdullah',
      tags: ['Bangladesh', 'Growth']
    },
    {
      title: 'Second-order thinking',
      eyebrow: 'LinkedIn',
      description: 'Examining long-term consequences instead of only first effects.',
      href: 'https://www.linkedin.com/pulse/second-order-thinking-examining-long-term-our-shahir-abdullah',
      tags: ['Thinking', 'Decision making']
    },
    {
      title: 'How emotions play a key role in decision making',
      eyebrow: 'LinkedIn',
      description: 'A short exploration of the somatic marker hypothesis.',
      href: 'https://www.linkedin.com/pulse/somatic-marker-hypothesis-shahir-abdullah',
      tags: ['Psychology', 'Behavior']
    },
    {
      title: 'Building my childhood toy with machine learning',
      eyebrow: 'LinkedIn',
      description: 'How the handwritten geometric shape detector came together.',
      href: 'https://www.linkedin.com/pulse/handwritten-geometric-shape-detector-shahir-abdullah',
      tags: ['ML', 'Project']
    },
    {
      title: 'Collective behavior of simple reflex agents',
      eyebrow: 'LinkedIn',
      description: 'A playful look at agent behavior and emergent patterns.',
      href: 'https://www.linkedin.com/pulse/collective-behavior-simple-reflex-agents-shahir-abdullah',
      tags: ['Agents', 'Simulation']
    },
    {
      title: 'Pareto principle: why the rich get richer',
      eyebrow: 'LinkedIn',
      description: 'A note on compounding, distribution, and cumulative advantage.',
      href: 'https://www.linkedin.com/pulse/why-rich-get-richer-shahir-abdullah',
      tags: ['Economics', 'Power laws']
    }
  ]
};
