import EditInvoiceForm from "@/app/ui/invoices/edit-form";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import {getUsers} from '@/app/db/queries/user';

export default async function Page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>Table Data</h1>
      {/* <p>Artacho, Sison, Pangasinan</p>  */}
      <div className="flex flex-col overflow-x-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">No.</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Course</th>
                    <th scope="col" className="px-6 py-4">Year</th>
                    <th scope="col" className="px-6 py-4">Time/Date</th>
                    <th scope="col" className="px-6 py-4">Purpose</th>
                    <th scope="col" className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>

                  {/* <tr className="border-b "> */}
                    {users.map(user => {
                      return <tr key = {user.id}>
                                  {/* {user.email} */}
                            
                      <td className="whitespace-nowrap px-6 py-4 font-medium ">{user.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.course}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.year_level}</td>
                      <td className="whitespace-nowrap px-6 py-4">{new Date(user.date).toLocaleDateString()}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.purpose}</td>
                      <td >
                          <dd><TrashIcon className="w-4 "></TrashIcon></dd>
                          <dd><PencilIcon className="w-4"></PencilIcon></dd>
                      </td>                                                                     
                      </tr> 
                    })}
                    {/* <td className="whitespace-nowrap px-6 py-4 font-medium ">{user.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">Dionece Mark Collano</td>
                    <td className="whitespace-nowrap px-6 py-4">BSIT</td>
                    <td className="whitespace-nowrap px-6 py-4">III</td>
                    <td className="whitespace-nowrap px-6 py-4">01/12/2024 - 01:12:02 </td>
                    <td className="whitespace-nowrap px-6 py-4">Borrowed</td>
                    <td ><TrashIcon className="w-4"></TrashIcon></td>
                    <td><PencilIcon className="w-4"></PencilIcon></td> */}
                  {/* </tr> */}
                </tbody>
              </table>
              {/* {users.map(user => {
                return <div key = {user.id}>
                            {user.name}
                      </div>
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}