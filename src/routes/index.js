import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';


const publicRoutes = [
    { path: '/', componenet: Home },
    { path: '/following', componenet: Following },
    { path: '/profile', componenet: Profile },
    { path: '/upload', componenet: Upload, layout: HeaderOnly },
    { path: '/search', componenet: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }