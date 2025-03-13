import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const ProductPage = () => {
     const router = useRouter();
      const { id } = useParams() || {};
  return (
    <div>ProductPage {"   "} {id}</div>
  )
}

export default ProductPage