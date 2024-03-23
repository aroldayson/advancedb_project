import { getPost } from '@/app/db/queries/post';

export default async function page(){
    const posts = await getPost();

    return(
        <main>
            {posts.map(post =>{
                return <div key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.createdAt.toDateString()}</p>
                    <p>{post.updatedAt.toDateString()}</p>
                    <p>{post.title}</p>
                    <p>{post.published}</p>
                    <p>{post.authorId}</p>
                </div>
            })}
        </main>
    )
}