import Post from "../components/Post";

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
  return (
    <div>
      <h2 className="text-3xl font-bold">Post Page</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            posts.slice(0,20).map(post => <Post key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default PostsPage;
