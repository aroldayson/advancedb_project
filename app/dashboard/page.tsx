import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
export default function Page() {
    return(
        <div>
      <h1>Log in Record</h1>
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">Arold Ayson</td>
                    <td className="whitespace-nowrap px-6 py-4">BSIT</td>
                    <td className="whitespace-nowrap px-6 py-4">III</td>
                    <td className="whitespace-nowrap px-6 py-4">01/31/2024 - 12:30:01</td>
                    <td className="whitespace-nowrap px-6 py-4">Study</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                    <td className="whitespace-nowrap px-6 py-4">Arvin Ayson</td>
                    <td className="whitespace-nowrap px-6 py-4">BSIT </td>
                    <td className="whitespace-nowrap px-6 py-4">IV</td>
                    <td className="whitespace-nowrap px-6 py-4">02/03/2024</td>
                    <td className="whitespace-nowrap px-6 py-4">Tambay</td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                    <td className="whitespace-nowrap px-6 py-4">Dionece Mark Collano</td>
                    <td className="whitespace-nowrap px-6 py-4">BSIT</td>
                    <td className="whitespace-nowrap px-6 py-4">III</td>
                    <td className="whitespace-nowrap px-6 py-4">01/12/2024 - 01:12:02 </td>
                    <td className="whitespace-nowrap px-6 py-4">Borrowed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}