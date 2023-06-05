export interface newsData {
  urlToImage: string;
  title: String;
  description: String;
  publishedAt: String;
  content?: String;
  author?:String
}
 export type Data = {
   news: any;
   isLoading: Boolean;
 };
