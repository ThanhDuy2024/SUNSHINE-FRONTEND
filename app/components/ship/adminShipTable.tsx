/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { GrEdit } from "react-icons/gr";
import { PiRecycleLight } from "react-icons/pi";
export default function AdminShipTable(props: any) {
  const { categories } = props;
  return (
    <>
      <div className="min-w-full">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
          <table className="min-w-full divide-y divide-table-line">
            <thead>
              <tr className="">
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Tên nhà vận chuyển
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Thời gian giao hàng
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Giá vận chuyển
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Người tạo
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Hành động
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-table-line">
              {categories?.map((item: any, index: any) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground text-center">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground text-center">
                    {item.shippingName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground text-center text-blue-500">
                    {item.shippingDuring} ngày
                  </td>
                  {item.status === "active" ? (
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-green-600">
                      Đang Hoạt Động
                    </td>
                  ) : (
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-red-600">
                      Ngừng hoạt động
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-orange-700">
                    {item.shippingPrice.toLocaleString("vi-VN")} đ
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    {item.createdByAdmin.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg hover:text-primary-hover focus:outline-hidden focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none text-center cursor-pointer gap-2.5"
                    >
                      <Link href={`/admin/ship/edit/${item.id}`} className="flex items-center">
                        <GrEdit size={22} className="hover:text-green-700" />
                      </Link>

                      <div className="flex items-center">
                        <PiRecycleLight size={22} className="hover:text-green-700" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}