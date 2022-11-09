import ApiError from "../../error/apiError";

class PostController {
  async getAllPosts(req, res) {}
  async createPost(req, res) {}
  async deletePost(req, res) {}
  async updatePost(req, res, next) {
    const { id } = res.query;
    if (!id) {
      return next(ApiError.badRequest("You did not provide ID!"));
    }
  }
}

export default new PostController();
