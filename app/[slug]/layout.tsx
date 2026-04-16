import LayoutWrapper from "@/components/Dashboard/LayoutWrapper";
import "../../styles/dashboard.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
