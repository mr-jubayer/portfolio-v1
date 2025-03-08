function PrimaryButton({ children, bg, text, size = 1, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className={`  ${size === 1 ? "py-3 px-8" : "py-1 px-3"} rounded-md ${
        text || "text-black"
      } ${
        bg || " bg-[#FAFAFA]   hover:bg-[#fafafaea]"
      }    my-6 text-sm  flex justify-center gap-2 items-center font-medium shadow-gray-700 cursor-pointer  relative disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
