import { OrangeHeader } from "~/components/headers/orange-header";

export function Home() {
  return (
    <>
      <OrangeHeader />
      <div className="flex-row">
        <div className="flex flex-col font-[HeadlineA] text-[60px] bg-white text-[#6D6D6D] justify-center">
          <p className="flex-none justify-center">portrait photography</p>
          <p className="flex-none justify-center">somerville, ma</p>
        </div>
      </div>
    </>
  );
}
