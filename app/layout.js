import "./globals.css";

export const metadata = {
  title: "Pittsburgh Bachelor Trip",
  description: "Pittsburgh bachelor trip itinerary — August 6–9, 2026."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
