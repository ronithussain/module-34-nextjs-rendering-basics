const Post = ({ post }) => {
  return (
    <div className="max-w-md rounded-xl border border-gray-300 bg-white p-6 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          Post #{post.id}
        </span>

        <span className="text-sm text-gray-500">User ID: {post.userId}</span>
      </div>

      <h2 className="mb-3 text-xl font-bold capitalize text-gray-800">
        {post.title}
      </h2>

      <p className="leading-7 text-gray-600">{post.body}</p>

      <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
};

export default Post;
