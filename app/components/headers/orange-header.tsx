export function OrangeHeader() {
  const orangeHexCode = "#D95A00";

  return (
    <div className="flex flex-col justify-center w-screen h-[120px] bg-[#D95A00]">
      <div className="flex justify-center w-screen space-x-[213px] font-mono">
        <a href="/home" className="flex-none text-[32px]">
          home
        </a>

        <a href="https://instagram.com" className="my-2">
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="28"
              rx="8"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="16" cy="15" r="7" stroke="white" strokeWidth="2.5" />
          </svg>
        </a>

        <a href="/book" className="flex-none text-[32px]">
          book
        </a>
      </div>
    </div>
  );
}
