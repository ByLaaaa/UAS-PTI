import Navigation from './navigasi'
import Carousel from './Component/carousel'

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <Carousel />
        </>
    )
}

export default Layout