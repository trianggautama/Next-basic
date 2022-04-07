import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar type="main" />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;