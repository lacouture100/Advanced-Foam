import Link from "next/link";
import Header from './header2';

const SiteLayout = ({ children, domain }) => (
  <div className="layout">
    <Header site={domain}/>
	<div className="content">{children}</div>
  </div>
);

export default SiteLayout;
