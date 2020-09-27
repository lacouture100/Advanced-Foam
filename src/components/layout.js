import Header from './header';
import Footer from './footer';
import Contact from "./contact";

const SiteLayout = ({ children, domain }) => (
  <div className="layout">
    <Header site={domain}/>
	<div className="content">{children}</div>
  <Contact />
  <Footer />
  </div>
  
);

export default SiteLayout;
