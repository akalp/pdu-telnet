import jsyaml from 'js-yaml'
import fs from 'fs'

import Rack from '../components/rack'

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
            return <Rack rack={rack} idx_rack={idx_rack} />
          })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const statuses = ["on", "off", "pending"]

  const racks = jsyaml.load(fs.readFileSync('pdus.yaml', 'utf-8'));
  racks.forEach(rack => {
    rack.outlets.forEach(outlet => {
      const random = Math.floor(Math.random() * statuses.length);
      outlet.status = statuses[random];
    })
  });
  return { props: { racks: racks } }
}
