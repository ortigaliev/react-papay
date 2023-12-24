import { MeLiked } from "./product";

export interface Restaurants {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_address: string;
  mb_describtion: string;
  mb_images: string;
  mb_point: string;
  mb_top: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt: number;
  createdAt: Date,
  me_liked: MeLiked[];
}

export interface Member {
  _id: string;
  mb_nick: string;
  mb_pone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_address?: string;
  mb_describtion?: string;
  mb_image?: string;
  mb_point?: string;
  mb_top?: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscribe_cnt: number;
  createdAt: Date;
  mb_liked: MeLiked[];
  me_followed: [];

}