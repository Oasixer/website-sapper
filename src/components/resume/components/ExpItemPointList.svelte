<script>
  export let items;
  import { experience_content_font_size } from '../utils/settings.js';

  export let show_controls = false;
  export let embedded = false;

  function toggle_controls(){
     show_controls = !show_controls;
  }

</script>

<style>
  ul{
    margin: 0 0;
  }

  li{
    margin: 0px 0px;
  }
  
  li.darktheme{
    color: #c0c0c0;
    font-size: 18px;
  }
  
  li:not(.darktheme){
    line-height: 1;
  }


</style>

<ul on:click={toggle_controls}>
  {#each items.filter(i=>!i.force_hide).concat().sort((a,b)=>a.order - b.order) as i}
    <li style="{(!embedded)?('font-size: '+$experience_content_font_size+'px'):''}">
    {i.title_alt || i.title}
    </li>
  {/each}
</ul>
