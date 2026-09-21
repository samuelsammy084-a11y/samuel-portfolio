import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Ndlovu | Creative Designer & Web Developer",
  description:
    "Samuel Ndlovu — Creative Designer, Web Developer, Digital Marketer and Media Production professional based in Johannesburg, South Africa.",
  keywords: [
    "Samuel Ndlovu",
    "Graphic Designer",
    "Web Developer",
    "Next.js Developer",
    "Digital Marketer",
    "Brand Designer",
    "Johannesburg Designer",
    "South Africa Web Developer",
    "Media Production",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}