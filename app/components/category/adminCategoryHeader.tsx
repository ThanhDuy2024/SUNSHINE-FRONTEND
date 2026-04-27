import Link from "next/link"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AdminCategoryHeader(props: any) {
  const { title, suptilte, link} = props
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="font-bold text-[20px]">{title}</div>
        <Link href={link} className="py-1 px-4 bg-[#069b9d] text-white font-bold rounded-2xl flex items-center cursor-pointer text-[14px] hover:bg-[#056D6E]">
          {suptilte}
        </Link>
      </div>
    </>
  )
}