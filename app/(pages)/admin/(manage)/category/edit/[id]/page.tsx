/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AdminCategoryHeader from "@/app/components/category/adminCategoryHeader";
// FilePond core
import { FilePond, registerPlugin } from "react-filepond";
// CSS
import "filepond/dist/filepond.min.css";

// Plugin preview ảnh
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { getCategoryDetail, updateCategory } from "@/app/services/admins/categories/categoryService";

// đăng ký plugin
registerPlugin(FilePondPluginImagePreview)

export default function Page() {
  const [files, setFiles] = useState<any[]>([]);
  const [status, setStatus] = useState('active');
  const [category, setCategory] = useState<any | null>("");
  const route = useRouter();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const loadCategory = async () => {
      const res = await getCategoryDetail(params.id);
      if (res.code === "success") {
        console.log(res.data);
        setCategory(res.data);

        setFiles([
          {
            source: res.data.image,
            options: {
              type: "local"
            }
          }
        ]);
      } else {
        toast.error("Không tìm thấy thông tin");
        route.push("/admin/category/list");
      }
    };
    loadCategory();
  }, [params.id, route]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    const name = e.target.name.value;

    formData.append("categoryName", name);
    formData.append("status", status);
    if (files[0]?.file) {
      formData.append("image", files[0].file);
    }

    const res = await updateCategory(formData, params.id);

    if(res.code === "success") {
      toast.success("Cập nhật danh mục thành công!")
      route.push("/admin/category/list")
    } else {
      toast.error("Cập nhật danh mục thất bại")
    }
  }
  return (
    <>
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="p-6">
            <AdminCategoryHeader
              title={"Chỉnh sửa danh mục"}
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
                <input type="text" name="name" placeholder="Nhập tên danh mục........" className="input w-full outline-0 rounded-lg" required defaultValue={category?.categoryName || ""} />
              </div>

              <div className="w-[49%]">
                <label htmlFor="" className="block mb-2.5 font-bold">
                  Trạng thái:
                </label>
                <select defaultValue={category?.status} className="select w-full rounded-lg outline-0"
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
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                name="file"
                labelIdle={`Chọn ảnh danh mục`}
                className="filepond-custom mt-10 cursor-pointer w-[50%]"
                server={{
                  load: (source, load, error, progress, abort) => {
                    fetch(source)
                      .then((res) => res.blob())
                      .then((blob) => load(blob))
                      .catch(() => error("Không tải được ảnh"));

                    return {
                      abort: () => abort(),
                    };
                  },
                }}
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