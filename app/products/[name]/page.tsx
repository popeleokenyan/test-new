import { ProductDetails } from "@/components/ProductDetails";
import { allproducts, featuredProducts } from "@/data/app-data";

export const dynamicParams = false;

export async function generateStaticParams() {
    const products = [...allproducts, ...featuredProducts];

  return products.map((product: { name: string }) => ({
    name: product.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ name: string }> }) { 
    const { name } = await params;        
    return (
        <ProductDetails name={name} />
    );
}