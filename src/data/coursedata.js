const coursedata = [
  {
    id: 1,
    title: 'Lesson #01' ,
    contents: [
      {
        id: '1-video-1',
        type: 'video',
        label: 'Course Intro',
        duration: '3:27',
        url: 'https://youtu.be/05rY_WXB4QI?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
      },
      {
        id: '1-video-2',
        type: 'video',
        label: 'Course Outline',
        duration: '5:00',
        url: 'https://youtu.be/DboHMBXz_rE?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
      },
     {
      id: '1-material-1',
      type: 'material',
     label:'materials',
      title: 'Intro PDF',
      description: 'Basic overview of the course content.',
      link: '/downloads/material1.pdf',
    },
   
      {
        id: '1-quiz',
        type: 'quiz',
        label: ' Quiz',
        questions: 10,
      },
      
      {
       id: '1-assignment-1',
  type: 'assignment',
  title: 'Assignment 1 - Research Task',
  label: 'Assignment',
  description: 'Research and explain the basic principles of software engineering.',
  instructions: 'Prepare a 1-page report covering key principles, submit as PDF.',
  dueDate: '2025-06-23T17:00:00',
  status: 'Pending',
  submissionStatus: 'Not Submitted',
  fileLink: 'https://example.com/software-engineering-assignment.pdf'
      },
    ],
  },
  {
    id: 2,
    title: 'Lesson #02',
    contents: [
      {
        id: '2-video-1',
        type: 'video',
        label: 'Course Intro',
        duration: '3:27',
        url: 'https://youtu.be/DboHMBXz_rE?list=PLzdWZT-ZJD0-6DSpuCxshZr82fLGPWrgO',
      },
      {
        id: '2-video-2',
        type: 'video',
        label: 'Course Outline',
        duration: '5:00',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
      id: '2-material',
      type: 'material',
      label: 'Materials',
      title: 'What is SDLC?',
      description: 'An introductory PDF that explains the basic concept and phases of the Software Development Life Cycle.',
      link: '/downloads/sdlc-overview.pdf',
    },
    
      {
        id: '2-quiz',
        type: 'quiz',
        label: ' Quiz',
        questions: 15,
      },
      {
        id: '2-assignment',
  type: 'assignment',
  title: 'Assignment 2',
  label: 'Assignment',
  description: 'Write a short essay on the topic (Assignment2).',
  instructions: 'Write a short essay on the topic (Assignment2).',
  dueDate: '2025-06-21T18:00:00', // you can customize the due date
  status: 'Pending', // or 'Submitted' / 'Graded'
  submissionStatus: 'Not Submitted', // or 'Submitted' / 'Graded'
  fileLink: 'https://example.com/assignment2.pdf'
      },
    ],
  },

  
];

export default coursedata;
