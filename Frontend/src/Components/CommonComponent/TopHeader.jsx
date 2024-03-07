import React from 'react';

const TopHeader = () => {
  return (
    <>
      <div style={{ width:'100%', height: 48, backgroundColor: 'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{  width: 859,height:24,display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p style={{ margin: 0,fontSize:15,color:'white' }}>Summer Sale for All Swim Suite and Free Express Delivery</p> {/* Add margin: 0 to remove space */}
        </div>
      </div>
    </>
  );
};

export default TopHeader;
