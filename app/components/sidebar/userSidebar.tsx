import { FaAngleRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
export default function UserSidebar() {
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ NGƯỜI DÙNG</div>
      <div className="flex justify-between items-center mb-3.75">
        <div className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <FaRegUser size={22} />
          </div>
          <div className="">
            Danh sách người dùng
          </div>
        </div>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}