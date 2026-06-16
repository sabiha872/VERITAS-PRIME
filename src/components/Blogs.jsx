import "./Blogs.css";

function Blogs() {
  const blogs = [
    {
      image: "/images/blog1.jpg",
      category: "Digital Marketing",
      date: "15 June 2026",
      title: "Top SEO Strategies to Grow Your Business",
      description:
        "Learn how modern SEO techniques can improve your website ranking and bring more organic visitors.",
    },
    {
      image: "/images/blog2.jpg",
      category: "Finance",
      date: "12 June 2026",
      title: "Financial Planning for Long-Term Business Growth",
      description:
        "Discover essential financial strategies to maintain healthy cash flow and sustainable growth.",
    },
    {
      image: "/images/blog3.jpg",
      category: "Business",
      date: "10 June 2026",
      title: "How Digital Transformation Improves Companies",
      description:
        "Understand how technology and digital solutions improve productivity and customer experience.",
    },
  ];

  return (
    <section className="blogs">
      <h2>Latest Blogs</h2>
      <section className="blogs" data-aos="fade-up"></section>

      <p className="blog-subtitle">
        Stay updated with the latest trends in digital marketing, finance, and business.
      </p>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span>
                {blog.category} • {blog.date}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;