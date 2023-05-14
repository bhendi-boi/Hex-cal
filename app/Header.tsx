import { Bars2Icon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center h-16 px-4 bg-white">
      <h1 className="mx-auto text-4xl font-extrabold text-brandColor">
        Hex Cal
      </h1>
      <button className="relative p-2 overflow-hidden rounded-full group isolate">
        {/* // !TODO add correct animations for button background  */}
        <Bars2Icon className="w-6 h-6 text-gray-950" />
        <span
          aria-hidden
          className="absolute inset-0 transition-transform duration-300 ease-in scale-0 bg-highlight -z-10 group-hover:scale-100"
        />
      </button>
    </header>
  );
};

export default Header;
