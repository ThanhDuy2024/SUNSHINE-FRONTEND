'use client'
import AdminCategoryTable from "../../../../../components/category/adminCategoryTable"
import AdminCategoryHeader from "../../../../../components/category/adminCategoryHeader"
import AdminCategorySearchFilter from "../../../../../components/category/adminCategorySearchFilter"
import { getAllCategory } from "../../../../../services/admins/categories/categoryService";
import Pagination from "../../../../../components/pagination/pagination"
import { useEffect, useState } from "react"

export default function CategoryPage() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const statusCallBack = (value) => {
    setStatus(value);
    setPage(1)
  }

  const searchCallBack = (value) => {
    setSearch(value);
    setPage(1)
  }
  useEffect(() => {
    const loadCategory = async () => {
      const category = await getAllCategory(status, search, page);
      if (category.code === "error") {
        router.push("/admin/login")
      } else {
        setData(category);
      }
    };

    loadCategory();
  }, [status, search, page]);
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            {/* Header */}
            <AdminCategoryHeader
              title={"Danh sách danh mục"}
              suptilte={"Tạo danh mục"}
              link={"/admin/category/create"}
            />
            {/* search and filter */}
            <AdminCategorySearchFilter
              statusCallBack={statusCallBack}
              searchCallBack={searchCallBack}
            />
          </div>
          <AdminCategoryTable categories={data?.data || null} />
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