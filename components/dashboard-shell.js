import Link from "next/link";

export function DashboardShell({ title, subtitle, role, menu, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <span className="eyebrow">Kasir Digital</span>
          <h2>{role === "owner" ? "Owner Console" : "Kasir Console"}</h2>
          <p>{role === "owner" ? "Pantau bisnis dan operasional toko." : "Fokus cepat untuk transaksi harian."}</p>
        </div>
        <nav className="nav-list">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="main-panel">
        <header className="topbar">
          <div>
            <span className="eyebrow">{role === "owner" ? "Role Owner" : "Role Kasir"}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="topbar-actions">
            <Link href="/login" className="btn btn-secondary">
              Ganti Akun
            </Link>
          </div>
        </header>
        <main className="content-grid">{children}</main>
      </div>
    </div>
  );
}

export function StatGrid({ items }) {
  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article className="stat-card" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.note}</p>
        </article>
      ))}
    </section>
  );
}

export function Panel({ title, action, children }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <h3>{title}</h3>
        {typeof action === "string" ? (
          <button className="btn btn-secondary">{action}</button>
        ) : action ? (
          action
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function DataTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FilterBar({ actions }) {
  return (
    <div className="filter-bar">
      {actions.map((action) => (
        <button key={action} className="chip">
          {action}
        </button>
      ))}
    </div>
  );
}
