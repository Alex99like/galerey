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
  bio: string;
  username: string;
  name: string;
  total_likes: number;
  total_collections: number;
  total_photos: 0;
  portfolio_url: null | string;
  location: string;
  instagram_username: string;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
  };
  // links: {
  //   self: string;
  //   html: string;
  //   photos: string;
  //   likes: string;
  //   portfolio: string;
  //   following: string;
  //   followers: string;
  // };
  profile_image: IUserProfile;
}

interface IPreviewPhotos {
  created_at: string;
  id: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
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
  total_photos: number;
  tags: ITagsItem[];
  user: IUserItem;
  preview_photos: IPreviewPhotos[];
  cover_photo: ICoverPhoto;
}

export { IImageItem };
