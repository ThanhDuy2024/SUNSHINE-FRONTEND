import { FaAngleRight } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineCreate } from "react-icons/md";
import Link from "next/link";
export default function ShippingSideBar() {
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ VẬN CHUYỂN</div>
      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/ship/list"} className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <CiDeliveryTruck size={22} />
          </div>
          <div className="">
            Công ty vận chuyển
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between items-center mb-3.75">
        <Link href={"/admin/ship/create"} className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <MdOutlineCreate size={22} />
          </div>
          <div className="">
            Tạo công ty vận chuyển
          </div>
        </Link>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}