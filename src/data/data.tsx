import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nawaf Alshuraim',
  description: 'Portfolio of Nawaf Alshuraim — Software Engineering student at KFUPM, Mobile App Developer, and AI/ML enthusiast.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nawaf Alshuraim`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineering student</strong> with concentration in{' '}
        <strong className="text-stone-100">Decision Analytics</strong> at{' '}
        <strong className="text-stone-100">KFUPM</strong>, I build cross-platform {' '}
        mobile applications using Flutter and develop hybrid Intelligent Decision Support Systems (IDSS) that combine data-driven AI with knowledge-based reasoning.{' '}
        Also, I developed some leadership and management skills as a Head Barista, where I led teams and maintained proper standards in a fast-paced environment.
  
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Beyond that, you can find me lifting weights. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Software Engineering student at KFUPM with a concentration in Decision Analytics. I build cross-platform mobile apps with Flutter and develop intelligent systems using deep learning, computer vision, and LLMs. I enjoy working on problems that sit at the intersection of human health, decision science, and real-time AI.`,
  aboutItems: [
    { label: 'Location', text: 'Riyadh, Saudi Arabia', Icon: MapIcon },
    { label: 'Nationality', text: 'Saudi', Icon: FlagIcon },
    { label: 'Interests', text: 'IDSS, Weight Lifting & Calibrating Espresso', Icon: SparklesIcon },
    { label: 'Study', text: 'KFUPM', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Open to opportunities', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile & cross-platform development',
    skills: [
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Dart',
        level: 9,
      },
      {
        name: 'Firebase',
        level: 8,
      },
    ],
  },
  {
    name: 'AI & machine learning',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PyTorch / TensorFlow / Keras',
        level: 7,
      },
      {
        name: 'LangChain & LLMs',
        level: 7,
      },
    ],
  },
  {
    name: 'Data & systems',
    skills: [
      {
        name: 'Scikit-Learn',
        level: 7,
      },
      {
        name: 'Apache Spark / PySpark',
        level: 6,
      },
      {
        name: 'Vector Databases',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Dorsal Vein Detection System',
    description:
      'A computer vision pipeline for detecting and segmenting dorsal hand veins from NIR images using image processing techniques.',
    url: 'https://github.com/nawafalshuraim/Dorsal_Vein_Detection_System',
    image: porfolioImage1,
  },
  {
    title: 'LeanFix',
    description:
      'Cross-platform maintenance marketplace (Flutter mobile + Web admin) covering 5+ on-demand service categories, built with Firebase Auth, Firestore, Google Maps autofill, GetX state management, and a role-based admin panel.',
    url: 'https://github.com/nawafalshuraim/leanfix-user',
    image: porfolioImage2,
  },
];

/**
* Education
*  */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2021 – Present',
    location: 'King Fahd University of Petroleum and Minerals (KFUPM), Dhahran',
    title: 'B.Sc. Software Engineering (Honors)',
    content: (
      <p>
        Concentration in Decision Analytics (Aug 2025 – Present). 
      </p>
    ),
  },
  {
    date: 'Dec 2025 – Apr 2026',
    location: 'Coursera / IBM',
    title: 'IBM AI Engineering Professional Certificate',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Machine Learning with Python</li>
        <li>Introduction to Deep Learning & Neural Networks with Keras</li>
        <li>Deep Learning with Keras and TensorFlow</li>
        <li>Introduction to Neural Networks and PyTorch</li>
        <li>Deep Learning with PyTorch</li>
        <li>AI Capstone Project with Deep Learning</li>
        <li>Generative AI and LLMs: Architecture and Data Preparation</li>
        <li>Gen AI Foundational Models for NLP & Language Understanding</li>
        <li>Generative AI Language Modeling with Transformers</li>
        <li>Generative AI Engineering and Fine-Tuning Transformers</li>
        <li>Generative AI Advance Fine-Tuning for LLMs</li>
        <li>Fundamentals of AI Agents Using RAG and LangChain</li>
        <li>Project: Generative AI Applications with RAG and LangChain</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2025 – Aug 2025',
    location: 'Cloud Solutions, Riyadh',
    title: 'Mobile App Developer',
    content: (
      <p>
        Built and maintained an internal maintenance management app (Flutter mobile + Web admin panel) in collaboration
        with the VIDA healthcare platform for Dr. Sulaiman Al-Habib Hospital, gaining exposure to enterprise-scale cloud
        architecture and systems serving 7M+ patient records. Resolved production integration issues across Firebase
        Auth, Storage, and cross-platform handling; shipped real-time search, Google Maps autofill, and a role-based
        admin panel.
      </p>
    ),
  },
  {
    date: 'June 2021 – July 2021',
    location: 'Jathel Cafe, Riyadh',
    title: 'Head Barista',
    content: (
      <p>
        Calibrated espresso machines and evaluated roast profiles daily to maintain consistent quality standards.
        Managed inventory and supplier coordination; supervised bar operations during peak hours.
      </p>
    ),
  },
  {
    date: 'Dec 2020 – May 2021',
    location: 'Jathel Cafe, Riyadh',
    title: 'Barista',
    content: <p>Specialized latte artist.</p>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'alshuraim20@gmail.com',
      href: 'mailto:alshuraim20@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'nawafalshuraim',
      href: 'https://github.com/nawafalshuraim',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/nawafalshuraim' },
];
