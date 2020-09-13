<script>
  export let header;
  export let show_section_controls = false;
  export let show_list_controls = false;
  export let force_hide;
  export let embedded=false;
  import { section_headings_font_size } from '../utils/settings.js';

  function enable_controls(){
    show_section_controls=true;
  }
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  div.section-main{
    margin: 0;
    margin-bottom: 10px;
  }
  
  div.section-content{
    margin: 10px 0 0px 0;
  }

  h1{
    width: fit-content;
    padding: 0;
    margin: 0;
    color: purple;
    /* font-size: 24px; */ /* set by store not hardcoded */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: bold;
  }

  hr{
    height: 1px;
    background: black;
    margin: 0;
    flex: 1 1; /* grow shrink basis */
  }
</style>

{#if !force_hide}
<div class='section-main'>
  {#if !embedded}
  <h1 style="font-size: {$section_headings_font_size}px;"
      on:click={enable_controls}>{header}</h1>
  <hr>
  {/if}
  <div class='section-content'>
    <slot></slot>
  </div>
</div>
{/if}
