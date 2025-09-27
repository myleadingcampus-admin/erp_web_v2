import { Menu } from "./side-bar/menu";
import { SidebarToggle } from "./side-bar/sidebar-toggle";
import { useSidebar } from "../hooks/use-sidebar";
import { useStore } from "../hooks/use-store";
import { cn } from "../lib/utils";
import Logo from "../../src/assets/images/mlc-logo.png";

function Sidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar;

  const openState = getOpenState();

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-white dark:bg-zinc-900 rounded-md shadow-md"
        onClick={toggleOpen}
      >
        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
      </button>
      {openState && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleOpen}
        />
      )}
      <aside
        className={cn(
          "fixed lg:static top-0 left-0 z-20 h-screen bg-white dark:bg-zinc-900 transition-all duration-300 shadow-md",
          openState ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
          openState ? "lg:w-72" : "lg:w-[90px]",
          "w-72", 
          settings.disabled && "hidden"
        )}
      >
        <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />

        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="relative h-full flex flex-col px-3 py-4 overflow-y-auto lg:pl-3 pl-14" 
        >
          <a href="/dashboard" className="flex items-center gap-2 pl-4">
            <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
            <h1
              className={cn(
                "font-bold font-[inter] text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                !openState
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              MyLeading Campus
            </h1>
          </a>
          <Menu isOpen={openState} />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
