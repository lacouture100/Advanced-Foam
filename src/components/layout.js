import Link from "next/link";
import Header from './header';
import Footer from './footer';

const SiteLayout = ({ children, domain }) => (
  <div className="layout">
    <Header site={domain}/>
	<div className="content">{children}</div>
  <Footer />
  </div>
  
);

export default SiteLayout;
