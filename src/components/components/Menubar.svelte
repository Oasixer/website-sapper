<script>
  export let floaty;
  export let sections;
  export let curSection;
  export let addHamburger=false;
  export let mobileSidebarOpen=false;

  import Hamburger from './Hamburger.svelte';
  import { onMount, createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
  
  const dispatch = createEventDispatcher();
  const dispatcher = (args) => dispatch('move', {args:args});

  $: sectionsLeft = sections.slice(0,2).filter(i=>!i.excludeFromMenubar);
  $: sectionsRight = sections.slice(2).filter(i=>!i.excludeFromMenubar);

  function runMoveDispatcher(n){
    dispatcher({n:n});
    /* console.log('move-base'); */
  }

  onMount(() => {
    /* console.log('floaty: '+floaty); */
  });
  
</script>

<style>
  div.menubar{
    width: 100%;
    /* background-color: #161a28; */
    background-color: #081012;
    height: 80px;
    display: flex;
    margin: 0;
    align-items: center;
  }
  
  div.menubar.floaty{
    position: fixed;
    top: 0;
    z-index: 5;
  }

  div.group{
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
  }

  div.left{
    margin-left: 30px;
    margin-right: auto;
  }
  div.left.floaty{
    margin-left: auto;
    margin-right: 0;
  }
  
  div.right{
    margin-left: auto;
    margin-right: 30px;
  }

  div.right.floaty{
    margin-right: auto;
    margin-left: 0;
  }


  button{
    border: none;
    background: none;
    cursor: pointer;
    color: #50555d;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 22px;
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 9px;
  }

  button:active{
    background: none;
    outline: none;
  }
  
  button:hover{
    color: #f3f5f4;
  }

  button.selected{
    color: #f3f5f4;
    outline: none;
  }

  div.row{
    width: 100%;
    display: flex;
  }
</style>

<div class='menubar' class:floaty style={addHamburger?'height: 50px':''} transition:fly="{floaty?{y:-100, duration: 200}:''}">
  <div class='group left' style={addHamburger?'margin-left: 5px; margin-right: 0;':''} class:floaty>
    {#if addHamburger}
      <Hamburger bind:open={mobileSidebarOpen}/>
    {:else}
      {#each sectionsLeft as section, n}
        <button
          class:selected={curSection==n}
          on:click={()=>runMoveDispatcher(n)}>
          {section.name}
        </button>
      {/each}
    {/if}
  </div>
  {#if !floaty}
    {#if addHamburger}
      <div class='row'>
        <button class='selected' style={addHamburger?'font-size: 17px; margin-left: 0;':''} on:click={()=>runMoveDispatcher(0)}>
        Kaelan Moffett
        </button>
      </div>
    {:else}
      <button class='selected' on:click={()=>runMoveDispatcher(0)}>
      Kaelan Moffett
      </button>
    {/if}
  {/if}
  <div class='group right' class:floaty>
    {#if !addHamburger}
      {#each sectionsRight as section, n}
        <button
          class:selected={curSection==n+sectionsLeft.length}
          on:click={()=>runMoveDispatcher(n+sectionsLeft.length)}>
          {section.name}
        </button>
      {/each}
    {/if}
  </div>
</div>
