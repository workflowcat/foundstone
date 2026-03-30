export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Override root layout's nav/footer — v2 is self-contained
  return <>{children}</>;
}
