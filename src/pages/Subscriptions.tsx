export default function Subscriptions() {
  return (
    <>
      <h1 className="page-title">Subscriptions</h1>

      <div className="subscription-grid">
        {/* Left Card: Product Info */}
        <div className="product-card">
          <div className="product-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="product-info">
            <h2 className="product-title">Usercentrics Web CMP</h2>
            <p className="product-description">
              Automate consent collection and build user trust.
            </p>
          </div>
        </div>

        {/* Right Card: Subscription Details */}
        <div className="subscription-card">
          <div className="subscription-header">
            <div className="plan-info">
              <span className="plan-name">Plus plan</span>
              <span className="plan-badge">ACTIVE</span>
            </div>
            <button className="btn-manage">Manage subscription</button>
          </div>

          <div className="pricing-info">
            <div className="price">
              €15 <span className="price-period">/ month</span>
            </div>
            <div className="next-payment">
              Next payment: <span>November 1, 2025</span>
            </div>
          </div>

          <div className="usage-section">
            <div className="usage-header">
              <div className="usage-label">
                <span>Session usage</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M8 8V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="10.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div className="usage-stats">
                <span className="usage-current">250,000 used</span>
                <span className="usage-total">/ 3,000 included</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '83.33%' }}></div>
            </div>
            <div className="usage-reset">Resets on Jan 5</div>
          </div>

          <button className="btn-history">
            View history
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 8L8 12L4 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="legal-notice">
            <p>
              We aggregate your data from all configurations that are assigned to this
              subscription. We recommend that you choose a plan that matches your session
              usage. If you exceed your limit, your plan will automatically be adjusted in
              accordance with our <a href="#">Terms & Conditions</a>,{' '}
              <a href="#">Terms & Conditions (USA)</a>. The upgrade will be based on the
              next relevant pricing plan or tier.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
