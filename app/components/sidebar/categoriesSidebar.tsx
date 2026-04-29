"use client"
import { MdOutlineCategory } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CategoriesSideBar() {
  const path = usePathname();
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ DANH MỤC</div>
      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/category/list"} className={
          "flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1] " +
          (path === "/admin/category/list"
            ? "text-[#5ED9B1]"
            : "text-white")
        }>
          <div className="">
            <MdOutlineCategory size={22} />
          </div>
          <div className="">
            Danh sách danh mục
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/category/create"} className={
          "flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1] " +
          (path === "/admin/category/create"
            ? "text-[#5ED9B1]"
            : "text-white")
        }>
          <div className="">
            <MdOutlineCreate size={22} />
          </div>
          <div className="">
            Tạo danh mục
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}