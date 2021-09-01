import axios from "axios";

const url = "http://localhost:3000/";

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
