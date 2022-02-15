import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    const router = useRouter();
    useEffect(() => {
        router.push('/?register=true', '/register')
    }, [])
    return null;
}