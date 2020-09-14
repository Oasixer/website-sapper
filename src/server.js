/*This is a normal Express (or , etc) app, with three requirements:

it should serve the contents of the static folder, using for example 
it should call app.use(sapper.middleware()) at the end, where sapper is imported from @sapper/server
it must listen on process.env.PORT
Beyond that, you can write the server however you like.
*/

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
