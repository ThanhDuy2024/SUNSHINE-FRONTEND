import { FaAngleRight } from "react-icons/fa6";
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiViewList } from "react-icons/ci";
export default function AgentSideBar() {
  return (
    <>
      <div className="text-[#E4D269] font-bold mb-3">QUẢN LÝ ĐẠI LÝ</div>
      <div className="flex justify-between items-center mb-3.75">
        <div className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <LiaStoreAltSolid size={22} />
          </div>
          <div className="">
            Danh sách đại lý
          </div>
        </div>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>

      <div className="flex justify-between items-center mb-3.75">
        <div className="text-white flex items-center gap-2.5 cursor-pointer hover:text-[#5ED9B1]">
          <div className="">
            <CiViewList size={22} />
          </div>
          <div className="">
            Đơn đăng ký đại lý
          </div>
        </div>
        <div className="text-white">
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}