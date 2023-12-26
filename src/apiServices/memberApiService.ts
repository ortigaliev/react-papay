import axios from "axios";
import assert from "assert";
import { serverApi } from "../lib/config";
import { Member } from "../types/user";
import { Definer } from "../lib/Definer";

class MemberApiServer {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async loginRequest(login_data: any) {
    try {
      const result = await axios.post(this.path + "/login", login_data, {
        withCredentials: true,
      });
      console.log("state:", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);
      throw err;
    }
  }

  public async signupRequest(signup_data: any) {
    try {
      const result = await axios.post(this.path + "/signup", signup_data, {
        withCredentials: true,
      });
      console.log("state:", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: signupRequest ${err.message}`);
      throw err;
    }
  }

  public async logOutRequest() {
    try {
      const result = await axios.get(this.path + "/logout", {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      localStorage.removeItem("member_data");
      const logout_result = result.data.state;
      return logout_result == "success";
    } catch (err: any) {
      console.log(`ERROR ::: logOutRequest ${err.message}`);
      throw err;
    }
  }
}

export default MemberApiServer;