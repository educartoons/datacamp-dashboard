import { Header } from "../Header/Header";
import { LeftNavigation } from "../LeftNavigation/LeftNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <LeftNavigation />
      {children}
    </div>
  );
}

export { Layout };
