import { Member } from "./user";

export interface BoArticle {
  _id: string;
  art_subject: string;
  art_content: string;
  art_img: string;
  bo_id: string;
  art_status: string;
  art_likes: number;
  art_views: number;
  mb_id: string;
  createAt: any;
  updatedAt: any;
  member_data: Member;
  me_liked: [];
}