import ProductItem from './ProductItem';
import LoadingIcon from './common/LoadingIcon';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCustomInfiniteScroll } from '../hook/useCustomInfiniteScroll';

interface IProductListProps {
    searchValue: string;
}

const ProductList: React.FC<IProductListProps> = ({ searchValue }) => {
    const { products, hasMore, loading, error, getNextProducts } = useCustomInfiniteScroll(searchValue);
    if (error) {
        return <p className='pt-20'>Error: {error}</p>;
    }
    if (products.length === 0 && !loading) {
        return <p className='pt-20 flex justify-center text-xl font-bold text-gray-400'>No products found.</p>;
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={products.length}
                next={getNextProducts}
                hasMore={hasMore}
                loader={loading && <LoadingIcon />}
                endMessage={<div className='flex justify-center py-10 text-xl font-bold text-gray-400'>No more products to load.</div>}
            >
                <div className="mt-header grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 p-4 md:p-10">
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default ProductList;