<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, auto_populate_orders } from '../utils/settings.js';

  let header = 'Work Experience';
  export let embedded=false;

  let force_hide = false;
  let show_controls = false;

  $: if ($auto_populate_orders || embedded){
    populate_orders();
  }

  function populate_orders(){
    for (let i=0; i<items.length; i++){
      items[i].order = i;
    }
  }

  let items = [
    {
      title: 'Backr Inc.',
      location: 'Toronto',
      position: 'Backend Developer',
      date: 'June-Sep 2020',
      points: [{title: 'Architected PostgreSQL database with dockerized deployment to GCloud SQL', order: 0, force_hide: false},
        {title: 'Designed, implemented Flask server handling social media ingestion, and performing analytics such as title classification. Deployed to Google Compute Engine', order: 0, force_hide: false},
        {title: 'Developed NodeJS webserver deployed to Google AppEngine', order: 0, force_hide: false},
        {title: 'Provided git integrated continuous deployment and comprehensive unit tests for each project', order: 0, force_hide: false}
      ],
      tags: [{title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.GCLOUD, order: 0, force_hide: false, use_index: true},
        {title: TagNames.APPENGINE, order: 0, force_hide: false, use_index: true},
        {title: TagNames.POSTGRESQL, order: 0, force_hide: false, use_index: true},
        {title: TagNames.DOCKER, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NODEJS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NLP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SQL, order: 0, force_hide: false, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'CIBC',
      location: 'Toronto',
      position: 'Full Stack Developer',
      date: 'Sep-Dec 2019',
      points: [{title: 'Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask (Python) webserver backend with OracleDB SQL server', order: 0, force_hide: false},
        {title: 'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML', order: 0, force_hide: false}, 
        {title: 'Improved fraud detection capabilities by creating a title classifier using spaCy, NLTK (Python)', order: 0, force_hide: false},
        {title: 'Achieved "Above and Beyond" award for outstanding performance', order: 0, force_hide: false}],
      tags: [{title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SVELTE, order: 0, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NLP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.TABLEAU, order: 0, force_hide: false, use_index: true},
        {title: TagNames.UI, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SQL, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SCSS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SPACY, order: 0, force_hide: false, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Waterloo',
      position: 'Computer Vision Software Developer',
      date: 'Jan-April 2019',
      points: [{title: 'Improved simulation accuracy by 76% by developing a performance critical DLL plugin that performs raytraces', order: 0, force_hide: false},
        {title: 'Created enhanced optical artifact simulator, using advanced OpenCV matrix calculations in C++', order: 0, force_hide: false},
        {title: 'Improved effectiveness of material property lookup table by developing n-dimensional interpolation algorithm', order: 0, force_hide: false},
        {title: 'Automated a laser test fixure by developing control software in Python & Arduino', order: 0, force_hide: false}],
      tags: [{title: TagNames.CPP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.OPENCV, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.ARDUINO, order: 0, force_hide: false, use_index: true}
      ],
      force_hide: false,
      order: 0
    }
  ];

</script>

<Section {header} {embedded} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <ExperienceList bind:items {embedded} work={true}/>
</Section>
