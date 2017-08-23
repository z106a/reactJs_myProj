import Home from '/imports/routes/home_serverRoute.js';
import Post from '/imports/routes/postDetail_serverRoute.js';

const Renderers = {
    Home,
    Post,
};

export default route => Renderers[ route.renderer ]( route.url );
