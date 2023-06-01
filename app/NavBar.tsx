"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "@headlessui/react";
import {
  Bars2Icon,
  CalculatorIcon,
  ArrowsUpDownIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const NavBar = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 overflow-hidden rounded-full hover:bg-gray-100 active:bg-gray-200 isolate">
        <Bars2Icon className="w-6 h-6 text-gray-950" />
      </Menu.Button>
      <AnimatePresence>
        <Menu.Items
          as={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="absolute flex flex-col overflow-hidden bg-white divide-y divide-gray-100 rounded-md right-4 top-14"
        >
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/calculator"
                className={clsx(
                  "flex items-center px-8 py-4 text-gray-600",
                  active && "bg-blue-500 text-white"
                )}
              >
                <CalculatorIcon className="w-6 h-6 mr-4" />
                Calculator
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/converter"
                className={clsx(
                  "flex items-center px-8 py-4 text-gray-600",
                  active && "bg-blue-500 text-white"
                )}
              >
                <ArrowsUpDownIcon className="w-6 h-6 mr-4 rotate-90" />
                Converter
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/settings"
                className={clsx(
                  "flex items-center px-8 py-4 text-gray-600 border border-gray-100",
                  active && "bg-blue-500 text-white"
                )}
              >
                <Cog6ToothIcon className="w-6 h-6 mr-4" />
                Settings
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </AnimatePresence>
    </Menu>
  );
};

export default NavBar;
