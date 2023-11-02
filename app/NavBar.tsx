"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "@headlessui/react";
import {
  Bars2Icon,
  CalculatorIcon,
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const NavBar = () => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            title={open ? "Close menu" : "Open menu"}
            className="relative p-2 overflow-hidden rounded-full hover:bg-gray-100 active:bg-gray-200 isolate text-headingText dark:text-darkHeadingText dark:hover:text-headingText"
          >
            <Bars2Icon className="w-6 h-6" />
          </Menu.Button>
          {open && (
            <AnimatePresence mode="wait">
              <Menu.Items
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0, y: "-70%" }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: "-70%" }}
                transition={{
                  type: "tween",
                  ease: "anticipate",
                  duration: 0.4,
                }}
                className="absolute flex flex-col overflow-hidden divide-y divide-gray-100 rounded-md bg-headerBackground dark:bg-darkHeaderBackground dark:divide-gray-100/20 right-4 top-14"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={clsx(
                        "flex items-center px-8 py-4 text-gray-600 dark:text-gray-200 transition-colors",
                        active && "bg-blue-600 dark:bg-blue-500 text-white"
                      )}
                    >
                      <HomeIcon className="w-6 h-6 mr-6" />
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/calculator"
                      className={clsx(
                        "flex items-center px-8 py-4 text-gray-600 dark:text-gray-200",
                        active && "bg-blue-600 dark:bg-blue-500 text-white"
                      )}
                    >
                      <CalculatorIcon className="w-6 h-6 mr-6" />
                      Calculator
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/converter"
                      className={clsx(
                        "flex items-center px-8 py-4 text-gray-600 dark:text-gray-200",
                        active && "bg-blue-600 dark:bg-blue-500 text-white"
                      )}
                    >
                      <ArrowsUpDownIcon className="w-6 h-6 mr-6 rotate-90" />
                      Converter
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/compliment"
                      className={clsx(
                        "flex items-center px-8 py-4 text-gray-600 dark:text-gray-200",
                        active && "bg-blue-600 dark:bg-blue-500 text-white"
                      )}
                    >
                      <Cog6ToothIcon className="w-6 h-6 mr-6" />
                      Compliment
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/settings"
                      className={clsx(
                        "flex items-center px-8 py-4 text-gray-600 dark:text-gray-200",
                        active && "bg-blue-600 dark:bg-blue-500 text-white"
                      )}
                    >
                      <Cog6ToothIcon className="w-6 h-6 mr-6" />
                      Settings
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </AnimatePresence>
          )}
        </>
      )}
    </Menu>
  );
};

export default NavBar;
