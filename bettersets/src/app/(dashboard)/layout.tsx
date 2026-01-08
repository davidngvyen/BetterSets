import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { PixelClouds } from "@/components/PixelClouds";
import { AppProvider } from "@/components/providers/AppProvider";
import { auth } from "@/lib/auth"; // Assuming auth helper exists
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();

  // if (!session?.user) {
  //   redirect("/");
  // }

  // Transform session user to AppUser format if needed
  const appUser = {
    id: "guest-user",
    name: "Guest Warrior",
    email: "guest@example.com",
    image: null,
    // Add other fields from DB if we fetch extended profile
  };

  return (
    <AppProvider initialUser={appUser}>
      <div className="min-h-screen bg-background">
        <PixelClouds />
        <AppSidebar />
        <main className="lg:pl-56">
          <div className="px-4 py-6 sm:px-6 lg:px-8 relative z-10">
            {children}
          </div>
        </main>
        <MobileNav />
      </div>
    </AppProvider>
  );
}
