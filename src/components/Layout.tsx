import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
