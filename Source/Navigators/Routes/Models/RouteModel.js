
export class RouteModel {
  constructor(name, component, options = {}) {
    this.name = name
    this.component = component
    this.options = options
  }
}