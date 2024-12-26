import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Accountant Software",
  description: "Track expenses, approve payments, and export reports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <nav className="w-64 bg-white shadow-md">
            <Navigation />
          </nav>
          <section className="flex-1 p-8 overflow-auto">{children}</section>
        </div>
      </body>
    </html>
  );
}
