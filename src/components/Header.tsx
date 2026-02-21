export default function Header() {
  return (
    <header className="top-header">
      <div className="header-left">
        <div className="logo">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" fill="white" />
          </svg>
          <span>USERCENTRICS</span>
        </div>
        <a href="#" className="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Product
        </a>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="3" cy="10" r="1.5" fill="currentColor" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <circle cx="17" cy="10" r="1.5" fill="currentColor" />
          </svg>
        </button>
        <div className="user-avatar">CN</div>
      </div>
    </header>
  )
}
