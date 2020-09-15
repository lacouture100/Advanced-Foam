import Link from "next/link";
import Navigation from './navigation';

const SiteLayout = ({ children, domain }) => (
  <div className="layout">
    <Navigation site={domain}/>
	<div className="content">{children}</div>
  </div>
);

export default SiteLayout;
