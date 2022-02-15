import Layout from '../components/layout';
import Jumbotron from '../components/Jumbotron';
import GridProduct from '../components/GridProduct';

export default function Home() {
  return (
    <>
      <Layout>
        <Jumbotron />
        <GridProduct />
      </Layout>
    </>
  )
}
