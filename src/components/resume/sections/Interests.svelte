<script>
  import Section from './Section.svelte';
  import AwardsInterestsPointList from '../components/AwardsInterestsPointList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Interests';
  let items = [
    {title: 'Competitive rock climber for 12 years', order: 2, force_hide: false},
    {title: 'National Youth Circus alumni', order: 4, force_hide: false},
    {title: 'Machining, woodworking', order: 6, force_hide: false},
    {title: 'Rock climbing coach during high school', order: 8, force_hide: false},
  ];

  export const contentSettings = () => {
    return items;
  };

  export const setContentSettings = (itemSettings) => {
    items = [...itemSettings];
  };

  let show_section_controls = false;
  let show_list_controls = false;
  let force_hide = false;
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header} {force_hide} bind:show_section_controls bind:show_list_controls>
  {#if show_section_controls}
    <SectionControls bind:force_hide on:close={()=>{show_section_controls=false}}/>
  {/if}
  {#if show_list_controls}
    <ListControls bind:items on:close={()=>{show_list_controls=false;}}/>
  {/if}
  <AwardsInterestsPointList bind:items bind:show_list_controls/>
</Section>
