/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "@/app/components/category/adminCategoryHeader";
// FilePond core
import { FilePond, registerPlugin } from "react-filepond";
import { FilePondFile } from "filepond";

// CSS
import "filepond/dist/filepond.min.css";

// Plugin preview ảnh
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// đăng ký plugin
registerPlugin(FilePondPluginImagePreview)

const postCategories = async (formData: any) => {
  const res = await fetch("http://localhost:4000/api/admin/category/create", {
    method: "POST",
    body: formData,
    credentials: "include"
  });

  const data = await res.json();

  return data;
}
export default function Page() {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const [status, setStatus] = useState('active');
  const route = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    const name = e.target.name.value;

    formData.append("categoryName", name);
    formData.append("status", status);
    if (files[0]?.file) {
      formData.append("image", files[0].file);
    }

    const res = await postCategories(formData);

    if(res.code === "success") {
      toast.success("Tạo danh mục thành công!")
      route.push("/admin/category/list");
    } else {
      toast.error("Danh mục đã bị trùng!")
    }
  }
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            <AdminCategoryHeader
              title={"Tạo mới danh mục"}
              suptilte={"Quay lại danh sách"}
              link={"/admin/category/list"}
            />
          </div>

          <form action="" className="p-4 border border-gray-500/20 rounded-2xl" onSubmit={handleSubmit}>
            <div className="text-lg font-bold mb-4 sm:mb-6">
              Các thông tin cần có
            </div>

            <div className="w-full flex items-center gap-[2%]">
              <div className="w-[49%]">
                <label htmlFor="" className="block mb-2.5 font-bold">
                  Tên danh mục:
                </label>
                <input type="text" name="name" placeholder="Nhập tên danh mục........" className="input w-full outline-0 rounded-lg" required />
              </div>

              <div className="w-[49%]">
                <label htmlFor="" className="block mb-2.5 font-bold">
                  Trạng thái:
                </label>
                <select defaultValue="active" className="select w-full rounded-lg outline-0"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option disabled={true}>Trạng thái</option>
                  <option value={"active"}>Hoạt động</option>
                  <option value={"inactive"}>Dừng hoạt động</option>
                </select>
              </div>
            </div>

            <div className="mt-10 cursor-pointer">
              <FilePond
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                name="file"
                labelIdle={`Chọn ảnh danh mục`}
                className="filepond-custom mt-10 cursor-pointer w-[50%]"
              />
            </div>

            <div className="flex justify-end mt-10">
              <button className="btn btn-success text-white">Tạo danh mục</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}