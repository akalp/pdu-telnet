import Outlet from './outlet'

export default function Rack({ rack }) {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12 p-4">
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
          {rack.outlets.map(outlet =>
            (<Outlet key={'r' + rack.id + 'o' + outlet.id} rack={rack} outlet={outlet} />)
          )}
        </tbody>
      </table>
    </div>
  )
}