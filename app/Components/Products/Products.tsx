import axios from "axios"
import { useEffect, useState } from "react"
import styles from './Products.module.scss'
import { useRecoilState } from "recoil"
import { limitState, sortState } from "@/app/States/States"

const Products = () => {
    const [sort] = useRecoilState(sortState);
    const [limit] = useRecoilState(limitState)
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
            .then((result: any) => {
                setProducts(result.data)
            });
    }, [sort, limit])
    return (
        <ul className={styles.container}>
            {
                products.map((product: any) =>
                    <li className={styles.product}>
                        <img width='50px' src={product.image} />
                        {product.title}
                    </li>
                )
            }
        </ul>
    )
}

export default Products