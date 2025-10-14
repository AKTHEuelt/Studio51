import { ReactNode } from "react";
import { Bebas_Neue } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry"; // Corrected path
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

interface RootLayoutProps {
  children: ReactNode;
}

// Updated Metadata for SEO to reflect Studio 51's mission
export const metadata = {
  title: "Studio 51 - Musikk, Fellesskap og Mestring",
  description:
    "Studio 51 i Sandvika, Bærum Kommune - et kreativt fristed for musikkproduksjon, tekstskriving og mestring gjennom Rap Clinic. Støtter mental helse og recovery.",
  keywords:
    "Studio 51, Rap Clinic, Sandvika, Bærum Kommune, musikkproduksjon, recovery, mental helse, rusmestring, kreativitet, musikkstudio, innspilling, fellesskap, inkludering, ungdom",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="no">
      <head>
        {/* The metadata object above handles these tags automatically, but updating them as requested */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Studio 51 - Musikk, Fellesskap og Mestring"
        />
        <meta
          name="description"
          content="Studio 51 i Sandvika, Bærum Kommune - et kreativt fristed for musikkproduksjon, tekstskriving og mestring gjennom Rap Clinic. Støtter mental helse og recovery."
        />
        <meta
          name="keywords"
          content="Studio 51, Rap Clinic, Sandvika, Bærum Kommune, musikkproduksjon, recovery, mental helse, rusmestring, kreativitet, musikkstudio, innspilling, fellesskap, inkludering, ungdom"
        />

        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3423EF1KKM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3423EF1KKM');
            `,
          }}
        />
      </head>
      <body className={`${bebas.className} antialiased`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
