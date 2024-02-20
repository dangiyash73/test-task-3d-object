import React, { useState } from "react";
import AutocompleteSearch from "../utils/AutocompleteSearch";
import Modal3D from "../Modal/Modal3D";
import { DataProps, listItems } from "../../utils";

const Dashboard: React.FC<DataProps> = ({
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragStart,
  onDrop,
  onDragOver,
  objOnWindow,
  pending,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSidebarItemClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <>
      <div className="bg-gray-100  overflow-hidden h-screen">
        <div
          id="sidenav-2"
          className="fixed left-0 top-0 z-[1035] h-screen w-12  overflow-hidden bg-white  flex justify-center"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-mode="side"
          data-te-sidenav-content="#content"
        >
          <ul
            className=" relative m-0 list-none  self-center flex flex-col"
            data-te-sidenav-menu-ref
          >
            {listItems.map((item, index) => (
              <li className="self-center my-3" key={index}>
                {item.id === 3 ? (
                  <button
                    className={`cursor-pointer ${
                      isClicked ? "text-red-600" : ""
                    }`}
                    onClick={handleSidebarItemClick}
                  >
                    {item.icon}
                  </button>
                ) : (
                  <button className="cursor-pointer">{item.icon}</button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full bg-[#F1F4FA] overflow-hidden pl-12">
          <nav className="bg-white">
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <a href="/"
                        className="rounded-md px-3 py-2 text-sm font-semibold text-red-700"
                        aria-current="page"
                      >
                        CereBital
                      </a>
                      <span className="ml-3 self-center text-gray-300">|</span>
                      <a
                        href="/"
                        className="text-gray-300 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {" "}
                        Workspace Test{" "}
                      </a>
                      <span className="ml-3 self-center text-gray-300">|</span>
                      <a
                        href="/"
                        className="text-gray-300 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {" "}
                        Dashboard 1
                      </a>
                    </div>
                  </div>
                  <AutocompleteSearch
                    onDragEnd={onDragEnd}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    pending={pending}
                  />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div
            id="content"
            className="relative w-full h-screen overflow-y-auto  bg-[#F1F4FA]"
          >
            <main>
              <div className="mx-auto max-w-7xl sm:px-1 lg:px-1">
                {isClicked && (
                  <Modal3D
                    onDragEnd={onDragEnd}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    objOnWindow={objOnWindow}
                    pending={pending}
                  />
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
