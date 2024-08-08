"use client";
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { calculateDiscountPrice } from '../util/calculateDiscountPrice.ts';
import StarRating from '../components/ratingStart';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <div key={product.id} className="border border-gray-300 py-8 max-w-sm mx-auto w-full">
              <img
                src={product.images[0]}
                className="h-60 w-auto object-cover object-center mx-auto"
              />
              <div className="mx-6">
                <div className="py-4">
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <StarRating rating={product.rating} />
                  <div className="flex items-center">
                    {Number(product.discountPercentage) > 0 ?
                      <>
                        <p className="mt-1 text-lg font-medium text-red-500">฿{product.price}</p>
                        <del className="text-gray-400">
                          <p className="mt-1 text-base text-gray-400 ml-2">฿{calculateDiscountPrice(product.price, product.discountPercentage).toFixed(2)}</p>
                        </del>
                      </> :
                      <p className="mt-1 text-lg font-medium text-gray-900">฿{product.price}</p>
                    }
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-400 inline-block mt-6"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;