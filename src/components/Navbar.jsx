const Navbar = () => {
  return (
    <>
    <div className="nav mt-4 backdrop-blur">
        <a href="/">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
          <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path><path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path>
        </svg>
        </a>
        <a href="/about">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path><path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
        </svg>
        </a>
        <a href="/projects">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path fillOpacity=".16" d="M1 4h18v10H1z"></path><path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path>
        </svg>
        </a>
        <a href="/resume">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
        <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z"></path><path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"></path>
        </svg>
        </a>
    </div>
    
    </>
  )
}

export default Navbar;