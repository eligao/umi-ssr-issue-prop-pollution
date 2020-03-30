import React, { FC } from 'react';
import { SSRFC } from 'typings';
import { Link } from 'umi';
import { sleep } from '@/utils';

interface PageSubrouteProps {
  title: string;
  content: string;
  isServer: boolean;
}

const PageSubroute: SSRFC<PageSubrouteProps> = props => {
  console.log('PageSubroute::render');
  console.log('isServer:', props.isServer);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <code>isServer: {props.isServer.toString()}</code>
      <ul>
        <li>
          <Link to="001">Page Beta/001</Link>
        </li>
        <li>
          <Link to="002">Page Beta/002</Link>
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
    title: 'Beta Title',
    content: `Beta Content ${params.route.params.id}`,
    isServer: params.isServer,
  };
};

export default PageSubroute;
