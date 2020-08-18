<script>
  export let contentSettings;
  $: contentSettings = items.map(i => {
    let newObj = new Object();
    newObj.title = i.title;
    newObj.points = i.points;
    newObj.order = i.order;
    newObj.force_hide = i.force_hide;
    newObj.tags = i.tags;
    return newObj;
  });

  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, auto_populate_orders } from '../utils/settings.js';

  let header = 'Projects';
  let show_controls = false;
  let force_hide = false;
  let items = [{
    title: 'Slack Chatbot (AWS)',
    location: 'UW Rocketry - Electrical Team',
    position: 'Programmer',
    date: 'Jan 2019',
    points: [{
      title: 'Developed scheduling application in Python, deployed to AWS Lambda',
      order: 0,
      force_hide: false
    }, {
      title: 'Set up REST API Gateway to communicate with AWS Lambda Function',
      order: 0,
      force_hide: false
    }, {
      title: 'Created Amazon DynamoDB database to store user and group schedules',
      order: 0,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.AWS,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BASH,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BACKEND,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DYNAMODB,
        order: 0,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 0
  },
  {
    title: 'Realtime Rocket Data Visualiser',
    location: 'UW Rocketry - Electrical Team',
    position: 'Programmer',
    date: 'Jan 2019',
    points: [{
      title: 'Developed data transfer protocol for realtime transmission of rocket sensor data',
      order: 0,
      force_hide: false
    }, {
      title: 'Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components',
      order: 0,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ARDUINO,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DATA_VISUALIZATION,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.PLOTLY,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.D3,
        order: 0,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 0
  },
  {
    title: 'PyBudgeter',
    location: '',
    position: 'Personal Project',
    date: 'Jan 2019',
    points: [{
      title: 'Created PostgreSQL database to store salted passwords, user info, transactions',
      order: 0,
      force_hide: false
    }, {
      title: 'Developed Android app frontend in Kotlin',
      order: 0,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.FLASK,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.SQL,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.POSTGRESQL,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.KOTLIN,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.BACKEND,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.FRONTEND,
        order: 0,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: true,
    order: 0
  },
  {
    title: 'ROS Robot Driver Station',
    location: 'UW React',
    position: 'Controls team programmer',
    date: '2018',
    points: [{
      title: 'Lead the design and development of a QT application which provides a human interface to the robot simulator',
      order: 0,
      force_hide: false
    }, {
      title: 'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info',
      order: 0,
      force_hide: false
    }, {
      title: 'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot',
      order: 0,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.CONTROL_SYSTEMS,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.DATA_VISUALIZATION,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ROS,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.QT,
        order: 0,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 0
  },
  {
    title: 'Smart Headlamp',
    location: 'UTRAHacks',
    position: 'Hackathon Project',
    date: '2018',
    points: [{
      title: 'Created gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV',
      order: 0,
      force_hide: false
    }, {
      title: 'Implemented Leap Motion Control using C++',
      order: 0,
      force_hide: false
    }, {
      title: 'Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights',
      order: 0,
      force_hide: false
    }, {
      title: 'Achieved second place, and received Leap Motion award',
      order: 0,
      force_hide: false
    }],
    tags: [{
        title: TagNames.PYTHON,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.OPENCV,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.UI,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.MACHINE_LEARNING,
        order: 0,
        force_hide: true,
        use_index: true
      },
      {
        title: TagNames.CONTROL_SYSTEMS,
        order: 0,
        force_hide: true,
        use_index: true
      },
      {
        title: TagNames.CPP,
        order: 0,
        force_hide: false,
        use_index: true
      },
      {
        title: TagNames.ARDUINO,
        order: 0,
        force_hide: false,
        use_index: true
      }
    ],
    force_hide: false,
    order: 0
  }
]; 
</script>

<Section {header} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <ExperienceList bind:items work={false}/>
</Section>
