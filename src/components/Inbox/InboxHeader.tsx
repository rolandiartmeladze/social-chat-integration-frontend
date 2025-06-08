export default function InboxHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={`flex text-2xl justify-between items-center gap-3 p-4 ${className}`}>
      {children}
    </header>
  );
}

