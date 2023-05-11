'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.png';
import { useRouter } from 'next/navigation';

export const Logo = () => {
    const router = useRouter();
    return (
        <Link href="/">
            <Image
                onClick={() => router.push('/')}
                alt="Logo"
                className="hidden md:block cursor-pointer"
                height="100"
                width="100"
                src={logo}
            />
        </Link>
    );
};
