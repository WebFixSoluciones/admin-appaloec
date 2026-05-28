export const metadata = {
  title: 'ALOEC Admin Panel',
  description: 'Admin Panel for ALOEC application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
