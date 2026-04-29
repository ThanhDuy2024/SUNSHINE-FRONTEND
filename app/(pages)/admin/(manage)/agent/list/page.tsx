/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "../../../../../components/category/adminCategoryHeader"
import AdminCategorySearchFilter from "../../../../../components/category/adminCategorySearchFilter"
import Pagination from "../../../../../components/pagination/pagination"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import AdminAgentTable from "@/app/components/agent/adminAgentTable";
import { getAllAgent } from "@/app/services/admins/agent/agentService";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [check, setCheck] = useState<any>({});
  const router = useRouter()
  const statusCallBack = (value: any) => {
    setStatus(value);
    setPage(1)
  }

  const searchCallBack = (value: any) => {
    setSearch(value);
    setPage(1)
  }

  const checkStatusUpdate = async (
    data: any
  ) => {
    setCheck((prev: any) => ({
      ...prev,
      ...data,
    }));
  };
  useEffect(() => {
    const loadCategory = async () => {
      const category = await getAllAgent(search, status, page);
      if (category.code === "error") {
        router.push("/admin/login")
      } else {
        setData(category);
      }
    };

    loadCategory();
  }, [status, search, page, router, check]);
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            {/* Header */}
            <AdminCategoryHeader
              title={"Danh sách đại lý"}
              suptilte={"Đơn đăng ký đại lý"}
              link={"/admin/agent/document"}
            />
            {/* search and filter */}
            <AdminCategorySearchFilter
              statusCallBack={statusCallBack}
              searchCallBack={searchCallBack}
            />
          </div>
          <AdminAgentTable
            categories={data?.data || null}
            checkStatus={checkStatusUpdate}
          />
          <Pagination
            currentPage={page}
            totalPages={data?.totalPage || 1}
            onPageChange={setPage}
          />
        </div>
      </div>
    </>
  );
}