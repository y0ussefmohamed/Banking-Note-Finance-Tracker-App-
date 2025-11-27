import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Youssef",
    lastName: "Mohamed",
    email: "contact@jsmastery.pro",
    userId: "user_1",
    $id: "user_1",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-01-01",
    ssn: "1234"
  };

  return (
    <main className="flex h-screen w-full font-inter"> 
      <Sidebar user={loggedIn}/>

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        
        {children}
      </div>

    </main>
  );
}

