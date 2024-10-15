import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import { dummyPosts } from "../../context/data/dummyData";

export default function PostEdit({ id }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const fetchDetailPost = () => {
    const post = dummyPosts.find((post) => post.id === parseInt(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      console.error("Post not found");
      route("/daftarproduk", true);
    }
  };

  useEffect(() => {
    fetchDetailPost();
  }, [id]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updatePost = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!title.trim()) newErrors.title = ["Title is required"];
    if (!content.trim()) newErrors.content = ["Content is required"];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate updating the post in the dummy data
    const updatedPosts = dummyPosts.map((post) =>
      post.id === parseInt(id)
        ? { ...post, title, content, image: image ? image.name : post.image }
        : post
    );

    console.log(
      "Post updated:",
      updatedPosts.find((post) => post.id === parseInt(id))
    );
    console.log("All posts after update:", updatedPosts);

    setErrors({});
    route("/daftarproduk", true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <form onSubmit={updatePost}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Image</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                  {errors.image && (
                    <div className="alert alert-danger mt-2">
                      {errors.image[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title Post"
                  />
                  {errors.title && (
                    <div className="alert alert-danger mt-2">
                      {errors.title[0]}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Content</label>
                  <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="5"
                    placeholder="Content Post"
                  ></textarea>
                  {errors.content && (
                    <div className="alert alert-danger mt-2">
                      {errors.content[0]}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-md btn-primary rounded-sm shadow border-0"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
