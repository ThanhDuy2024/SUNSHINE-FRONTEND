import Image from "next/image";
import logo from "../../assets/imgs/logo-white.svg";
import { RxDashboard } from "react-icons/rx";
import SidebarMenu from "./sidebarMenu";
import Link from "next/link";
export default function SiderBarAdmin() {
  return (
    <>
      <div className="">
        <div className="p-4">
          <Image src={logo} alt="Logo" width={114} height={37} loading="eager"/>
        </div>

        <div className="p-4">
          <div className="py-2 px-4 flex items-center gap-2.5 text-white cursor-pointer bg-[#056D6E] rounded-lg mb-6">
            <div className="">
              <RxDashboard size={22} />
            </div>
            <Link href={"/admin/dashboard"} className="">Trang tổng quan</Link>
          </div>

          <SidebarMenu/>

        </div>
      </div>
    </>
  );
}