import { Route } from 'umi';
import { IncomingMessage, ServerResponse } from 'http';
import { RouteData } from 'umi/router';
import {match } from 'react-router';
declare module '*.css';
declare module '*.png';

export type OptionalPromise<T> = Promise<T> | T;

export interface SSRFC<P = {}> extends React.FC<P> {
  getInitialProps(params: GetInitialPropsParams): OptionalPromise<Partial<P>>;
}

export interface GetServerPropsParams {
  isServer: true;
  route: match<any>;
  location: RouteData;
  req: IncomingMessage;
  res: ServerResponse;
}

export interface GetClientPropsParams {
  isServer: false;
  route: match<any>;
  location: RouteData;
}

export type GetInitialPropsParams = GetClientPropsParams | GetServerPropsParams;
