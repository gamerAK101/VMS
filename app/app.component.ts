import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [serve]
})
export class AppComponent {
  title = 'frontend';
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { serve } from './crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class table
{
  id?:number;
  company: string;
  type: string;
  number: number;
  colour: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public clientsData : string;
  enableEdit: boolean;
  enableEditIndex: any;
  ngOnInit() {
    this.title='Submit';
    this.getPostList();
   
}
  private servUrl = "http://localhost:3000/infos";
  postId;
  title;
  activeindex=-1;
  constructor(private http: HttpClient) { }
  ItemsArray= [];
  info:table=new table();
  
  onSubmit(form:NgForm):void
  {
if (this.title=='Submit')
{
    console.log(form.value);
    console.log(this.info.company);
    this.http.post<any>('http://localhost:3000/infos', {
      company: this.info.company,
      type: this.info.type,
      number: this.info.number,
      colour: this.info.colour,
    })
    .subscribe(data => {

      this.getPostList();
    })
  }
  else
  {
    this.update();
  }
    
  }
  update()
  {
    console.log(this.activeindex);
    this.http.patch('http://localhost:3000/infos/'+this.activeindex, {
      id:this.activeindex,
      company: this.info.company,
      type: this.info.type,
      number: this.info.number,
      colour: this.info.colour,
    })
    .subscribe(data => {
     
      this.getPostList();
    })
  }
  delete(id)
  {
    
    return this.http.delete<any>('http://localhost:3000/infos/'+id)
    .subscribe((res: any[])=>{
      
      this.getPostList();
    } )
  }
  edit(obj) {
   
    console.log(obj);
    this.title='Update';
    this.info.number=obj.number;
    this.info.company=obj.company;
    this.info.type=obj.type;
    this.info.colour=obj.colour;
    this.activeindex=obj.id;
  }
  getPostList(){
    
    return this.http.get<any>(this.servUrl)
    .subscribe((res: any[])=>{
      this.ItemsArray= res;
    } )
     
  }
 
}
