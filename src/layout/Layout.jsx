import Navigation from "./Component/navigasi"
import Footer from "./Component/Footer"
function Layout({children}) {
    return (
        <>
            <Navigation />
                {children}
            <Footer />
        </>
    )
}

export default Layout