export type postID = string;

interface PostData {
  id: postID;
  thumbnail: string;
  title: string;
  author: string;
  created: float;
  num_comments: number;
}

export interface Post {
  data: PostData;
}

export interface Store {
  posts: {
    posts: Post[];
    loading: boolean;
  };
  app: {
    visited: postID[];
    dismissed: postID[];
    sidebarOpen: boolean;
    selectedPostId: string;
  };
}
