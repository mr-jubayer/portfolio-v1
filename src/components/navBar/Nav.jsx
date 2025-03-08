import { Link, useLocation } from "react-router";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Nav() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    {
      label: "Home",
      id: "932874987239784",
      path: location.pathname.includes("projects") ? "/" : "home",
    },
    { label: "About", id: "934539784", path: "about" },
    { label: "Projects", id: "932874939784", path: "projects" },
    { label: "Contact", id: "93287499784", path: "contact" },
  ];

  return (
    <header className="   bg-[#151418]">
      <nav className="py-3  z-40   max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14  ">
        <div className="flex justify-between items-center relative ">
          <div>
            <Link to={"/"}>
              <h2 className="font-bold text-2xl text-[#FAFAFA]">
                J <span className="text-5xl -mx-1  text-[#007BFF]">.</span> A
              </h2>
            </Link>
          </div>

          <div className="sm:block hidden">
            <ul className="flex ">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={
                    location.pathname.includes("projects")
                      ? "/"
                      : `#${link.path}`
                  }
                >
                  <li className="py-2 px-4 hover:opacity-70 cursor-pointer  text-base">
                    {link.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setOpenMenu(true)}
            className="sm:hidden cursor-pointer"
          >
            <HiMenuAlt1 className="text-[#FAFAFA]" size={24} />
          </button>
        </div>
        <div
          className={`${
            openMenu
              ? " top-0 left-0 h-screen w-full z-50  bg-[#151418]"
              : " -top-[950px] left-0 h-screen w-full z-50  bg-[#151418]"
          }   sm:hidden fixed transition-all ease-initial duration-500`}
        >
          <div className="flex justify-between py-3 mt-3  z-40  sticky top-0  max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14  mb-10">
            <div className="flex  w-full justify-end">
              <button
                className="s cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                <IoClose size={30} />
              </button>
            </div>
          </div>

          <div className="flex h-full  justify-center">
            <ul className="  p-5">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={
                    location.pathname.includes("projects")
                      ? "/"
                      : `#${link.path}`
                  }
                  onClick={() => setOpenMenu(false)}
                >
                  <li className="py-7 px-4 text-white  hover:opacity-50 cursor-pointer  text-xl text-center">
                    {link.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
