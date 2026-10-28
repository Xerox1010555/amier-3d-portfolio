/**
 * Type shims for three.js addons that lack bundled declarations
 * (the runtime module exists inside the `three` package — this only adds types).
 */
declare module "three/examples/jsm/environments/RoomEnvironment.js" {
  import { Scene } from "three";
  export class RoomEnvironment extends Scene {
    constructor();
  }
}
