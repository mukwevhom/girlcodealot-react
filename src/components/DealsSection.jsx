import { useState, useEffect } from "react"
import ProductItem from "./ProductItem"

const DealsSection = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/products/")
            .then(resp => resp.json())
            .then(resp => {
                setProdList(resp.products)
            }).catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <section className="pt-24">
            <div className="container mx-auto">
                <div className="mb-7">
                    <h2 className="font-extrabold text-3xl">Todays Best Deals For You!</h2>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    { prodList.map(prod => <ProductItem key={prod.pk} prodInfo={prod} />) }
                    {/* <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem /> */}
                </div>
            </div>
        </section>
    )
}

export default DealsSection
