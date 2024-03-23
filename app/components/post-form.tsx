'use client'


import Link from "next/link"
import { useFormState } from "react-dom"


// Define the shape of the form errors
interface FormErrors {
  title?: string[],
  content?: string[],
}


interface FormState {
  errors: FormErrors,
}


interface PostFormProps {
  formAction: any, // The action to perform when the form is submitted
  initialData: { // The initial data for the form fields
      title: string,
      content: string,
  },
}


export default function PostForm({ formAction, initialData }: PostFormProps) {
  // Initialize the form state and action
  const [formState, action] = useFormState<FormState>(formAction, {
      errors: {},
  })


  return <>
      <h1 className="text-3xl font-bold mb-6">{initialData.title ? 'Update' : 'Create'} Post</h1>
      <form action={action}>
          <div className="w-96">
              <div className="mb-4">
                  <label htmlFor="title" className="block mb-2">Title</label>
                  <input type="text" id="title" name="title" defaultValue={initialData.title} className="rounded p-2 w-full" />
                  {
                      formState.errors.title
                      && <div className="text-red-500">
                          {formState.errors.title?.join(', ')} 
                      </div>
                  }
              </div>
              <div className="mb-4">
                  <label htmlFor="content" className="block mb-2">Content</label>
                  <textarea id="content" name="content" defaultValue={initialData.content} className="rounded p-2 w-full"></textarea>
                  {
                      formState.errors.content
                      && <div className="text-red-500">
                          {formState.errors.content?.join(', ')} 
                      </div>
                  }
              </div>
              <div className="mb-4">
                  <button type="submit" className="bg-white px-4 py-2 rounded mr-2 hover:text-blue-600">Save</button>
                  <Link href="/dashboard" className="bg-transparent px-4 py-2 rounded hover:text-blue-600">Cancel</Link>
              </div>
          </div>
      </form>
  </>
}
