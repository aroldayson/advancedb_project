import { db } from '@/app/db';
import { User } from '@prisma/client';

export async function getUsers(): Promise<User[]>{
    return await db.user.findMany();
}
