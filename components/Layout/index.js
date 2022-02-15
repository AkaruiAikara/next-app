import { useRouter } from 'next/router'
import Head from 'next/head';
import Modal from 'react-modal';
import Navbar from '../navbar';
import Auth from '../auth';

Modal.setAppElement('#__next');


export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Next.js</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Auth />
            <main className="container mx-auto">
                <Navbar isLoggedIn={true} />
                {children}
            </main>
        </>
    )
}