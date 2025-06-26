export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex overflow-hidden">
      {children}
    </div>
  );
}