export default function Header() {
  return (
    <header>
      <div className="container header-inner">
        <a href="#inicio" className="logo">BrandName</a>
        <nav>
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#produto">Product</a></li>
            <li><a href="#precos">Pricing</a></li>
            <li><a href="#contato">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#login">Login</a>
          <a href="#membro" className="btn">Become a member →</a>
        </div>
      </div>
    </header>
  );
}