import React, { FC } from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom'

// Note: All CSS is controlled in navbar.css

export interface DropdownItem {
  label: React.ReactNode
  path: string 
}

interface NavItemProps {
  label: React.ReactNode
  path: string
  items: DropdownItem[]

}

const NavItem: FC<NavItemProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasItems = props.items && props.items.length > 0

  return (
    <div
      className="navbar-item"
      onMouseEnter={() => hasItems && setIsOpen(true)}
      onMouseLeave={() => hasItems && setIsOpen(false)}
      style={{ position: 'relative' }}
    >
      <NavLink
        exact
        className="navbar-link"
        activeClassName="navbar-link active"
        to={props.path}
        key={props.path}
        
      >
        {props.label}
      </NavLink>

      {isOpen && hasItems && (
        <ul className="dropdown-menu">
          {props.items.map((item) => (
            <li key={item.path}>
              <NavLink
                exact
                className="navbar-link"
                activeClassName="navbar-link"
                to={item.path}
                key={props.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default NavItem;