
export const HTTP_METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DEL: "DELETE",
  PATCH: "PATCH"
}

class Endpoint {
  constructor(endpoint, method) {
    this.endpoint = endpoint
    this.method = method
  }
}

export const API = {
  LOGIN: new Endpoint("/user/login", HTTP_METHODS.POST),
  USERS: {
    SELF: new Endpoint("/userAuthentication", HTTP_METHODS.GET)
  }
}