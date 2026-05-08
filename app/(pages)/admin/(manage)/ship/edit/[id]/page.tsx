/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "@/app/components/category/adminCategoryHeader";
import { detailShipping, updateShipping } from "@/app/services/admins/ship/shipService";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
// đăng ký plugin
export default function Page() {
  const route = useRouter();
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any | null>(null);
  const [status, setStatus] = useState('')
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const shippingName = e.target.shippingName.value;
    const shippingPrice = Number(e.target.shippingPrice.value);
    const shippingDuring = e.target.shippingDuring.value;
    const data = {
      shippingName: shippingName,
      shippingPrice: shippingPrice,
      shippingDuring: shippingDuring,
      status: status,
    }

    console.log(data);

    const res = await updateShipping(params.id, data);

    if (res.code === "success") {
      toast.success("Cập nhật nhà vận chuyển thành công!")
      route.push("/admin/ship/list");
    } else {
      toast.error("Tên nhà vận chuyển bị trùng!")
    }
  }

  useEffect(() => {
    const loadShiping = async () => {
      const shipping = await detailShipping(params.id);
      if (shipping.code === "error") {
        route.push("/admin/login")
      } else {
        setData(shipping.data);
        setStatus(shipping.data.status);
      }
    };
    loadShiping();
  }, [params.id, route]);

  console.log(data?.status);
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            <AdminCategoryHeader
              title={"Trang chỉnh sửa thông tin vận chuyển"}
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
                  <input type="text" name="shippingName" placeholder="Nhập tên nhà vận chuyển....." className="input w-full outline-0 rounded-lg" defaultValue={data?.shippingName ?? ''} required />
                </div>
              </div>

              <div className="w-full flex items-center">
                <div className="w-[90%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Giá vận chuyển:
                  </label>
                  <input type="text" name="shippingPrice" placeholder="Nhập giá vận chuyển..." className="input w-full outline-0 rounded-lg" required defaultValue={data?.shippingPrice ?? ''} />
                </div>
              </div>
            </div>

            <div className="flex mt-3.5">
              <div className="w-full flex items-center">
                <div className="w-[90%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Thời gian vận chuyển trung bình:
                  </label>
                  <input type="text" name="shippingDuring" placeholder="Ví dụ: 1-3 (ngày)" className="input w-full outline-0 rounded-lg" required defaultValue={data?.shippingDuring ?? ''} />
                </div>
              </div>

              <div className="w-full flex items-center">
                <div className="w-[90%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Cập nhật lần cuối:
                  </label>
                  <input type="text" name="lastUpdate" className="input w-full outline-0 rounded-lg" readOnly value={data?.createdAtFormat ?? ''} />
                </div>
              </div>
            </div>

            <div className="flex mt-3.5">
              <div className="w-full flex items-center">
                <div className="w-[45%]">
                  <label htmlFor="" className="block mb-2.5 font-bold">
                    Trạng thái:
                  </label>
                  <select value={data?.status} className="select w-full rounded-lg outline-0"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option disabled={true}>Trạng thái</option>
                    <option value={"active"}>Hoạt động</option>
                    <option value={"inactive"}>Dừng hoạt động</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button className="btn btn-success text-white">Chỉnh sửa thông tin</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}