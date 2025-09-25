import Header from "../UI/Header"

function Layout({children}){
    return(
        <>
        <Header />
        {children}
        </>
    )
}

export default Layout