/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "../../../../../components/category/adminCategoryHeader"
import AdminCategorySearchFilter from "../../../../../components/category/adminCategorySearchFilter"
import Pagination from "../../../../../components/pagination/pagination"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { getAgentDocument } from "@/app/services/admins/agent/agentService";
import AdminAgentDocumentTable from "@/app/components/agent/adminAgentDocument"

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

  const checkStatus = (data: any) => {
    setCheck((prev: any) => ({
      ...prev,
      ...data,
    }));
  }
  useEffect(() => {
    const loadCategory = async () => {
      const category = await getAgentDocument(search, page);
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
              title={"Đơn đăng ký đại lý"}
              suptilte={"Quay lại tranh danh sách đại lý"}
              link={"/admin/agent/list"}
            />
            {/* search and filter */}
            <AdminCategorySearchFilter
              statusCallBack={statusCallBack}
              searchCallBack={searchCallBack}
            />
          </div>
          <AdminAgentDocumentTable
            categories={data?.data || null}
            checkStatus={checkStatus} />
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