import * as controllers from './controllers'

function instantiateController () {
  return Object.keys(controllers).reduce((instances, name) => 
    Object.assign(instances, {[name]: new controllers[name]()}), {})
}
export default instantiateController()