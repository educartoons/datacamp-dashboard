type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="bg-gray-100 min-h-screen">{children}</div>;
}

export { Layout };
