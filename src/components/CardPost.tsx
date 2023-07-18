import Link from 'next/link';
import Image from 'next/image';
import InfoPost from './InfoPost';

interface CardPostProps {
    thumbnail: string;
    category: string;
    date: string;
    title: string;
    shortDescription: string;
    authorAvatar: string;
    authorName: string;
    authorJob: string;
}

export default function CardPost(prop: CardPostProps) {
    return (
        <article>
            <Link href='/detail'>
                <Image
                    src={prop.thumbnail}
                    alt='thumbnail'
                    width={1000}
                    height={1000}
                    className='w-full rounded mb-4'
                />
            </Link>
            <InfoPost {...prop} />
        </article>
    );
}
