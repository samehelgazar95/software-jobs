export const categories = [
  {
    category: 'Software Development',
    roles: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Mobile App Developer',
      'Desktop Application Developer',
      'Web Developer',
      'DevOps Engineer',
      'Software Engineer',
      'Embedded Systems Developer',
      'Firmware Developer',
    ],
  },
  {
    category: 'Database',
    roles: [
      'Database Administrator (DBA)',
      'Data Analyst',
      'Data Architect',
      'Big Data Engineer',
    ],
  },
  {
    category: 'UI/UX & Design',
    roles: [
      'UI/UX Designer',
      'UI Developer',
      'UX Researcher',
      'Interaction Designer',
    ],
  },
  {
    category: 'Testing & QA',
    roles: [
      'QA Engineer',
      'Test Automation Engineer',
      'Manual Tester',
      'Performance Tester',
      'Security Tester',
    ],
  },
  {
    category: 'Software Management & Architecture',
    roles: [
      'Software Architect',
      'Technical Lead',
      'Product Manager',
      'Project Manager',
      'Scrum Master',
    ],
  },
  {
    category: 'Specialized Software',
    roles: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Artificial Intelligence Engineer',
      'Data Engineer',
      'Cloud Engineer',
      'Blockchain Developer',
      'Computer Vision Engineer',
      'AR/VR Developer',
      'Game Developer',
    ],
  },
  {
    category: 'System & Network',
    roles: [
      'System Administrator',
      'Network Engineer',
      'Site Reliability Engineer (SRE)',
      'IT Support Specialist',
    ],
  },
  {
    category: 'Cybersecurity',
    roles: [
      'Cybersecurity Analyst',
      'Security Engineer',
      'Penetration Tester',
      'Network Security Engineer',
      'Incident Response Analyst',
    ],
  },

  {
    category: 'Emerging Tech',
    roles: [
      'IoT Developer',
      'Quantum Computing Developer',
      'Robotics Engineer',
    ],
  },
  {
    category: 'Other Tech',
    roles: [
      'Technical Writer',
      'API Developer',
      'Research and Development (R&D) Engineer',
      'IT Consultant',
    ],
  },
];

export const jobs = [
  {
    id: 0,
    createdAt: '2024-8-15',
    companyName: 'CodeWithUs',
    location: { city: 'Shebin', country: 'Egypt' },
    title: 'Frontend Developer',
    workMode: 'On-site',
    level: 'Junior',
    experience: { min: 2, max: 3 },
    averageSalary: 10000,
    currency: 'EGP',
    jobType: 'Full-time',
    industry: 'IT & Software Development',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, recusandae totam tempora accusamus nam ipsum, numquam obcaecati nostrum laboriosam architecto accusantium. Possimus itaque sunt eaque voluptas minima quis unde eum?',
    technicalQualifications: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Git',
      'Github',
    ],
    bookmarked: true,
    applied: true,
    available: false,
    applyLink: 'https://apply.codewithus.com',
  },
  {
    id: 1,
    createdAt: '2024-8-01',
    companyName: 'Techify Solutions',
    location: { city: 'Dubai', country: 'UAE' },
    workMode: 'Remote',
    title: 'Backend Developer',
    level: 'Mid',
    experience: { min: 3, max: 5 },
    averageSalary: 15000,
    currency: 'AED',
    jobType: 'Part-time',
    industry: 'IT & Software Development',
    description:
      'Backend Developer needed with experience in Node.js, Express, and MongoDB. Must be familiar with REST APIs and server-side architecture.',
    technicalQualifications: [
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'Git',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://careers.techify.com',
  },
  {
    id: 2,
    createdAt: '2024-9-1',
    companyName: 'InnoVatech',
    location: { city: 'Berlin', country: 'Germany' },
    workMode: 'On-site',
    title: 'Full Stack Developer',
    level: 'Senior',
    experience: { min: 5, max: 8 },
    averageSalary: 70000,
    currency: 'EUR',
    jobType: 'Full-time',
    industry: 'Web Development',
    description:
      'Looking for a Full Stack Developer proficient in React, Node.js, and AWS. Must have strong experience in microservices and cloud architecture.',
    technicalQualifications: [
      'React',
      'Node.js',
      'AWS',
      'Docker',
      'Microservices',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://innovatech.jobs/apply',
  },
  {
    id: 3,
    createdAt: '2024-07-30',
    companyName: 'HealthTech Inc.',
    location: { city: 'New York', country: 'USA' },
    workMode: 'On-site',
    title: 'Data Scientist',
    level: 'Mid',
    experience: { min: 3, max: 5 },
    averageSalary: 95000,
    currency: 'USD',
    jobType: 'Full-time',
    industry: 'Healthcare & AI',
    description:
      'Data Scientist required with expertise in Python, machine learning algorithms, and data visualization tools. Experience in healthcare data is a plus.',
    technicalQualifications: [
      'Python',
      'Machine Learning',
      'Pandas',
      'SciKit-Learn',
      'Tableau',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://healthtech.jobs/apply',
  },
  {
    id: 4,
    createdAt: '2024-08-25',
    companyName: 'EduPro Networks',
    location: { city: 'London', country: 'UK' },
    workMode: 'Remote',
    title: 'DevOps Engineer',
    level: 'Senior',
    experience: { min: 6, max: 10 },
    averageSalary: 80000,
    currency: 'GBP',
    jobType: 'Contract',
    industry: 'EdTech & Cloud Computing',
    description:
      'DevOps Engineer needed with experience in AWS, Kubernetes, Terraform, and CI/CD pipelines. Experience with infrastructure automation is essential.',
    technicalQualifications: [
      'AWS',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'Jenkins',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://edupro.networks/careers',
  },
  {
    id: 5,
    createdAt: '2024-9-1',
    companyName: 'SoftSolutions',
    location: { city: 'Tokyo', country: 'Japan' },
    workMode: 'On-site',
    title: 'UI/UX Designer',
    level: 'Junior',
    experience: { min: 1, max: 3 },
    averageSalary: 4500000,
    currency: 'JPY',
    jobType: 'Full-time',
    industry: 'Design & User Experience',
    description:
      'UI/UX Designer needed to create user-centered designs by understanding business requirements, and user feedback, and optimizing UI elements for usability.',
    technicalQualifications: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'User Research',
      'Wireframing',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://softsolutions.jobs/apply',
  },
  {
    id: 6,
    createdAt: '2024-8-30',
    companyName: 'AI Works',
    location: { city: 'San Francisco', country: 'USA' },
    workMode: 'Remote',
    title: 'Machine Learning Engineer',
    level: 'Senior',
    experience: { min: 5, max: 7 },
    averageSalary: 135000,
    currency: 'USD',
    jobType: 'Full-time',
    industry: 'Artificial Intelligence',
    description:
      'Seeking a Machine Learning Engineer with strong experience in TensorFlow, Keras, PyTorch, and deep learning models. Experience in NLP and reinforcement learning is a plus.',
    technicalQualifications: [
      'TensorFlow',
      'Keras',
      'PyTorch',
      'NLP',
      'Reinforcement Learning',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://aiworks.com/careers',
  },
  {
    id: 7,
    createdAt: '2024-8-10',
    companyName: 'SecureTech',
    location: { city: 'Paris', country: 'France' },
    workMode: 'On-site',
    title: 'Cybersecurity Analyst',
    level: 'Mid',
    experience: { min: 3, max: 5 },
    averageSalary: 60000,
    currency: 'EUR',
    jobType: 'Full-time',
    industry: 'Cybersecurity',
    description:
      'We are looking for a Cybersecurity Analyst with experience in threat detection, penetration testing, and risk assessment. Familiarity with security protocols and compliance is required.',
    technicalQualifications: [
      'Penetration Testing',
      'Risk Assessment',
      'SIEM',
      'Firewalls',
      'ISO 27001',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://securetech.com/apply',
  },
  {
    id: 8,
    createdAt: '2024-08-01',
    companyName: 'GreenTech Solutions',
    location: { city: 'Toronto', country: 'Canada' },
    workMode: 'On-site',
    title: 'Software Tester',
    level: 'Junior',
    experience: { min: 1, max: 2 },
    averageSalary: 50000,
    currency: 'CAD',
    jobType: 'Full-time',
    industry: 'Quality Assurance',
    description:
      'Software Tester needed to perform manual and automated testing of software applications. Knowledge of Selenium and JIRA is a plus.',
    technicalQualifications: [
      'Manual Testing',
      'Automated Testing',
      'Selenium',
      'JIRA',
      'TestRail',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://greentech.jobs/apply',
  },
  {
    id: 9,
    createdAt: '2024-9-05',
    companyName: 'DataMinds',
    location: { city: 'Mumbai', country: 'India' },
    workMode: 'Remote',
    title: 'Data Engineer',
    level: 'Mid',
    experience: { min: 4, max: 6 },
    averageSalary: 1500000,
    currency: 'INR',
    jobType: 'Full-time',
    industry: 'Data Engineering',
    description:
      'Looking for a Data Engineer experienced in Hadoop, Spark, Kafka, and data warehousing. Must have strong SQL skills and experience with ETL pipelines.',
    technicalQualifications: ['Hadoop', 'Spark', 'Kafka', 'SQL', 'ETL'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://dataminds.com/careers',
  },
  {
    id: 10,
    createdAt: '2024-08-15',
    companyName: 'EcomWorld',
    location: { city: 'Sydney', country: 'Australia' },
    workMode: 'On-site',
    title: 'Product Manager',
    level: 'Senior',
    experience: { min: 5, max: 7 },
    averageSalary: 120000,
    currency: 'AUD',
    jobType: 'Full-time',
    industry: 'E-Commerce',
    description:
      'Product Manager needed to lead a team of developers and designers to deliver high-quality e-commerce solutions. Experience in agile methodologies is required.',
    technicalQualifications: [
      'Product Management',
      'Agile',
      'Scrum',
      'UX/UI Design',
      'JIRA',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://ecomworld.jobs/apply',
  },
  {
    id: 11,
    createdAt: '2024-8-15',
    companyName: 'Appify',
    location: { city: 'San Francisco', country: 'USA' },
    workMode: 'Remote',
    title: 'Mobile Developer',
    level: 'Junior',
    experience: { min: 1, max: 2 },
    averageSalary: 80000,
    currency: 'USD',
    jobType: 'Full-time',
    industry: 'Mobile Development',
    description: 'Mobile Developer with experience in React Native needed.',
    technicalQualifications: ['React Native', 'JavaScript', 'Swift', 'Kotlin'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://appify.jobs/apply',
  },
  {
    id: 12,
    createdAt: '2024-09-01',
    companyName: 'Innovate Labs',
    location: { city: 'Boston', country: 'USA' },
    workMode: 'Hybrid',
    title: 'Data Analyst',
    level: 'Mid',
    experience: { min: 2, max: 4 },
    averageSalary: 70000,
    currency: 'USD',
    jobType: 'Full-time',
    industry: 'Data Science',
    description: 'Data Analyst required with expertise in SQL and Python.',
    technicalQualifications: ['SQL', 'Python', 'Data Visualization'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://innovatelabs.com/careers',
  },
  {
    id: 13,
    createdAt: '2024-9-10',
    companyName: 'Creative Minds',
    location: { city: 'Vancouver', country: 'Canada' },
    workMode: 'On-site',
    title: 'Graphic Designer',
    level: 'Junior',
    experience: { min: 1, max: 3 },
    averageSalary: 50000,
    currency: 'CAD',
    jobType: 'Part-time',
    industry: 'Design',
    description: 'Graphic Designer with skills in Adobe Creative Suite needed.',
    technicalQualifications: ['Adobe Photoshop', 'Illustrator', 'InDesign'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://creativeminds.com/apply',
  },
  {
    id: 14,
    createdAt: '2024-08-20',
    companyName: 'CodeSmith',
    location: { city: 'Berlin', country: 'Germany' },
    workMode: 'Remote',
    title: 'DevOps Engineer',
    level: 'Senior',
    experience: { min: 5, max: 8 },
    averageSalary: 90000,
    currency: 'EUR',
    jobType: 'Contract',
    industry: 'Tech',
    description:
      'DevOps Engineer with experience in Docker and Kubernetes needed.',
    technicalQualifications: ['Docker', 'Kubernetes', 'Terraform'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://codesmith.jobs/apply',
  },
  {
    id: 15,
    createdAt: '2024-8-25',
    companyName: 'FutureTech',
    location: { city: 'Austin', country: 'USA' },
    workMode: 'Hybrid',
    title: 'System Administrator',
    level: 'Mid',
    experience: { min: 3, max: 5 },
    averageSalary: 85000,
    currency: 'USD',
    jobType: 'Full-time',
    industry: 'IT Services',
    description:
      'System Administrator needed with experience in network management.',
    technicalQualifications: [
      'Network Administration',
      'Windows Server',
      'Linux',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://futuretech.jobs/apply',
  },
  {
    id: 16,
    createdAt: '2024-9-05',
    companyName: 'SmartSolutions',
    location: { city: 'Sydney', country: 'Australia' },
    workMode: 'On-site',
    title: 'Sales Manager',
    level: 'Senior',
    experience: { min: 6, max: 10 },
    averageSalary: 95000,
    currency: 'AUD',
    jobType: 'Full-time',
    industry: 'Sales',
    description: 'Sales Manager with proven track record in B2B sales needed.',
    technicalQualifications: ['Sales Strategy', 'Client Management', 'CRM'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://smartsolutions.com/careers',
  },
  {
    id: 17,
    createdAt: '2024-08-30',
    companyName: 'NextGen',
    location: { city: 'Toronto', country: 'Canada' },
    workMode: 'Remote',
    title: 'Product Designer',
    level: 'Junior',
    experience: { min: 2, max: 4 },
    averageSalary: 60000,
    currency: 'CAD',
    jobType: 'Full-time',
    industry: 'Design',
    description:
      'Product Designer needed with experience in user-centered design.',
    technicalQualifications: ['Sketch', 'Figma', 'User Testing'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://nextgen.jobs/apply',
  },
  {
    id: 18,
    createdAt: '2024-08-10',
    companyName: 'BrightFuture',
    location: { city: 'Amsterdam', country: 'Netherlands' },
    workMode: 'On-site',
    title: 'Business Analyst',
    level: 'Mid',
    experience: { min: 3, max: 5 },
    averageSalary: 70000,
    currency: 'EUR',
    jobType: 'Full-time',
    industry: 'Business Services',
    description:
      'Business Analyst with strong analytical skills and experience in data analysis.',
    technicalQualifications: ['Data Analysis', 'Business Intelligence', 'SQL'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://brightfuture.com/careers',
  },
  {
    id: 19,
    createdAt: '2024-08-01',
    companyName: 'NextStep',
    location: { city: 'Dubai', country: 'UAE' },
    workMode: 'Remote',
    title: 'HR Manager',
    level: 'Senior',
    experience: { min: 5, max: 8 },
    averageSalary: 120000,
    currency: 'AED',
    jobType: 'Full-time',
    industry: 'Human Resources',
    description:
      'HR Manager with experience in talent acquisition and employee relations.',
    technicalQualifications: [
      'Talent Acquisition',
      'Employee Relations',
      'HRIS',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://nextstep.jobs/apply',
  },
  {
    id: 20,
    createdAt: '2024-09-05',
    companyName: 'ZenithCorp',
    location: { city: 'Singapore', country: 'Singapore' },
    workMode: 'On-site',
    title: 'Network Engineer',
    level: 'Mid',
    experience: { min: 3, max: 6 },
    averageSalary: 90000,
    currency: 'SGD',
    jobType: 'Full-time',
    industry: 'Networking',
    description:
      'Network Engineer needed with expertise in network security and infrastructure.',
    technicalQualifications: ['Network Security', 'Cisco', 'Routing'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://zenithcorp.com/careers',
  },
  {
    id: 21,
    createdAt: '2024-08-15',
    companyName: 'Skyline Tech',
    location: { city: 'Hong Kong', country: 'Hong Kong' },
    workMode: 'Remote',
    title: 'Cloud Engineer',
    level: 'Senior',
    experience: { min: 4, max: 7 },
    averageSalary: 110000,
    currency: 'HKD',
    jobType: 'Full-time',
    industry: 'Cloud Computing',
    description:
      'Cloud Engineer with strong experience in AWS and cloud architecture needed.',
    technicalQualifications: ['AWS', 'Cloud Architecture', 'DevOps'],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://skylinetech.jobs/apply',
  },
  {
    id: 22,
    createdAt: '2024-8-15',
    companyName: 'CodeWithUs',
    location: { city: 'Cairo', country: 'Egypt' },
    workMode: 'On-site',
    title: 'Frontend Developer',
    level: 'Junior',
    experience: { min: 2, max: 3 },
    averageSalary: 10000,
    currency: 'EGP',
    jobType: 'Full-time',
    industry: 'IT & Software Development',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, recusandae totam tempora accusamus nam ipsum, numquam obcaecati nostrum laboriosam architecto accusantium. Possimus itaque sunt eaque voluptas minima quis unde eum?',
    technicalQualifications: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Git',
      'Github',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://apply.codewithus.com',
  },
  {
    id: 23,
    createdAt: '2024-8-15',
    companyName: 'CodeWithUs',
    location: { city: 'Cairo', country: 'Egypt' },
    workMode: 'On-site',
    title: 'Backend Developer',
    level: 'Junior',
    experience: { min: 2, max: 3 },
    averageSalary: 10000,
    currency: 'EGP',
    jobType: 'Full-time',
    industry: 'IT & Software Development',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, recusandae totam tempora accusamus nam ipsum, numquam obcaecati nostrum laboriosam architecto accusantium. Possimus itaque sunt eaque voluptas minima quis unde eum?',
    technicalQualifications: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Git',
      'Github',
    ],
    bookmarked: false,
    applied: false,
    available: true,
    applyLink: 'https://apply.codewithus.com',
  },
];
