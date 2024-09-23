import { Link } from "react-router-dom"

interface Props{
  links:{
    label: string;
    path: string;
  }[];
}
const Nb = ({links}:Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand"></h1>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li className="" key={index}>
                <Link className="" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nb