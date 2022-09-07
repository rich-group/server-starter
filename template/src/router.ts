import {
  CONTROLLER_METADATA,
  ROUTE_METADATA,
} from './middleware/request';
import { RouteType } from './utils/route';
export const PARAM_METADATA = 'param';
export const PARSE_METADATA = 'parse';
function register(
  controllerStore: Record<string, any>,
  router: any,
  handlerFactory: any
) {

  Object.values(controllerStore).forEach(instance => {
    const controllerMetadata: string = Reflect.getMetadata(
      CONTROLLER_METADATA,
      instance.constructor,
    );

    const proto = Object.getPrototypeOf(instance);
    const routeNameArr = Object.getOwnPropertyNames(proto).filter(
      n => n !== 'constructor' && typeof proto[n] === 'function',
    );

    routeNameArr.forEach(routeName => {
      const routeMetadata: RouteType = Reflect.getMetadata(
        ROUTE_METADATA,
        proto[routeName],
      );
      let { type, path } = routeMetadata;
      const handler = handlerFactory(
        proto[routeName].bind(instance),
        Reflect.getMetadata(PARAM_METADATA, instance, routeName),
        Reflect.getMetadata(PARSE_METADATA, instance, routeName),
      );
      path = path === '/' ? '' : path
      router[type](controllerMetadata + path, handler);
    });
  });

}

export default register;