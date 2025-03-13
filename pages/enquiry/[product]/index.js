import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const EnquiryProductPage = () => {
     const router = useRouter();
      const { product } = useParams() || {};
  return (
    <div>EnquiryProductPage {"   "} {product}</div>
  )
}

export default EnquiryProductPage