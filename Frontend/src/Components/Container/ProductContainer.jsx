import React from 'react'
import PurchaseCard from '../CommonComponent/PurchaseCard'

const ProductContainer = () => {
  return (
    <div style={{ width: 'auto', border: '2px solid green', height: '493px',marginLeft:'175px',
    justifyContent:'space-between',display:'flex',flexDirection:'column' }}>
        <div style={{width:'100%',border:'1px solid yellow',height:'103px'}}>

        </div>
        <div style={{width:'100%',border:'1px solid yellow',height:'350px'}}>
            <PurchaseCard/>
        </div>
  </div>
  )
}

export default ProductContainer