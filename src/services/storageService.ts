export class StorageService {
  static saveLogin(token: string, remember: boolean = true) {
    if (!remember) {
      sessionStorage.setItem("token", token);
    } else {
      localStorage.setItem("token", token);
    }
  }

  static clearStorage() {
    sessionStorage.clear()
    localStorage.clear()
  }
}
