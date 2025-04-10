import { create } from 'zustand';

const useResumeStore = create((set) => ({
  // Estado inicial con datos de ejemplo
  resumeData: {
    basicInfo: {
      firstName: 'John',
      lastName: 'Doe',
      headline: 'Senior Full Stack Developer & Tech Lead',
      address: '123 Main St, Apt 4B',
      phone: '+1 234 567 8900',
      email: 'john.doe@example.com',
      location: 'New York, NY',
      linkedin: 'johndoe',
      github: 'johndoe',
      summary: 'Experienced Full Stack Developer with 8+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Proven track record of leading development teams and delivering high-quality software solutions. Passionate about clean code, best practices, and mentoring junior developers.',
    },
    workExperience: [
      {
        company: 'Tech Corp',
        location: 'New York, NY',
        position: 'Senior Developer & Tech Lead',
        description: 'Led a team of 5 developers in building and maintaining enterprise-level web applications. Implemented microservices architecture and CI/CD pipelines. Improved application performance by 40% through code optimization and caching strategies. Mentored junior developers and conducted code reviews.',
        startDate: '2020-01',
        endDate: '2023-12',
        ongoing: false,
      },
      {
        company: 'Startup Inc',
        location: 'San Francisco, CA',
        position: 'Full Stack Developer',
        description: 'Developed and maintained multiple web applications using React, Node.js, and MongoDB. Implemented real-time features using WebSocket. Optimized database queries resulting in 30% faster response times. Collaborated with UX designers to implement responsive designs.',
        startDate: '2018-06',
        endDate: '2019-12',
        ongoing: false,
      },
      {
        company: 'Digital Solutions',
        location: 'Boston, MA',
        position: 'Frontend Developer',
        description: 'Built responsive user interfaces using React and Redux. Implemented automated testing using Jest and React Testing Library. Worked closely with backend developers to integrate APIs. Participated in agile development processes.',
        startDate: '2016-03',
        endDate: '2018-05',
        ongoing: false,
      }
    ],
    education: [
      {
        school: 'Massachusetts Institute of Technology',
        degree: 'Master of Science in Computer Science',
        description: 'Specialized in Software Engineering and Artificial Intelligence. Thesis on "Machine Learning Applications in Web Development".',
        startDate: '2018-09',
        endDate: '2020-05',
        ongoing: false,
      },
      {
        school: 'University of Technology',
        degree: 'Bachelor of Science in Computer Science',
        description: 'Specialized in Software Engineering and Web Development. Graduated with honors. President of Computer Science Club.',
        startDate: '2014-09',
        endDate: '2018-05',
        ongoing: false,
      }
    ],
    hardSkills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'AWS',
      'GraphQL',
      'RESTful APIs',
      'Git',
      'CI/CD',
      'Jest',
      'React Testing Library',
      'WebSocket',
      'Redux',
      'Next.js',
      'Tailwind CSS'
    ],
    softSkills: [
      'Team Leadership',
      'Project Management',
      'Problem Solving',
      'Communication',
      'Time Management',
      'Adaptability',
      'Mentoring',
      'Code Review',
      'Technical Documentation',
      'Agile Methodologies',
      'Public Speaking',
      'Cross-functional Collaboration'
    ],
  },

  // Acciones
  setBasicInfo: (data) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      basicInfo: {
        ...state.resumeData.basicInfo,
        ...data,
      },
    },
  })),

  setWorkExperience: (experience) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      workExperience: experience,
    },
  })),

  setEducation: (education) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      education: education,
    },
  })),

  setHardSkills: (skills) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      hardSkills: skills,
    },
  })),

  setSoftSkills: (skills) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      softSkills: skills,
    },
  })),

  // Acción para actualizar cualquier parte del estado
  updateResumeData: (section, data) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      [section]: {
        ...state.resumeData[section],
        ...data,
      },
    },
  })),

  // Acción para resetear a los datos iniciales
  resetToInitialData: () => set({
    resumeData: {
      basicInfo: {
        firstName: 'John',
        lastName: 'Doe',
        headline: 'Senior Full Stack Developer & Tech Lead',
        address: '123 Main St, Apt 4B',
        phone: '+1 234 567 8900',
        email: 'john.doe@example.com',
        location: 'New York, NY',
        linkedin: 'johndoe',
        github: 'johndoe',
        summary: 'Experienced Full Stack Developer with 8+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Proven track record of leading development teams and delivering high-quality software solutions. Passionate about clean code, best practices, and mentoring junior developers.',
      },
      workExperience: [
        {
          company: 'Tech Corp',
          location: 'New York, NY',
          position: 'Senior Developer & Tech Lead',
          description: 'Led a team of 5 developers in building and maintaining enterprise-level web applications. Implemented microservices architecture and CI/CD pipelines. Improved application performance by 40% through code optimization and caching strategies. Mentored junior developers and conducted code reviews.',
          startDate: '2020-01',
          endDate: '2023-12',
          ongoing: false,
        },
        {
          company: 'Startup Inc',
          location: 'San Francisco, CA',
          position: 'Full Stack Developer',
          description: 'Developed and maintained multiple web applications using React, Node.js, and MongoDB. Implemented real-time features using WebSocket. Optimized database queries resulting in 30% faster response times. Collaborated with UX designers to implement responsive designs.',
          startDate: '2018-06',
          endDate: '2019-12',
          ongoing: false,
        },
        {
          company: 'Digital Solutions',
          location: 'Boston, MA',
          position: 'Frontend Developer',
          description: 'Built responsive user interfaces using React and Redux. Implemented automated testing using Jest and React Testing Library. Worked closely with backend developers to integrate APIs. Participated in agile development processes.',
          startDate: '2016-03',
          endDate: '2018-05',
          ongoing: false,
        }
      ],
      education: [
        {
          school: 'Massachusetts Institute of Technology',
          degree: 'Master of Science in Computer Science',
          description: 'Specialized in Software Engineering and Artificial Intelligence. Thesis on "Machine Learning Applications in Web Development".',
          startDate: '2018-09',
          endDate: '2020-05',
          ongoing: false,
        },
        {
          school: 'University of Technology',
          degree: 'Bachelor of Science in Computer Science',
          description: 'Specialized in Software Engineering and Web Development. Graduated with honors. President of Computer Science Club.',
          startDate: '2014-09',
          endDate: '2018-05',
          ongoing: false,
        }
      ],
      hardSkills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'AWS',
        'GraphQL',
        'RESTful APIs',
        'Git',
        'CI/CD',
        'Jest',
        'React Testing Library',
        'WebSocket',
        'Redux',
        'Next.js',
        'Tailwind CSS'
      ],
      softSkills: [
        'Team Leadership',
        'Project Management',
        'Problem Solving',
        'Communication',
        'Time Management',
        'Adaptability',
        'Mentoring',
        'Code Review',
        'Technical Documentation',
        'Agile Methodologies',
        'Public Speaking',
        'Cross-functional Collaboration'
      ],
    },
  }),
}));

export default useResumeStore; 