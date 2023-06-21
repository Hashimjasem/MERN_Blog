import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div className="flex justify-center">
    <div 
    className="
    grid
    columns-1
    md:columns-2 
    mx-[1rem]
    my-[3rem]
    gap-y-5
    ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    </div>
  )
};

export default Home;