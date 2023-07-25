// pages/posts/[slug].js
import { useRouter } from 'next/router';

import CommentForm from '../../components/CommentForm';
import PostDetail from '../../components/ PostDetail';

export default function Post(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostDetail postId={props.id} />
      <CommentForm  postId={props.id} /> {/* Pass the slug as a prop */}
      {/* Display existing comments here */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Access the slug from context.params

  return {
    props: {
      id, 
    },
  };
}
