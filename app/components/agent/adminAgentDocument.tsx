/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoBanOutline } from "react-icons/io5";
import noImage from "../../assets/imgs/noImage.png";
import { acceptOrDenyAgent } from "@/app/services/admins/agent/agentService";
import { toast } from "sonner";
import RejectPopup from "../popup/popupOne";

export default function AdminAgentDocumentTable(props: any) {
  const { categories, checkStatus } = props;

  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState<any>(null);

  const handleStatus = async (status: string, id: any) => {
    const data = {
      agentId: id,
      status: status,
    };

    const res = await acceptOrDenyAgent(data);

    if (res.code === "success") {
      toast.success(
        status === "active"
          ? "Chấp nhận thành công"
          : "Từ chối thành công"
      );
      checkStatus(id);
    } else {
      toast.error("Thao tác thất bại");
    }
  };

  const openPopup = (id: any) => {
    setSelectedId(id);
    setShowPopup(true);
  };

  const confirmDeny = async () => {
    await handleStatus("deny", selectedId);
    setShowPopup(false);
  };

  return (
    <>
      <div className="min-w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-table-line">
            <thead>
              <tr>
                <th className="px-6 py-3 text-center">ID</th>
                <th className="px-6 py-3 text-center">Tên đại lý</th>
                <th className="px-6 py-3 text-center">Hình ảnh</th>
                <th className="px-6 py-3 text-center">Doanh thu</th>
                <th className="px-6 py-3 text-center">Trạng thái</th>
                <th className="px-6 py-3 text-center">Email</th>
                <th className="px-6 py-3 text-center">Thời gian tạo</th>
                <th className="px-6 py-3 text-center">Hành động</th>
              </tr>
            </thead>

            <tbody>
              {categories?.map((item: any, index: any) => (
                <tr key={index}>
                  <td className="text-center py-4">{item.id}</td>
                  <td className="text-center">{item.agentName}</td>

                  <td className="text-center">
                    <div className="avatar">
                      <div className="w-12 rounded">
                        <img src={item.image || noImage.src} />
                      </div>
                    </div>
                  </td>

                  <td className="text-center">{item.earnPrice}</td>

                  <td className="text-center text-blue-600">
                    Đang chờ duyệt
                  </td>

                  <td className="text-center">{item.user.email}</td>

                  <td className="text-center text-orange-700">
                    {item.updatedAtFormat}
                  </td>

                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      {/* Chấp nhận */}
                      <div
                        className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer"
                        onClick={() =>
                          handleStatus("active", item.id)
                        }
                      >
                        <FaCheck
                          size={22}
                          className="text-white"
                        />
                      </div>

                      {/* Từ chối */}
                      <div
                        className="p-2 bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer"
                        onClick={() => openPopup(item.id)}
                      >
                        <IoBanOutline
                          size={22}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <RejectPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          onConfirm={confirmDeny}
        />
      )}
    </>
  );
}