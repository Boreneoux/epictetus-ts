import { ReactNode } from 'react';

interface SectionHeaderProps {
    children: ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
    return <h1 className='text-4xl py-10 text-center'>{children}</h1>;
}
