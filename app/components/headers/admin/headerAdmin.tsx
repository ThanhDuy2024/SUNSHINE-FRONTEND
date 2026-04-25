import { IoIosNotificationsOutline } from "react-icons/io";
import HeaderProfile from "./headerProfile";
export default function HeaderAdmin() {
  return (
    <>
      <div className="p-4 flex justify-end gap-2.5 items-center shadow-lg bg-white">
        <div className="cursor-pointer">
          <IoIosNotificationsOutline size={25} />
        </div>
        {/* Profile and pop-up */}
        <HeaderProfile />
      </div>
    </>
  )
}