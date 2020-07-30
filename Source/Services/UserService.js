import { NetworkManager } from "./NetworkManager"
import { API } from "./Endpoints"

class UserService {
  constructor() {
    this.node = API.USERS
  }

  me = async () => {
    const instance = new NetworkManager(this.node.SELF)
    return await instance.httpRequest()
  }

}

export default new UserService()