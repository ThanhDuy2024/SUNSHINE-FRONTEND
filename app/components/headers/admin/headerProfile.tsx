/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../../assets/imgs/user_05.webp"
import { usePathname } from "next/navigation";
import { getProfileAdmin } from "@/app/services/admins/profile/profileService";
import { useRouter } from "next/navigation";
export default function HeaderProfile() {
  const [data, setData] = useState<any>(null);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const loadProfile = async () => {
      const profile = await getProfileAdmin();
      if(profile.code === "error") {
        router.push("/admin/login")
      } else {
        setData(profile);
      }
    };

    loadProfile();
  }, [pathName, router]);
  return (
    <>
      <div className="">
        {/* profile */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={data?.data?.image || logo}
              alt=""
              width={32}
              height={32}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
          <div className="">
            <div className="text-[14px] font-bold">{data?.data?.fullName || "Loading..."}</div>
            <div className="text-[12px]">Admin</div>
          </div>
          <div className="">
            <IoIosArrowDown size={25} />
          </div>
        </div>

        {/* Pop-up */}
      </div>
    </>
  )
}