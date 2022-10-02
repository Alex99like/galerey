interface IUrlImage {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface IUserProfile {
  small: string;
  medium: string;
  large: string;
}

interface IUserItem {
  id: string;
  username: string;
  name: string;
  portfolio_url: null | string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
  profile_image: IUserProfile;
}

interface ICoverPhoto {
  id: string;
  created_at: string | null;
  current_user_collections: string[];
  width: number;
  height: number;
  description: string | null;
  alt_description: string | null;
  urls: IUrlImage;
  likes: number;
  user: IUserItem;
}

interface ITagsItem {
  type: string;
  title: string;
}

interface IImageItem {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  tags: ITagsItem[];
  user: IUserItem;
  cover_photo: ICoverPhoto;
}

export { IImageItem };
