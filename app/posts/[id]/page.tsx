import {getPostById} from '@/app/db/queries/post';

export  default async function Page({params}:{params: {id:string}}){
    const post = await getPostById(parseInt(params.id));
    return(
        <main>
           
        </main>
    )
}