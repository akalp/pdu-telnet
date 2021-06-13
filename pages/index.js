import jsyaml from 'js-yaml'
import fs from 'fs'

import Rack from '../components/rack'
import { get_outlet_status } from '../api/py_runner'

export default function Home({ racks }) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Remote PDU Control Service</a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          {racks.map((rack, idx_rack) => {
            return <Rack key={'r' + idx_rack} rack={rack} idx_rack={idx_rack} />
          })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const racks = jsyaml.load(fs.readFileSync('pdus.yaml', 'utf-8'));
  racks.forEach((rack, rack_index) => {
    rack.id = rack_index
    rack.outlets.forEach((outlet, outlet_index) => {
      outlet.id = outlet_index
      outlet.status = get_outlet_status(rack.ip, outlet_index)
    })
  });
  return { props: { racks: racks } }
}
