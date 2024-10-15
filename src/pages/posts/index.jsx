import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import { dummyPosts } from "../../context/data/dummyData";

const CustomCard = ({ title, description, buttonText }) => (
  <div class="card h-100">
    <img
      src="/ads.jpg"
      class="card-img-top"
      alt="placeholder"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <button class="btn btn-primary mt-auto">{buttonText}</button>
    </div>
  </div>
);

export default function PostIndex() {
  const [posts, setPosts] = useState(dummyPosts);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              href="/daftarproduk/create"
              className="btn btn-md btn-success rounded shadow border-0 mb-3"
            >
              ADD NEW POST
            </Link>
            <div className="card border-0 rounded shadow">
              <div className="card-body">
                <table className="table table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Content</th>
                      <th scope="col" style={{ width: "15%" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length > 0 ? (
                      posts.map((post, index) => (
                        <tr key={index}>
                          <td className="text-center">
                            <img
                              src={post.image}
                              alt={post.title}
                              width="200"
                              className="rounded"
                            />
                          </td>
                          <td>{post.title}</td>
                          <td>{post.content}</td>
                          <td className="text-center">
                            <Link
                              href={`/daftarproduk/edit/${post.id}`}
                              className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2"
                            >
                              EDIT
                            </Link>
                            <button className="btn btn-sm btn-danger rounded-sm shadow border-0">
                              DELETE
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          <div className="alert alert-danger mb-0">
                            Data Belum Tersedia!
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-4">
        <div class={`row mb-4 ${isCollapsed ? "d-none" : ""}`}>
          <div class="col-md-4 mb-3 mb-md-0">
            <CustomCard
              title="Card 1"
              description="This is the first card with some content and a button."
              buttonText="Go somewhere"
            />
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <CustomCard
              title="Card 2"
              description="This is the second card with some content and a button."
              buttonText="Go somewhere"
            />
          </div>
          <div class="col-md-4">
            <CustomCard
              title="Card 3"
              description="This is the third card with some content and a button."
              buttonText="Go somewhere"
            />
          </div>
        </div>
        <button class="btn btn-primary" onClick={toggleCollapse}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>
    </>
  );
}
