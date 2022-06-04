import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
url:string="https://jsonplaceholder.typicode.com/posts/"
  constructor(private http:HttpClient) { }
  getPosts(){
return this.http.get(this.url)
  }
  addPost(post:any){
    return this.http.post(this.url,post)
  }
  getSinglePost(id:any){
    return this.http.get(this.url+ id)
  }
  updatepost(id:any,body:any){
    return this.http.patch(this.url+ id,body)
  }
  deletePost(id:any){
    return this.http.delete(this.url+ id)
  }
}
