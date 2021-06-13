import { spawn } from 'child_process'

export function get_outlet_status(rack_ip, outlet_no) {
  const python = spawn('get_outlet_status.py', [1, 2]);

  python.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  python.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  python.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}

export function set_outlet_status(rack_ip, outlet_no, status) {
  const python = spawn('set_outlet_status.py', [1, 2]);

  python.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  python.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  python.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}