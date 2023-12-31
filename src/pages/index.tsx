import { useState } from 'react';
import CardPost from '@/components/CardPost';
import FeaturedPost from '@/components/FeaturedPost';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import mockPosts from '../../utils/posts.json';
import Head from 'next/head';

export default function Home() {
    const [posts, setPosts] = useState(mockPosts);

    return (
        <Layout>
            <Head>
                <title>Home &mdash; Epictetus</title>
            </Head>
            <Container>
                <FeaturedPost />
                <div className='flex -mx-4 flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.id} className='md:w-4/12 w-full px-4 py-6'>
                            <CardPost {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
