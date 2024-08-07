import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-screen">
      <div className="hidden md:block md:w-64 fixed">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <Header />
        
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
