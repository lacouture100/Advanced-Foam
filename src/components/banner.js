import React, { useState } from 'react';
import Link from 'next/link'
import '../../styles/Banner.css'
import { Fragment } from 'react';
import Card from './card'

export default function Banner(props) {
  const [data,setData] = useState(props.data);

  return (
    <div className="banner">
      <Fragment>
        {/* Links */}
        <h2 className="banner-title"> IN STOCK NOW</h2>
        <div className="banner-content">
          {
            data.map((post, index) => {
                return (
                <Link key={index} href={ `/construction/${ post.slug }` }>
                  <a  href={ `/construction/${ post.slug }` }>
                    <Card key={index} post={post} />
                  </a>
                </Link>
                )
              })}
        </div>

      </Fragment>
    </div>
  );
}