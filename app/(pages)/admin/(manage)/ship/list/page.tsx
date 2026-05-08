/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "../../../../../components/category/adminCategoryHeader"
import AdminCategorySearchFilter from "../../../../../components/category/adminCategorySearchFilter"
import Pagination from "../../../../../components/pagination/pagination"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AdminShipTable from "@/app/components/ship/adminShipTable";
import { getAllShip } from "@/app/services/admins/ship/shipService";

export default function ShippingPage() {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<any>('');
  const [search, setSearch] = useState<any>(null);
  const [page, setPage] = useState(1);
  const router = useRouter()
  const statusCallBack = (value: any) => {
    setStatus(value);
    setPage(1)
  }

  const searchCallBack = (value: any) => {
    setSearch(value);
    setPage(1)
  }
  useEffect(() => {
    const loadCategory = async () => {
      const category = await getAllShip(search, status, page);
      if (category.code === "error") {
        router.push("/admin/login")
      } else {
        setData(category);
      }
    };

    loadCategory();
  }, [status, search, page, router]);
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            {/* Header */}
            <AdminCategoryHeader
              title={"Danh sách công ty vận chuyển"}
              suptilte={"Tạo công ty vận chuyển"}
              link={"/admin/ship/create"}
            />
            {/* search and filter */}
            <AdminCategorySearchFilter
              statusCallBack={statusCallBack}
              searchCallBack={searchCallBack}
            />
          </div>
          <AdminShipTable categories={data?.data || null} />
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