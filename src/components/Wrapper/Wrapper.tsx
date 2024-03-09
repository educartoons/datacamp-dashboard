type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <div className="mx-auto w-[1200px] max-w-full">{children}</div>;
}

export { Wrapper };
