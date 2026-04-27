import AgentSideBar from "./agentSidebar";
import CategoriesSideBar from "./categoriesSidebar";
import ShippingSideBar from "./shippingSidebar";
import UserSidebar from "./userSidebar";

export default function SidebarMenu() {
  return (
    <>
      <div className="px-4 mb-6 bg-[#04535C]">
        <CategoriesSideBar />
      </div>

      <div className="px-4 mb-6 bg-[#04535C]">
        <AgentSideBar />
      </div>

      <div className="px-4 mb-6 bg-[#04535C]">
        <ShippingSideBar />
      </div>

      <div className="px-4 mb-6 bg-[#04535C]">
        <UserSidebar />
      </div>
    </>
  )
}