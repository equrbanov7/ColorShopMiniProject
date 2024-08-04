import CardImage from "../../../../../components/Card-Image";
import Blog1 from "../../../../../assets/images/blog_1.jpg";
import Blog2 from "../../../../../assets/images/blog_2.jpg";
import Blog3 from "../../../../../assets/images/blog_3.jpg";
import "./index.scss";

const LatestBlogs = () => {
  return (
    <div className="LatestBlogs">
      <div className="LatestBlogssectionHeader">
          <h2>Latest Blogs</h2>
          <div className="line"></div>
        </div>
      <div className="CustomContainer">
        <CardImage imgSrc={Blog1} animationHover={true} />
        <CardImage imgSrc={Blog2} animationHover={true}  />
        <CardImage imgSrc={Blog3} animationHover={true}  />
      </div>
    </div>
  );
};

export default LatestBlogs;
