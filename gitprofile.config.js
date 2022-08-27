// gitprofile.config.js

const config = {
  github: {
    username: 'Al-ImranRony', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 16, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['Al-ImranRony', 'Objective-C_practice', 'iOS_learning'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'imran-rony',
    twitter: 'Imran_R0ny',
    facebook: 'imran.rony.3591',
    twitter: 'Imran_R0ny',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://sites.google.com/view/imranrony',
    phone: '+880 1687 024647',
    email: 'imran.rony@sec.ac.bd',
  },
  skills: [
    'iOS',
    'NFT-Blockchain',
    'Python',
    'Swift',
    'Objective-c',
    'Git',
    'NoSQL',
    'Git',
    'C++',
    'HTML',
    'CSS',
    'Django',
    'Overleaf',
    'IoT',
  ],
  experiences: [
    {
      company: 'Bitmorpher Ltd.',
      position: 'Software Engineer',
      from: 'June 2021',
      to: 'Present',
    },
    {
      company: 'SEC Developers CLub',
      position: 'Senior member, Trainer',
      from: 'July 2019',
      to: 'August 2021',
    },
  ],
  education: [
    {
      institution: 'Sylhet Engineering College-Bangladesh',
      degree: 'Bachelor of Science',
      from: '2016',
      to: '2021',
    },
    {
      institution: 'Govt. BL College, Khulna',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Rotary School, Khulna',
      degree: 'Secondary School Certificate (SSC)',
      from: '2007',
      to: '2012',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
