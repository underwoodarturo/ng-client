import { User }      from './user';
export interface LoginInfo {
  token?:string,
  auth_info?:Object,
  user?:User,
  _id?:string,
}
