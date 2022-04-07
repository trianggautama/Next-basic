import Footer from "./Footer";
import Navbar from "./Navbar";
import globalStyle from "../styles/globalStyle";

const Layout = ({ children }) => {
    return (
        <div>
            <style jsx> {globalStyle}</style>
            <Navbar type="main" />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;