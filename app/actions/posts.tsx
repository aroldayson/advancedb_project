'use server'

import { db } from '@/app/db';
import { Post } from '@prisma/client'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Import the Zod library for validation
import { z } from 'zod'

const postSchema = z.object({
  // the title must be a string between 3 and 255 characters
  title: z.string().min(3).max(255),
  // the content must be a string between 10 and 4000 characters
  content: z.string().min(10).max(4000),
})

interface PostFormState {
  errors: {
      title?: string[],
      content?: string[],
      _form?: string[],
  }
}

export async function createPost( formState: PostFormState, formData: FormData): Promise<PostFormState> {
  const result = postSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  console.log(result)
  if (!result.success) {
    return {
        // The flatten method is used to convert the validation errors into a flat object structure 
        // that can be easily displayed in the form.
        errors: result.error.flatten().fieldErrors
    }
  }

  let post: Post
  try {
    // If validation passes, create a new post in the database
    post = await db.post.create({
        data: {
            title: result.data.title,
            content: result.data.content,
            authorId: 1,
            published: false,
        }
    })
  } catch (error: unknown) {
    // If there's an error, return it
    console.log(error)
    if (error instanceof Error) {
        return {
            errors: {
                _form: [error.message],
            },
        }
    }
    else {
        return {
            errors: {
                _form: ['Something went wrong'],
            },
        }
    }
  }

// Revalidate the path and redirect to the home page
revalidatePath('/')
redirect('/')

}