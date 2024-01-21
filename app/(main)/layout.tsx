import NavigationHeader from "@/components/navigation/navigation-header";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[240px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <div className="md:pl-[240px]">
        <NavigationHeader />
      </div>
      <main className="md:pl-[240px] h-screen bg-zinc-50">{children}</main>
    </div>
  );
};

export default MainLayout;
