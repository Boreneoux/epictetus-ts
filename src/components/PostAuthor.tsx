import Image from 'next/image';

interface PostAuthorProps {
    authorAvatar: string;
    authorName: string;
    authorJob: string;
}

export default function PostAuthor({ authorAvatar, authorName, authorJob }: PostAuthorProps) {
    return (
        <div className='flex items-center mt-5'>
            <Image
                src={authorAvatar}
                width={1000}
                height={1000}
                alt={authorName}
                className='w-14 h-14 rounded-full object-cover'
            />
            <div className='ml-4'>
                <h3>{authorName}</h3>
                <div className='text-white/60 text-sm mt-1'>{authorJob}</div>
            </div>
        </div>
    );
}
