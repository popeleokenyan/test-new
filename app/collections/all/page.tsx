import { AllProducts } from "@/components/AllProducts";

const products = [
  {
    id: 1,
    name: "Apex beyond ZEE TILE",
    category: "Apex beyond MABATI",
    price: 491.0,
    url: "https://www.royalmabati.com/cdn/shop/files/RoyalZeetileBrickRedMatteFinish.G28.png?v=1718113507&width=533",
  },
  {
    id: 2,
    name: "Apex beyond StrucTex Roof Iron coloured",
    category: "Apex beyond MABATI",
    price: 30222.0,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-31_at_4.51.47_PM_1.jpg?v=1722434283&width=533",
  },
  {
    id: 3,
    name: "Apex beyond AlumZinc Corrugated Fiber Cement",
    category: "Apex beyond MABATI",
    price: 10333.0,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-07-31_at_4.51.46_PM.jpg?v=1722434386&width=533",
  },
  {
    id: 4,
    name: "Apex beyond Box Profile",
    category: "Apex beyond MABATI",
    price: 10222.0,
    url: "https://www.royalmabati.com/cdn/shop/files/RoyalBoxProfileCharcoalGrey.G30.png?v=1722583639&width=533",
  },
  {
    id: 5,
    name: "Apex beyond MIXCOLOR",
    category: "Apex beyond MABATI",
    price: 34003.0,
    url: "https://www.royalmabati.com/cdn/shop/files/RoyalBrickTileCharcoalGreyMatteFinish.G28.png?v=1718111262&width=533",
  },
  {
    id: 6,
    name: "Apex beyond CORRUGATED COLOURED ROOFING",
    category: "Apex beyond MABATI",
    price: 10222.02,
    url: "https://www.royalmabati.com/cdn/shop/files/CorrugatedDBG.jpg?v=1760206997&width=1445",
  },
  {
    id: 7,
    name: "Apex beyond EBMD TILES",
    category: "Apex beyond MABATI",
    price: 34003.0,
    url: "https://www.royalmabati.com/cdn/shop/files/RoyalEurotileCharcoalGreyG28.png?v=1718111776&width=1946",
  },
  {
    id: 8,
    name: "Apex beyond CUSTOM CHANNELS",
    category: "Apex beyond MABATI",
    price: 10000.0,
    url: "https://www.royalmabati.com/cdn/shop/files/RMFL-GYPSUMCHANNELS.jpg?v=1718111899&width=1946",
  },
  {
    id: 9,
    name: "Apex beyond IN ALABASTER",
    category: "Apex beyond MABATI",
    price: 12022.02,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsApp_Image_2024-06-25_at_2.40.42_PM.jpg?v=1719315845&width=1946",
  },
  {
    id: 10,
    name: "Apex beyond ROLL TOPS",
    category: "Apex beyond MABATI",
    price: 6019.02,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsAppImage2024-06-13at9.21.17AM.jpg?v=1718350297&width=1946",
  },
  {
    id: 11,
    name: "Apex beyond ROMANIAC TILES",
    category: "Apex beyond MABATI",
    price: 34003.0,
    url: "https://www.royalmabati.com/cdn/shop/files/Royal_RomanTile_Brick_Red_Matte_Finish._G28.png?v=1718114321&width=1946",
  },
  {
    id: 12,
    name: "Apex beyond ROOFING NAILS",
    category: "Apex beyond MABATI",
    price: 10230.0,
    url: "https://www.royalmabati.com/cdn/shop/files/roofing-nails.png?v=1718190051&width=1946",
  },
  {
    id: 13,
    name: "Apex beyond RUBBER WASHERS",
    category: "Apex beyond MABATI",
    price: 3023.0,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsAppImage2024-06-11at4.06.16PM.jpg?v=1719496988&width=1946",
  },
  {
    id: 14,
    name: "Apex beyond STONE COATED CLASSIC II",
    category: "Apex beyond MABATI",
    price: 90003.0,
    url: "https://www.royalmabati.com/cdn/shop/files/classic.jpg?v=1721905475&width=1946",
  },
  {
    id: 15,
    name: "Apex beyond STONE COATED SHINGLE",
    category: "Apex beyond MABATI",
    price: 90003.0,
    url: "https://www.royalmabati.com/cdn/shop/files/Royal_shingle.jpg?v=1721906005&width=1946",
  },
  {
    id: 16,
    name: "Apex beyond TIMBERS",
    category: "Apex beyond MABATI",
    price: 4040.25,
    url: "https://www.royalmabati.com/cdn/shop/files/WhatsAppImage2024-06-11at10.56.30PM_2_d474bd93-e653-4d90-b52e-ffa071b1e7a0.jpg?v=1718136302&width=1946",
  },
  {
    id: 17,
    name: "Apex beyond VALLEYS",
    category: "Apex beyond MABATI",
    price: 10222.02,
    url: "https://www.royalmabati.com/cdn/shop/files/Valley.png?v=1718094819&width=1946",
  },
  {
    id: 18,
    name: "Apex beyond WEDGE RIDGE CAPS",
    category: "Apex beyond MABATI",
    price: 6019.02,
    url: "https://www.royalmabati.com/cdn/shop/files/Ridge-Cap.png?v=1718094803&width=1946",
  },
];

export default function Page() {
  return (
    <AllProducts products={products} />
  );
}
