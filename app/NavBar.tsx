"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "@headlessui/react";
import {
  Bars2Icon,
  CalculatorIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const NavBar = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 overflow-hidden rounded-full group isolate">
        {/* // !TODO add correct animations for button background  */}
        <Bars2Icon className="w-6 h-6 text-gray-950" />
        <span
          aria-hidden
          className="absolute inset-0 transition-transform duration-300 ease-in scale-0 bg-highlight -z-10 group-hover:scale-100"
        />
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
                  "flex items-center px-6 py-3 text-gray-600",
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
                  "flex items-center px-6 py-3 text-gray-600",
                  active && "bg-blue-500 text-white"
                )}
              >
                <ArrowsUpDownIcon className="w-6 h-6 mr-4 rotate-90" />
                Converter
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </AnimatePresence>
    </Menu>
  );
};

export default NavBar;
