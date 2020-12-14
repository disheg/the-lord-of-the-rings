import Link from 'next/link';

export function MainLayout({ children }) {
  return (
    <>
      <nav>
      <div className="header">
      <div className="navbar">
      <div className="nav">
        <ul>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
          <li><Link href="/characters"><a>Characters</a></Link></li>
          <li><Link href="/movies"><a>Movies</a></Link></li>
        </ul>
      </div>
      </div>
    </div>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
};