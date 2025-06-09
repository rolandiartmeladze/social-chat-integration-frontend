export default function InboxHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={`flex justify-between items-center gap-3 p-4 ${className}`}>
      {children}
    </header>
  );
}

