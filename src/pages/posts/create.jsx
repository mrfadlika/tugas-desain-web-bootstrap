import { useState } from "preact/hooks";
import { route } from "preact-router";

export default function PostCreate() {
  // Define state
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // State validation
  const [errors, setErrors] = useState({});

  // Method handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Method store post
  const storePost = (e) => {
    e.preventDefault();
    
    // Simple validation
    let newErrors = {};
    if (!image) newErrors.image = ["Image is required"];
    if (!title.trim()) newErrors.title = ["Title is required"];
    if (!content.trim()) newErrors.content = ["Content is required"];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate successful post creation
    console.log("New post created:", { image, title, content });

    // Clear form
    setImage(null);
    setTitle("");
    setContent("");
    setErrors({});

    // Redirect to posts index
    route("/daftarproduk", true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <form onSubmit={storePost}>
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
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}