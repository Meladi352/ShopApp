import {FC, } from 'react'
import { ProductService } from '../../../services/product.service'
import {useQuery}  from 'react-query'
import styles from './Home.module.scss'
import ProductItem from './ui/product-item/ProductItem'



const Home: FC = () => {

    const { data: products,
        error,
        isLoading
    } = useQuery(['products'], () => ProductService.getProducts(), {
        select: (data) => data.products,
    });
    



    return (
    <div className={styles.bg}>
        <h1>
            Shop the collection
        </h1>
        {error ? (
                <div className='text-red-500'>Error: {error.message}</div>
            ) : isLoading ? (
            <div className = 'text-blue-400 text-2xl'>Loading..</div>
            ) : products?.length ? (
                products.map(product => (
                <ProductItem product = {product} key = {product.id}/>
                    ))
            
            ) : (
                <div>Products not found!</div>
            )}
        </div>
    )
}

export default Home