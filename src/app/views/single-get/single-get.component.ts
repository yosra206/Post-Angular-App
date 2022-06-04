import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/interface/postsinterface';


@Component({
  selector: 'app-single-get',
  templateUrl: './single-get.component.html',
  styleUrls: ['./single-get.component.css']
})



export class SingleGetComponent implements OnInit {
  post:posts = {}
  constructor(private postService:PostsService,private route:ActivatedRoute) { }
  id= this.route.snapshot.params['id']

  getSinglePost(){
   this.postService.getSinglePost(this.id).subscribe({
     next:(res:any)=>{
      //  console.log('heree')
       console.log(res)
       this.post = res
     },
     error:(err:any)=>{
       console.log(err)
     }
   })
  }
  updatepost(post:any){
    this.postService.updatepost(this.id,post).subscribe({
      next:(res:any)=>{
        console.log('success')
      }
    })
  }
  ngOnInit(): void {
   this.getSinglePost()
  //  this.updatepost()
  }

}
