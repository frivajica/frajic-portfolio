export const metadata = {
  title: "Frajic | Home",
  description: "Site's home page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>hi</nav>
      {children}
    </>
  );
}
