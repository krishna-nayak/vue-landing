import axios from "axios";

const url = "/";

class PostService {
  //Get Posts
  static getPost() {}

  //Send Post
  static insertPost(number) {
    console.log(number);
    return axios.post(url, {
      number,
    });
  }
}

export default PostService;
