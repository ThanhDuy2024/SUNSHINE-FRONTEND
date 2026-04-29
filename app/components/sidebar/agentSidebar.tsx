"use client"
import { FaAngleRight } from "react-icons/fa6";
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiViewList } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AgentSideBar() {
  const path = usePathname();
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ ĐẠI LÝ</div>
      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/agent/list"} className={
          "flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1] " +
          (path === "/admin/agent/list"
            ? "text-[#5ED9B1]"
            : "text-white")
        }>
          <div className="">
            <LiaStoreAltSolid size={22} />
          </div>
          <div className="">
            Danh sách đại lý
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/agent/document"} className={
          "flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1] " +
          (path === "/admin/agent/document"
            ? "text-[#5ED9B1]"
            : "text-white")
        }>
          <div className="">
            <CiViewList size={22} />
          </div>
          <div className="">
            Đơn đăng ký đại lý
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}