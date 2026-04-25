import { MdOutlineCategory } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import Link from "next/link";
export default function CategoriesSideBar() {
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ DANH MỤC</div>
      <div className="flex justify-between items-center mb-3.75">
        <div className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <MdOutlineCategory size={22} />
          </div>
          <Link href={"/admin/category/list"} className="">
            Danh sách danh mục
          </Link>
        </div>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between items-center mb-3.75">
        <div className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <MdOutlineCreate size={22} />
          </div>
          <Link href={"/admin/category/create"} className="">
            Tạo danh mục
          </Link>
        </div>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}