import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  acount;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.acount = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.acount.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // login method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.acount.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getcurrentUser() {
    try {
      return this.acount.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.acount.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
