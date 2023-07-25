// pages/edit-post.js
import { getPostBySlug } from '../lib/posts';
import PostForm from '../components/PostForm';

export default function EditPostPage({ post }) {
  return (
    <div>
      <h1>Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const post = getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
}