import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    const imagePath = getImagePath(product.image)
    return (
        <div className=" border bg-white">

            <Image
                width={400}
                height={500}
                src={imagePath}
                alt="Imagen Platillo"
            // quality={75} manejar calidad de imagen (1 mala calidad y 100 mejor calidad/ 75 estandar de next)
            />

            <div className=" p-5">
                <h3 className=" text-2xl font-bold">{product.name}</h3>
                <p className=" mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductButton
                    product={product}
                />
            </div>
        </div>
    )
}
