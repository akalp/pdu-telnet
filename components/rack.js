import Outlet from './outlet'

export default function Rack({ rack, idx_rack }) {
  return (
    <div key={'r' + idx_rack} className="col-xl-3 col-md-6 col-sm-12 p-4">
      <h3>{rack.name}</h3>
      <h6>{rack.ip}</h6>
      <table className="table table-sm table-hover align-middle text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>board ips</th>
          </tr>
        </thead>
        <tbody>
          {rack.outlets.map((outlet, idx_outlet) =>
            (<Outlet outlet={outlet} idx_outlet={idx_outlet} idx_rack={idx_rack} rack_ip={rack.ip} />)
          )}
        </tbody>
      </table>
    </div>
  )
}