import Head from 'next/head';
import { Header, Footer } from '@components';
import { appName } from 'config';
import { Main, Page } from '@styles';

const Dashboard = () => {
  return (
    <Page>
      <Head>
        <title>{appName}: Dashboard</title>
      </Head>
      <Main>
        <Header />

        <h1>Dashboard</h1>
      </Main>
    </Page>
  );
};

export default Dashboard;
