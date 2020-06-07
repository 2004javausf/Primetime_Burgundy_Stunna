export interface Post {
  id: number;
  userFullName: string;
  userPicture: string;
  text: string;
  link: string;
  isLiked: boolean;
  likeCount: number;
  comments: Comment[];
}
