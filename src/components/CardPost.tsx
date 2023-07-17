import Link from 'next/link';
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
                <img src={prop.thumbnail} className='w-full rounded mb-4' />
            </Link>
            <InfoPost {...prop} />
        </article>
    );
}
