import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h3>Viewing Blog Post {id}</h3>
      {/* You can use the `id` to fetch the post data from an API or display specific content */}
    </div>
  );
}

export default BlogPost;
