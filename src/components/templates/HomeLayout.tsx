import { Footer, Header, Sidebar } from '../organisms';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Sidebar />
      <Footer />
    </>
  );
}
