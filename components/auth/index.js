import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Login from '../login';
import Register from '../register';

export default function Auth() {
    const router = useRouter();
    return (
        <>
            <Modal
                isOpen={!!router.query.login}
                onRequestClose={() => router.push('/')}
                contentLabel="Login modal"
                style={{
                    content: {
                        backgroundColor: '#fff',
                        top: '50%',
                        bottom: 'auto',
                        left: '50%',
                        right: 'auto',
                    }
                }}
            >
                <Login />
            </Modal>
            <Modal
                isOpen={!!router.query.register}
                onRequestClose={() => router.push('/')}
                contentLabel="Register modal"
                style={{
                    content: {
                        backgroundColor: '#fff',
                        top: '50%',
                        bottom: 'auto',
                        left: '50%',
                        right: 'auto',
                    }
                }}
            >
                <Register />
            </Modal>
        </>
    )
}