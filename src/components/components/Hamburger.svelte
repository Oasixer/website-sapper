<script>
  export let open = false;
  export let fixed = false;
</script>

<div class:fixed={fixed}>
<button
  class="text-white-500 hover:text-white-700 cursor-pointer mr-4 border-none focus:outline-none"
  class:open on:click={() => open = !open}>
	<svg width=20 height=20>
		<line id="top" x1=0 y1=2  x2=20 y2=2/>
		<line id="middle" x1=0 y1=9 x2=20 y2=9/>
		<line id="bottom" x1=0 y1=16 x2=20 y2=16/>
	</svg>
</button>
</div>
<style>
	svg {
		min-height: 20px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
    stroke: white;
		stroke-width: 2;
		transition: transform 0.3s ease-in-out
	}
	
	button {
    margin-top: 7px;
    background-color: transparent;
    border: none;
		z-index: 20;
    outline: none;
	}
	
	.open svg {
		transform: scale(1.0)
	}
	
	.open #top {
		transform: translate(4px, 0px) rotate(45deg)
	}
	
	.open #middle {
		opacity: 0;
	}
	
  .open #bottom {
		transform: translate(-9px, 4px) rotate(-45deg)
	}

  .fixed {
    position: fixed;
    z-index:999;
    top: 30px;
    left: 30px;
  }
</style>
