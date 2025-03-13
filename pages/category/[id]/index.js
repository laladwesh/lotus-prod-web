import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const CategoryPage = () => {
     const router = useRouter();
      const { id } = useParams() || {};
  return (
    <div>CategoryPage {"   "} {id}</div>
  )
}

export default CategoryPage