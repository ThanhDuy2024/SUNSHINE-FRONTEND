/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import noImage from "../../assets/imgs/noImage.png"
import { acceptOrDenyAgent } from "@/app/services/admins/agent/agentService";
import { toast } from "sonner";
export default function AdminAgentTable(props: any) {
  const { categories, checkStatus } = props;

  const handleStatusChange = async (
    currentStatus: string,
    id: any
  ) => {
    const newStatus =
      currentStatus === "active"
        ? "inactive"
        : "active";

    const data = {
      agentId: id,
      status: newStatus,
    };

    const res = await acceptOrDenyAgent(data);

    if (res.code === "success") {
      toast.success("Đã thay đổi trạng thái của đại lý");
      await checkStatus({
        id: id,
        status: newStatus
      });
    } else {
      toast.error("Thay đổi trạng thái thất bại");
    }
  };
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
                  Tên đại lý
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Hình ảnh
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Doanh thu
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Email tạo đại lý
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-muted-foreground-1 uppercase">
                  Cập nhật lần cuối
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
                    {item.agentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground text-center">
                    {item.image ? (
                      <div className="avatar">
                        <div className="w-12.5 rounded">
                          <img src={item?.image} />
                        </div>
                      </div>
                    ) : (
                      <div className="avatar">
                        <div className="w-12.5 rounded">
                          <img src={noImage.src} />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    {item.earnPrice}
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
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    {item.user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-orange-700">
                    {item.updatedAtFormat}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg hover:text-primary-hover focus:outline-hidden focus:text-primary-focus disabled:opacity-50 disabled:pointer-events-none text-center cursor-pointer gap-2.5"
                    >
                      <Link href={`/admin/agent/detail/${item.id}`} className="flex items-center p-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg">
                        <FaRegEye size={22} className="text-white" />
                      </Link>

                      <div className="flex items-center p-1.5 bg-orange-500 hover:bg-orange-600 rounded-lg" onClick={() => handleStatusChange(item.status, item.id)}>
                        <FaExchangeAlt size={22} className="text-white" />
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