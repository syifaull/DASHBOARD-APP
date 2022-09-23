import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  PencilSquareIcon,
  TrashIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Mentee = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-900 ">
        <SideBar />
        <div className="w-screen">
          <Header />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 py-10 mx-auto">
              <label className="block mt-4 text-sm mb-4">
                <div className=" text-gray-500 focus-within:text-purple-600 flex justify-end">
                  <input
                    className="block w-48 py-2 mr-3 text-sm text-gray-300 border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-gray form-input rounded-md placeholder:px-2"
                    placeholder="Search"
                  />
                  <button className="block px-4 mr-6 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-transparent border border-purple-600 rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-purple focus:shadow-outline-purple">
                    Search
                  </button>
                  <button
                    type="button"
                    className=" block px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Add New
                  </button>
                </div>
                
                <div className="text-gray-500 focus-within:text-purple-600 flex justify-end pt-5 pb-8">
                <button
                    type="button"
                    className=" block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Filter
                  </button>
                  <button
                    type="button"
                    className=" block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    Export
                  </button>
                </div>
              </label>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                        <th className="px-4 py-3 text-center">Name</th>
                        <th className="px-4 py-3 text-center">Email</th>
                        <th className="px-4 py-3 text-center">Class</th>
                        <th className="px-4 py-3 text-center">Status</th>
                        <th className="px-4 py-3 text-center">Category</th>
                        <th className="px-4 py-3 text-center">Gender</th>
                        <th className="px-4 py-3 text-center">Detail</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-700 bg-gray-800">
                      {/* {users.map((user) => {
                        return (
                          <> */}
                      <tr className="text-gray-400">
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center text-sm">
                            <p className="font-semibold">Bagas Dhitya</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center text-sm">
                          Bagasdhitya@gmail.com
                        </td>
                        <td className="px-4 py-3 text-center text-sm">FE-8</td>
                        <td className="px-4 py-3 text-center text-sm">
                          Graduated
                        </td>
                        <td className="px-4 py-3 text-center text-sm">IT</td>
                        <td className="px-4 py-3 text-center text-sm">Male</td>
                        <td className="px-4 py-3 text-center text-sm ">
                        <button
                              className="flex items-center justify-center px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Detail"
                            >
                              <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                            </button>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center space-x-4 text-sm">
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Edit"
                            >
                              <PencilSquareIcon className="w-5 h-5" />
                            </button>
                            <button
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                              aria-label="Delete"
                              // onClick={() => handleDeleteUser(user.id)}
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* </>
                        );
                      })} */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-gray-500 focus-within:text-purple-600 flex justify-end mt-6 gap-4">
                <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  <ChevronDoubleLeftIcon className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-none rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  <ChevronDoubleRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Mentee;