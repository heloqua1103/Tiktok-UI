import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/route'


const publicRoutes = [
    { path: routesConfig.home, componenet: Home },
    { path: routesConfig.following, componenet: Following },
    { path: routesConfig.profile, componenet: Profile },
    { path: routesConfig.upload, componenet: Upload, layout: HeaderOnly },
    { path: routesConfig.search, componenet: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }