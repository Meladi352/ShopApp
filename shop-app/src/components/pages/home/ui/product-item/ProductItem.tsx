import {FC} from 'react'
import { IProduct } from '../../../../../types/product.interface'

const ProductItem: FC <{product: IProduct}> = ({product})  =>{
    return <div>{product.brand}</div>
}

export default ProductItem