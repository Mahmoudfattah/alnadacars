


// CarBrandsSection.tsx
// Source: Figma — "Unique" (Premium Car Rental) file, node 2:35 "Section - Car brands"
// https://www.figma.com/design/QTZnLEbv3Iw6GnufRd4mSr/Untitled?node-id=2-4
//
// NOTE: the logo image URLs below point to Figma's temporary asset host and
// expire ~7 days after export. Download them and place under /public/brands/
// then swap the `src` values before shipping to production. Direct download
// links (valid now):
//   Lamborghini : https://www.figma.com/api/mcp/asset/de1594f1-2695-4824-ae0a-5f70a4e5b9a3.svg
//   BMW         : https://www.figma.com/api/mcp/asset/7d5df9e1-0334-47a5-8c5a-ff59206016e7.svg
//   Tesla       : https://www.figma.com/api/mcp/asset/048a4abe-61cc-4aaf-9aa2-96013514640c.svg
//   Cadillac    : https://www.figma.com/api/mcp/asset/e6a7b775-cec8-465d-b4dd-20496a9c52b7.svg
//   Porsche     : https://www.figma.com/api/mcp/asset/e07f6752-db3e-4bc3-be4a-9e5491a21707.svg
//   Mercedes    : https://www.figma.com/api/mcp/asset/4563a35f-8593-4da4-8eea-b5275128a3e6.svg
//   Lexus       : https://www.figma.com/api/mcp/asset/31ef2c4d-1be8-42cd-a713-26aa1fa571fc.svg
//   Ferrari     : https://www.figma.com/api/mcp/asset/22618255-f70d-4972-a8fc-f4d60eb8711a.svg
//   Next arrow  : https://www.figma.com/api/mcp/asset/43ffc2ee-3a44-488b-8fee-889a195b3c8c.svg
 'use client'
import { useState } from "react";

const imgLamborghini = "https://www.figma.com/api/mcp/asset/de1594f1-2695-4824-ae0a-5f70a4e5b9a3.svg";
const imgBmw = "https://www.figma.com/api/mcp/asset/7d5df9e1-0334-47a5-8c5a-ff59206016e7.svg";
const imgTesla = "https://www.figma.com/api/mcp/asset/048a4abe-61cc-4aaf-9aa2-96013514640c.svg";
const imgCadillac = "https://www.figma.com/api/mcp/asset/e6a7b775-cec8-465d-b4dd-20496a9c52b7.svg";
const imgPorsche = "https://www.figma.com/api/mcp/asset/e07f6752-db3e-4bc3-be4a-9e5491a21707.svg";
const imgMercedes = "https://www.figma.com/api/mcp/asset/4563a35f-8593-4da4-8eea-b5275128a3e6.svg";
const imgLexus = "https://www.figma.com/api/mcp/asset/31ef2c4d-1be8-42cd-a713-26aa1fa571fc.svg";
const imgFerrari = "https://www.figma.com/api/mcp/asset/22618255-f70d-4972-a8fc-f4d60eb8711a.svg";
const imgNext = "https://www.figma.com/api/mcp/asset/43ffc2ee-3a44-488b-8fee-889a195b3c8c.svg";

interface Brand {
  id: string;
  name: string;
  src: string;
  /** aspect ratio width/height, taken from the Figma frame */
  ratio: number;
}

const BRANDS: Brand[] = [
  { id: "lamborghini", name: "Lamborghini", src: imgLamborghini, ratio: 32.759 / 38 },
  { id: "bmw", name: "BMW", src: imgBmw, ratio: 1 },
  { id: "tesla", name: "Tesla", src: imgTesla, ratio: 39.689 / 38 },
  { id: "cadillac", name: "Cadillac", src: imgCadillac, ratio: 40.036 / 38 },
  { id: "porsche", name: "Porsche", src: imgPorsche, ratio: 38.22 / 42 },
  { id: "mercedes-benz", name: "Mercedes-Benz", src: imgMercedes, ratio: 38.731 / 38 },
  { id: "lexus", name: "Lexus", src: imgLexus, ratio: 52.682 / 38 },
  { id: "ferrari", name: "Ferrari", src: imgFerrari, ratio: 24.475 / 38 },
];

export default function CarBrandsSection() {
  // Porsche starts active/highlighted, exactly as designed in Figma.
  const [activeId, setActiveId] = useState<string>("porsche");

  const handleNext = () => {
    const currentIndex = BRANDS.findIndex((b) => b.id === activeId);
    const nextIndex = (currentIndex + 1) % BRANDS.length;
    setActiveId(BRANDS[nextIndex].id);
  };

  return (
    <div className="flex items-center justify-between pl-24 pr-24 pt-[60px]">
          <button
        type="button"
        onClick={handleNext}
        aria-label="Next brand"
        className="flex size-[38px] shrink-0 items-center justify-center rounded-[19px] border border-[#e6e6e6] transition-colors hover:border-[#111]"
      >
        <img src={imgNext} alt="" className="size-[14px]" />
      </button>
      {BRANDS.map((brand) => {
        const isActive = brand.id === activeId;
        return (
          <button
            key={brand.id}
            type="button"
            onClick={() => setActiveId(brand.id)}
            onMouseEnter={() => setActiveId(brand.id)}
            aria-pressed={isActive}
            aria-label={brand.name}
            className={[
              "flex shrink-0 items-center justify-center rounded-[14px] transition-all duration-300",
              isActive
                ? "size-[70px] border border-[#eee] bg-white shadow-[0px_6px_18px_0px_rgba(0,0,0,0.05)]"
                : "size-[70px] border border-transparent bg-transparent shadow-none",
            ].join(" ")}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className={[
                "block max-w-none transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-85",
              ].join(" ")}
              style={{ height: 38, width: 38 * brand.ratio }}
            />
          </button>
        );
      })}

    
    </div>
  );
}