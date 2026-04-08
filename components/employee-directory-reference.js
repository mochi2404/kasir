import Link from "next/link";

function roleTone(role) {
  return role === "Owner" ? "role-pill role-pill-owner" : "role-pill role-pill-cashier";
}

function statusTone(status) {
  return status === "Aktif" ? "status-pill status-pill-active" : "status-pill status-pill-inactive";
}

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function EmployeeDirectoryReference({ employees }) {
  const activeEmployees = employees.filter((employee) => employee.status === "Aktif").length;

  return (
    <section className="employee-directory">
      <div className="directory-header">
        <div>
          <h2>Team Directory</h2>
          <p>
            Manage your staff access, roles, and security credentials in one
            centralized workspace.
          </p>
        </div>
        <Link href="/owner/karyawan/new" className="btn btn-primary">
          Tambah Karyawan
        </Link>
      </div>

      <div className="directory-bento">
        <article className="directory-stat-card">
          <span>Total Active</span>
          <strong>{activeEmployees}</strong>
        </article>

        <article className="directory-filter-card">
          <div className="search-shell">
            <span>Cari</span>
            <input type="text" placeholder="Search by name or email..." />
          </div>
          <div className="directory-filter-actions">
            <select defaultValue="All Roles">
              <option>All Roles</option>
              <option>Owner</option>
              <option>Kasir</option>
            </select>
            <select defaultValue="Status">
              <option>Status</option>
              <option>Aktif</option>
              <option>Nonaktif</option>
            </select>
          </div>
        </article>
      </div>

      <section className="directory-table-card">
        <div className="table-wrap">
          <table className="reference-table directory-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="employee-cell">
                      <div className={`employee-avatar ${employee.status !== "Aktif" ? "employee-avatar-muted" : ""}`}>
                        {initials(employee.name)}
                      </div>
                      <div>
                        <p className={`employee-name ${employee.status !== "Aktif" ? "employee-name-muted" : ""}`}>
                          {employee.name}
                        </p>
                        <p className="employee-email">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={roleTone(employee.role)}>{employee.role}</span>
                  </td>
                  <td>
                    <span className={statusTone(employee.status)}>{employee.status}</span>
                  </td>
                  <td className="text-right">
                    <div className="directory-action-wrap">
                      <button className="icon-link icon-link-square">Reset</button>
                      <Link href={`/owner/karyawan/${employee.id}`} className="icon-link icon-link-square">
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <span>
            Showing <strong>{employees.length}</strong> of <strong>12</strong> employees
          </span>
          <div className="pagination-actions">
            <button className="page-dot page-dot-wide">Previous</button>
            <button className="page-dot page-dot-active">1</button>
            <button className="page-dot">2</button>
            <button className="page-dot">3</button>
            <button className="page-dot page-dot-wide">Next</button>
          </div>
        </div>
      </section>
    </section>
  );
}
