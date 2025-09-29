import Header from "../UI/Header"
import Footer from "../UI/Footer"


function Layout({children}){
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout