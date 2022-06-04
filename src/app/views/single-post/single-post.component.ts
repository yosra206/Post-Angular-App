import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { posts } from 'src/app/interface/postsinterface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post:posts = {}
  constructor(private postService:PostsService,private route:ActivatedRoute) { }
  id= this.route.snapshot.params['id']

  getSinglePost(){
   this.postService.getSinglePost(this.id).subscribe({
     next:(res:any)=>{
       console.log('heree')
       console.log(res)
       this.post = res
     },
     error:(err:any)=>{
       console.log(err)
     }
   })
  }

  ngOnInit(): void {
    this.getSinglePost()
  }

}
