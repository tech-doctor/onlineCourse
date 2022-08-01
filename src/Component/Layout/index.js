import Header from "./Header/desktopHeader";
import Footer from "./Footer";
import Subscribe from "./subscribe";



const Layout = ({ children }) => {
	return (
    <div className="layout">
    <Header />
    <div className="layout-content">{children}</div>
    <Subscribe/>
    <Footer />
    </div>
	);
}

export default Layout;