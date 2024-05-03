import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Global/Navigation";
import BodyWrapper from "@/components/Global/BodyWrapper";
import MainWrapper from "@/components/Global/MainWrapper";
import Footer from "@/components/Global/Footer";

export const metadata: Metadata = {
  title: "Project Prototypes",
  description: "A NextJS project for rapid layout prototyping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <BodyWrapper>
        <Navigation />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </BodyWrapper>
    </html>
  );
}
