import Navigasi from '../Component/navigasi'
import Footer from '../Component/Footer'
import About from '../Component/recipes/About'
import Cards from '../Component/recipes/Cards'

function Recipes() {
    return (
        <>
        <Navigasi />
        <div className="flex flex-col">
            <div className="py-20 pb-52"><About /></div>
            <Cards />
        </div>
        <Footer />
        </>
    )
}

export default Recipes