import { headers } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get("cookies") || "";
  const MyComponent = children;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
