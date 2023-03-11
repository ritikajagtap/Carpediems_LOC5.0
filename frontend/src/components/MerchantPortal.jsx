import React from 'react'

const MerchantPortal = () => {
  return (
    <div>
        {localStorage.getItem('token')} && (
            Already Loged in
        )
        {!localStorage.getItem('token')} && (
            
        )
    </div>
  )
}

export default MerchantPortal