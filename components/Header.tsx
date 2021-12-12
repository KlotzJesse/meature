import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, SupportIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const mainNav = [
  {
    name: "Home",
    href: "/",

    icon: SupportIcon,
  },
  {
    name: "Why?",
    href: "/why",

    icon: SupportIcon,
  },
  {
    name: "Contact",
    href: "/contact",

    icon: SupportIcon,
  },
];

const secondNav = [
  {
    name: "Lab grown Meat",
    href: "/lab",
  },
  {
    name: "Soy based Meat",
    href: "/soy",
  },
  {
    name: "Meat Substitutes",
    href: "/meat-substitutes",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const logo = (
    <Image
      layout="responsive"
      height="64"
      width="64"
      src="/logo.svg"
      alt="Meature Logo"
    />
  );

  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-between w-1/3 md:space-x-10">
            {mainNav.map((navElement) => {
              return (
                <Link key={navElement.name} href={navElement.href} passHref>
                  <span className="hidden text-base font-medium text-gray-500 cursor-pointer md:block hover:text-gray-900">
                    {navElement.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center w-1/3">
            <Link href="/" passHref>
              <div className="w-8 h-8 cursor-pointer">
                <span className="sr-only">Meature</span>
                {logo}
              </div>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="flex justify-between w-1/3 md:space-x-10">
            {secondNav.map((navElement) => {
              return (
                <Link key={navElement.name} href={navElement.href} passHref>
                  <span className="hidden text-base font-medium text-gray-500 cursor-pointer md:block hover:text-gray-900">
                    {navElement.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8">{logo}</div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mainNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                {secondNav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
