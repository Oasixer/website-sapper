<script>
  export let contentSettings;
  $: contentSettings = items;

  import Section from './Section.svelte';
  import AwardsInterestsPointList from '../components/AwardsInterestsPointList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Awards / Achievements';
  let items = [
    {title: 'CIBC Employee Above & Beyond Award', order: 0, force_hide: false},
    {title: 'UTRAHacks 2018 - 2nd place', order: 0, force_hide: false},
    {title: 'University Bouldering Series 2018 - 2nd place', order: 0, force_hide: false},
    {title: '2017 Youth Climbing Nationals - 7th place', order: 0, force_hide: false}
  ];

  let show_controls = false;
  let force_hide = false;

  
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <AwardsInterestsPointList bind:items bind:show_controls/>
</Section>
