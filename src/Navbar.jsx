import { Link } from 'react-router-dom';
const Navbar = ({cart, setCart}) => {
  function deleteItem(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  return (
    <div>
      
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.title} {item.price} <span onClick={() => deleteItem(item.id)}>❌</span></li>
        ))}
       <li>
            <Link to="/login">Login</Link>
          </li>
      </ul>
    </div>
  )
}



export default Navbar;
