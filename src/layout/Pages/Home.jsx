import Layout from '../Layout'
import Carousel from '../Component/home/carousel'
import About from '../Component/home/About'

const Home = () => {
    return (
        <>
        <Layout>
            <Carousel />
            <About />
        </Layout>
        </>
    )
}

export default Home