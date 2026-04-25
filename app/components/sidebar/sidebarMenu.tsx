import AgentSideBar from "./agentSidebar";
import CategoriesSideBar from "./categoriesSidebar";
import ShippingSideBar from "./shippingSidebar";
import UserSidebar from "./userSidebar";

export default function SidebarMenu() {
  return (
    <>
      <div className="px-4 mb-6">
        <CategoriesSideBar />
      </div>

      <div className="px-4 mb-6">
        <AgentSideBar />
      </div>

      <div className="px-4 mb-6">
        <ShippingSideBar />
      </div>

      <div className="px-4 mb-6">
        <UserSidebar />
      </div>
    </>
  )
}