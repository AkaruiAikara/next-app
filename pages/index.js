import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import GridProduct from '../components/gridproduct';

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
