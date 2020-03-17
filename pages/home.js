import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/eu.jpg" alt="Saulo Filho" width="200" />
    <Title>we are on</Title>
    <Link href="/users"><a>Users</a></Link>
  </div>
)

export default withAnalytics()(Home);