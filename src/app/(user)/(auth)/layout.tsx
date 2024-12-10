import BuyerLayout from "./buyer-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BuyerLayout>{children}</BuyerLayout>;
}
