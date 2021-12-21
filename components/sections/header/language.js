import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Language() {
  return (
    <Menu as="div" className="relative inline-block text-right border-x-4 border-solid border-light-blue">
      <Menu.Button className="inline-flex justify-center w-32 px-2 py-2">
        Language <ChevronDownIcon className="w-5 h-5 mt-1" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-light-grey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button className="flex w-full justify-center p-2">
                <Link
                  href="/"
                  locale="ru"
                  className={`${active && "bg-dark-blue"}`}
                >
                  <a>Русский</a>
                </Link>
              </button>
            )}
          </Menu.Item>
          <Menu.Item className="flex w-full justify-center p-2">
            {({ active }) => (
              <button>
                <Link
                  href="/"
                  locale="en"
                  className={`${active && "bg-dark-blue"}`}
                >
                  <a>English</a>
                </Link>
              </button>
            )}
          </Menu.Item>{" "}
          <Menu.Item className="flex w-full justify-center p-2">
            {({ active }) => (
              <button>
                <Link
                  href="/"
                  locale="tk"
                  className={`${active && "bg-dark-blue"}`}
                >
                  <a>Türkmençe</a>
                </Link>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Language;
