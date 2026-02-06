import { AllProducts } from "@/components/AllProducts";
import { allproducts } from "@/data/app-data";

export default function Page() {
  return (
    <AllProducts products={allproducts} />
  );
}
