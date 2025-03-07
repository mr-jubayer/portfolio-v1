function SecondaryButton({ children, size = 1 }) {
  return (
    <button
      className={`  ${
        size === 1 ? "py-3 px-8" : "py-1 px-3"
      } rounded-md  border-1 border-white/20 hover:bg-[#fafafa1b]   my-6 text-sm flex justify-center gap-2 items-center font-medium shadow-gray-700 cursor-pointer  relative`}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
