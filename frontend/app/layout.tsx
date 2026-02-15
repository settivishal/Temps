import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "My App",
  description: "Test frontend + backend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header appears on all pages */}
        <main>{children}</main>
      </body>
    </html>
  );
}
