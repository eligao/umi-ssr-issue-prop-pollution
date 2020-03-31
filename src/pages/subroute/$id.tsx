import React, { FC } from 'react';
import { SSRFC } from 'typings';
import { Link } from 'umi';
import { sleep } from '@/utils';

interface PageSubrouteProps {
  title: string;
  content: string;
  isServer?: boolean;
}

const PageSubroute: SSRFC<PageSubrouteProps> = props => {
  console.log('PageSubroute::render');
  console.log('isServer:', props.isServer);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <code>isServer: {props.isServer?.toString()}</code>
      <ul>
        <p>Dynamic routes using same Page component</p>
        <li>
          <Link to="001">Page subroute/001</Link>
        </li>
        <li>
          <Link to="002">Page subroute/002</Link>
        </li>
      </ul>
      <ul>
        <p>In-page anchors</p>
        <li id="p1">
          <Link to="#p1">#P1</Link>
        </li>
        <li id="p2">
          <Link to="#p2">#P2</Link>
        </li>
      </ul>
    </div>
  );
};

PageSubroute.getInitialProps = async params => {
  console.log('PageSubroute::getInitialProps');
  console.log('isServer:', params.isServer);
  await sleep(1000);
  return {
    title: `Subroute Title ${params.route.params.id}`,
    content: `Beta Content`,
    isServer: params.isServer,
  };
};

export default PageSubroute;
