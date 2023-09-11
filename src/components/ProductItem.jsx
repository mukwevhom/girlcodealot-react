import { useEffect, useState } from "react"
import prodImg from "../assets/homepod-mini.png"

const ProdPrice = ({price}) => {
    const [intNum, setIntNum] = useState('00')
    const [centNum, setCentNum] = useState('00')

    useEffect(() => {
        if(price) {
            const priceArr = price.toString().split('.')

            setIntNum(priceArr[0] ?? '00')
            setCentNum(priceArr[1] ?? '00')
        }
        
    }, [price])    
    return (
        <>
            <span className="text-base align-text-top">R</span>{intNum}<span className="text-base align-text-top">.{centNum}</span>
        </>
    )
}

const ProductItem = ({prodInfo}) => {
    return (
        <div className="">
            <div className="rounded-xl bg-gray-200 overflow-hidden relative">
                <img src={prodImg} alt={prodInfo.fields.prod_name} className="w-full" />
                <div className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full text-center cursor-pointer hover:bg-red-400 ">
                    <span className="material-symbols-outlined leading-10">favorite</span>
                </div>
            </div>
            <div className="py-2">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">{prodInfo.fields.prod_name}</h3>
                    <div className="text-xl font-bold">
                        <ProdPrice price={prodInfo.fields.prod_price} />
                    </div>
                </div>
                <p className="text-sm mt-2">{prodInfo.fields.prod_desc}</p>
                <ul className="flex mt-2">
                    <li><span className="material-symbols-outlined">star</span></li>
                    <li><span className="material-symbols-outlined">star</span></li>
                    <li><span className="material-symbols-outlined">star</span></li>
                    <li><span className="material-symbols-outlined">star</span></li>
                    <li><span className="material-symbols-outlined">star</span></li>
                    <li>(121)</li>
                </ul>
                <button className="btn-atc">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;
