import { TopPageModel } from '../../../interfaces/page.interface'
import { ProductModel } from '../../../interfaces/product.interface'

export default interface TopPageProps {
    firstCategory: number,
    page?: TopPageModel,
    product?: ProductModel[]
}