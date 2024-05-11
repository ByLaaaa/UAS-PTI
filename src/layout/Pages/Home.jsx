import Navigation from '../Component/navigasi'
import Carousel from '../Component/carousel'
import About from '../Component/home/About'

const Home = ({children}) => {
    return (
        <>
        <Navigation />
        <Carousel />
        <About />
        </>
    )
}

export default Home