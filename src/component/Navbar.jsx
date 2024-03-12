import { Link } from 'react-router-dom'
import {
  StyledNavbar,
  StyledUl,
  StyledLi,
} from './page/shared/StyledComponents.jsx'
const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <StyledUl>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/addproduct">Add Product</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/products">Products</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/adduser">Add User</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/users">Users</Link>
          </StyledLi>
        </StyledUl>
      </StyledNavbar>
    </>
  )
}

export default Navbar
