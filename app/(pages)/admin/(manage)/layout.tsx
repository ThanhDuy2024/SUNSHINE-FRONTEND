import HeaderAdmin from "@/app/components/headers/admin/headerAdmin";
import SiderBarAdmin from "@/app/components/sidebar/sidebar";
import { Toaster } from "sonner";
// app/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[20%] border-r bg-[#04535C] min-h-screen">
        <SiderBarAdmin />
      </div>
      <div className="flex-1 min-h-screen">
        <HeaderAdmin />
        <div className="w-full min-h-screen bg-[#EBF8F2]">
          {children}
          <Toaster
            position="top-right"
            richColors
            expand={true}
            duration={3000}
          />
        </div>
      </div>
    </div>
  );
}