import { useState } from 'react'

export default function Outlet({ outlet, idx_outlet, idx_rack, rack_ip }) {
  const [status, setStatus] = useState(outlet.status)

  function telnetCall() {
    const old = status
    setStatus('pending');
    setTimeout(() => { setStatus(old === 'on' ? 'off' : 'on') }, 2000)
  }

  return (
    <tr key={'r' + idx_rack + 'o' + idx_outlet} className={status === 'on' ? 'bg-success' : status === 'pending' ? 'bg-warning' : 'bg-body'} onClick={telnetCall} style={{ cursor: 'pointer' }}>
      <td>{idx_outlet}</td>
      <td>{outlet.name ? outlet.name : '-'}</td>
      <td>
        <ul className="list-unstyled">
          {outlet.boards.map((board, idx_board) =>
          (
            <li key={'r' + idx_rack + 'o' + idx_outlet + 'b' + idx_board}>{board}</li>
          )
          )}
        </ul>
      </td>
    </tr>
  )
}