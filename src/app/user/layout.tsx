interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {children}
    </div>
  );
}