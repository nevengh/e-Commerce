import './HeaderBascket.css'
import Logo from '@assets/svg/cart.svg?react'
const HeaderBascket = () => {
  return (
    <div className='basketContainer'>
        <Logo title="bascket icon" />
        <div className='basketQuantity'>0</div>
    </div>
  )
}

export default HeaderBascket