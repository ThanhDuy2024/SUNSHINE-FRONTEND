/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "@/app/components/category/adminCategoryHeader";
import { postShipping } from "@/app/services/admins/ship/shipService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// đăng ký plugin
export default function Page() {
  const route = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const shippingName = e.target.shippingName.value;
    const shippingPrice = Number(e.target.shippingPrice.value);
    const shippingDuring = e.target.shippingDuring.value;
    const data = {
      shippingName: shippingName,
      shippingPrice: shippingPrice,
      shippingDuring: shippingDuring
    }

    const res = await postShipping(data);

    if(res.code === "success") {
      toast.success("Đăng ký nhà vận chuyển thành công!")
      route.push("/admin/ship/list");
    } else {
      toast.error("Tên nhà vận chuyển bị trùng!")
    }
  }
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            <AdminCategoryHeader
              title={"Đăng ký thông tin vận chuyển"}
              suptilte={"Quay lại danh sách"}
              link={"/admin/ship/list"}
            />
          </div>

          <form action="" className="p-4 border border-gray-500/20 rounded-2xl" onSubmit={handleSubmit}>
            <div className="text-lg font-bold mb-4 sm:mb-6">
              Các thông tin cần có
            </div>

            <div className="flex">
              <div className="w-full flex items-center">
                <div className="w-[90%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Tên nhà vận chuyển:
                  </label>
                  <input type="text" name="shippingName" placeholder="Nhập tên nhà vận chuyển....." className="input w-full outline-0 rounded-lg" required />
                </div>
              </div>

              <div className="w-full flex items-center">
                <div className="w-[90%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Giá vận chuyển:
                  </label>
                  <input type="text" name="shippingPrice" placeholder="Nhập giá vận chuyển..." className="input w-full outline-0 rounded-lg" required />
                </div>
              </div>
            </div>

            <div className="flex mt-2.5">
              <div className="w-full flex items-center">
                <div className="w-[45%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Thời gian vận chuyển trung bình:
                  </label>
                  <input type="text" name="shippingDuring" placeholder="Ví dụ: 1-3 (ngày)" className="input w-full outline-0 rounded-lg" required />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button className="btn btn-success text-white">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}