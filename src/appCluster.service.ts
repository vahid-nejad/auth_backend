import * as cluster from 'cluster';
import * as os from 'os';
import { Injectable } from '@nestjs/common';

const numCPUs = os.cpus().length;

@Injectable()
export class AppClusterService {
  static clusterize(callback: Function): void {
    if (cluster.default.isPrimary) {
      console.log(`Master server started on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        cluster.default.fork();
      }
      cluster.default.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting`);
        cluster.default.fork();
      });
    } else {
      console.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
