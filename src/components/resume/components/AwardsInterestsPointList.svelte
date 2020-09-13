<script>
  export let items;
  import { education_awards_interests_font_size } from '../utils/settings.js';

  export let show_list_controls = false;
</script>

<style>
  ul{
    margin: 3px 0 0 0;
  }

</style>

<ul on:click={()=>show_list_controls=true}>
  {#each items.filter(i=>!i.force_hide).concat().sort((a,b)=>a.order - b.order) as i}
    <li style="font-size: {$education_awards_interests_font_size}px; line-height: 1;">
    {i.title_alt?i.title_alt:i.title}
  </li>
{/each}
</ul>
