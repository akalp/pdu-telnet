import { useState } from 'react'
import { get_outlet_status, set_outlet_status } from '../api/py_runner'

export default function Outlet({ outlet, rack }) {
  const [status, setStatus] = useState(outlet.status)

  function telnetCall() {
    const old = status
    setStatus('pending');
    set_outlet_status(rack.ip, outlet.id, old === 'on' ? 'off' : 'on')
    setTimeout(() => { setStatus(get_outlet_status(rack.ip, outlet.id)) }, 1000)
  }

  return (
    <tr className={status === 'on' ? 'bg-success' : status === 'pending' ? 'bg-warning' : 'bg-body'} onClick={telnetCall} style={{ cursor: 'pointer' }}>
      <td>{outlet.id}</td>
      <td>{outlet.name ? outlet.name : '-'}</td>
      <td>
        <ul className="list-unstyled">
          {outlet.boards.map((board, idx_board) =>
          (
            <li key={'r' + rack.id + 'o' + outlet.id + 'b' + idx_board}>{board}</li>
          )
          )}
        </ul>
      </td>
    </tr>
  )
}