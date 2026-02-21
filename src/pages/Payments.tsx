export default function Payments() {
  return (
    <>
      <h1 className="page-title">Payments</h1>

      <div className="empty-state">
        <svg
          className="empty-state-icon"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect
            x="10"
            y="20"
            width="60"
            height="40"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M10 32H70" stroke="currentColor" strokeWidth="3" />
        </svg>
        <h2 className="empty-state-title" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          No payment history yet
        </h2>
        <p className="empty-state-description" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 32px' }}>
          Your payment history will appear here once you make your first payment.
        </p>
      </div>
    </>
  )
}
