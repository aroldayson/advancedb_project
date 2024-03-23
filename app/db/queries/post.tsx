import { db } from '@/app/db';
import { Post } from '@prisma/client';
import {notFound} from 'next/navigation';

export async function getPost(): Promise<Post[]>{
    return await db.post.findMany();
}
export async function getPostById(id:number): Promise<Post | null>{
    const post = await db.post.findFirst({
        where: { id },
    });
    if(!post){
        notFound();
    }
    return post;
}
