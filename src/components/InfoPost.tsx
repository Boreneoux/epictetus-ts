import PostAuthor from './PostAuthor';
import PostMetaTitle from './PostMetaTitle';

interface PostProps {
    category: string;
    date: string;
    title: string;
    shortDescription: string;
    authorAvatar: string;
    authorName: string;
    authorJob: string;
}

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob,
}: PostProps) {
    return (
        <>
            <PostMetaTitle category={category} date={date} title={title} center={false} />
            <p className='text-white/60 mt-5 w-10/12'>{shortDescription}</p>
            <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
        </>
    );
}
