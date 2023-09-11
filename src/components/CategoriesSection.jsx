import { useState, useEffect } from "react"

const CategoriesSection = () => {

    const [ catList, setCatList ] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/categories/")
            .then(resp => resp.json())
            .then(resp => {
                setCatList(resp.categories)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <section className="pt-24">
            <div className="container mx-auto">
                <div className="mb-7">
                    <h2 className="font-extrabold text-3xl">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6 gap-6">
                    {
                        catList.map(cat => (
                            <div className="rounded-xl overflow-hidden relative before:block before:w-full before:h-full before:absolute before:bg-white before:bg-opacity-30" key={cat.pk}>
                                <img src={cat.fields.cat_img} alt={cat.fields.cat_name} />
                                <h3 className="absolute top-3 left-1/2 -translate-x-1/2 font-extrabold text-2xl">{cat.fields.cat_name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection
