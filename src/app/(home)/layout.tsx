import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export const metadata = {
  title: "Frajic | Home",
  description: "Site's home page",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
