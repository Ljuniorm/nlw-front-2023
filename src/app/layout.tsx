import "./globals.css";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma cápsula do tempo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bai.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}