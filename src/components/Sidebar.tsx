import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/subscriptions" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="3"
              y="3"
              width="14"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>Subscriptions</span>
        </NavLink>
        <NavLink to="/payments" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="2"
              y="5"
              width="16"
              height="11"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M2 9H18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>Payments</span>
        </NavLink>
        <NavLink to="/ai-radar" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <path d="M10 3V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 10H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>AI Radar</span>
        </NavLink>
        <NavLink to="#invoices" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 3H15C16.1046 3 17 3.89543 17 5V17L12 14L8 17V5C8 3.89543 7.10457 3 6 3H5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>Invoices</span>
        </NavLink>
        <NavLink to="#users" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M4 17C4 14 6.5 12 10 12C13.5 12 16 14 16 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Account users</span>
        </NavLink>
        <NavLink to="#info" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M10 10V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="10" cy="7" r="0.5" fill="currentColor" />
          </svg>
          <span>Account information</span>
        </NavLink>
        <NavLink to="/styleguide" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="3"
              y="3"
              width="6"
              height="6"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="11"
              y="3"
              width="6"
              height="6"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="3"
              y="11"
              width="6"
              height="6"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="11"
              y="11"
              width="6"
              height="6"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>Style Guide</span>
        </NavLink>
        <NavLink to="/shadcn-demo" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L2 7L10 12L18 7L10 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 13L10 18L18 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10L10 15L18 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>shadcn/ui Demo</span>
        </NavLink>
        <NavLink to="/premium-demo" className="nav-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2L7 8H3L6.5 12L5 18L10 14.5L15 18L13.5 12L17 8H13L10 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span>Premium Color</span>
        </NavLink>
      </nav>
    </aside>
  )
}
