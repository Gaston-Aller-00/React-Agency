import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      tittle:
        "Creating Streamlined Safeguarding Processes with OneRen ",
      image: "/src/assets/blog1.png",
    },
    {
      id: 2,
      tittle:
        "What are you safeguarding responsabilities and how can you manage them?",
      image: "/src/assets/blog2.png",
    },
    {
      id: 3,
      tittle: "Revamping the Mermebership Model with Triathlon Australia",
      image: "/src/assets/blog3.png",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-24">
      <div className="text-center md:w-1/2 mx-auto items-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 ">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className=" text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto">
        Revolutionize your customer engagement with our integrated CRM system. Gain valuable insights, nurture relationships, and create personalized experiences for your clients.
        </p>
      </div>
      {/* los blogs del arr */}

      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between " id="testimonial">
        {
            blogs.map(blog => (<div key={blog.id} className="mx-auto relative cursor-pointer ">
                <img src={blog.image} alt="blog logo" className="cardBlog mb-6" />
                <div className="text-center px-4 py-8 bg-white shadow-lg  rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                <h3 className="mb-3">{blog.tittle}</h3>
                <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                     Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                    </div>
            </div>))
        }
      </div>
    </div>
  );
};

export default Blog;
