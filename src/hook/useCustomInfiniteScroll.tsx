import { IProduct } from '../types/product';
import { searchProducts } from '../api/productApi';
import { useState, useEffect, useCallback } from 'react';

export const useCustomInfiniteScroll = (searchValue: string) => {
    const [skip, setSkip] = useState(0);
    const [error, setError] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = useCallback(async (currentSkip: number) => {
        if (loading) return;
        setLoading(true);
        setError('');
        try {
            const res = await searchProducts(searchValue, 20, currentSkip);
            setProducts((prevProducts) => {
                const newProducts = res.filter(
                    (product) => !prevProducts.find((p) => p.id === product.id)
                );
                return [...prevProducts, ...newProducts];
            });
            setHasMore(res.length === 20);
            setSkip((preSkip => preSkip + 20))
        } catch {
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    }, [searchValue, hasMore, loading]);

    useEffect(() => {
        setProducts([]);
        setHasMore(true);
        setSkip(() => 0)
        fetchProducts(0);
    }, [searchValue]);

    const getNextProducts = () => {
        if (!loading && hasMore) {
            fetchProducts(skip);
        }
    };

    return { products, hasMore, loading, error, getNextProducts };
};

