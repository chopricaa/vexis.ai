interface Props {
  children: React.ReactNode;
}

function MainPanel({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1050px]">
      {children}
    </div>
  );
}

export default MainPanel;   