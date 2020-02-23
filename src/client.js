// must import the generated start function from the generated @sapper/app folder
import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});
