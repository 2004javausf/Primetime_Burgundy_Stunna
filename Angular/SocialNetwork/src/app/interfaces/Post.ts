export interface Post {
  id: number;
  userFullName: string;
  userPicture: string;
  text: string;
  link: string;
  isLiked: boolean;
  likeCount: number;
  //TODO: figure out why this doesn't want to be type Comment[]
  comments: any[];
}
