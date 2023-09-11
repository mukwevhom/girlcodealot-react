import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const MainLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            <NavBar />
            {children}
        </>
    )
}

export default MainLayout