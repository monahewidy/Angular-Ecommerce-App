import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ClassData } from 'src/app/Models/class-data';
import { FormService } from 'src/app/Services/ads.service';
import { Informatin } from '../../Models/Informatin';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,OnDestroy {

  // use interface
  generalInf:Informatin = {
    trackName: "Mona : mern stack developer",
    trackLogo:"../../../assets/2.webp",
    itiBranches: ["cairo","giza","qena"]
  };

  // Day2
  // class
  classData: ClassData;
  //1- intialize values
  subScribe!:Subscription  // (!) null null when you know this function will return value not null use this in intializing
  subScribeArr:Subscription[]=[]  // (!) null null when you know this function will return value not null use this in intializing

// add

ads:string=''
err:string=''
compelete:string=''

  constructor(private formS:FormService) {
    this.classData = new ClassData(
      "hello test Class",
      "https://pbs.twimg.com/media/FMq-UTLXwAEg_Nb.jpg:large",
      "https://www.tektutorialshub.com/wp-content/uploads/2020/03/Event-Binding-in-Angular.png",
      ["Mona","front-end","MERN"]
    );
  }
  addArr:string[]=[]
  ngOnInit(): void {
let observer={
  next:(data:string)=>{ //data comming from from observable
    this.ads=data;

  },error:(err:string)=>{
    this.err= err;

  },compelete:()=>{
    this.compelete='its done'

  }
}
// this.subScribe=this.formS.getadsShow(2).subscribe(observer)
this.subScribe=this.formS.getadsShow(2).subscribe(observer)
this.subScribeArr.push(this.subScribe)
} // inject the object to this function
  ngOnDestroy(): void {
    for (let sub of this.subScribeArr) // bestPractice for many observables to unsubscribe
    sub.unsubscribe()
  }

  // showImg: boolean = true;
  // toggleImg() {
  //   this.showImg = !this.showImg;
  // }

// toggle idea here to switch between true and false
// property first
showImg:boolean=true; // defoult true to show image
// methot second
toggleTest(){
  this.showImg=!this.showImg; //if it is not true
}
//two way test binding
userFeedback:string = " write anyting, it will show : "

}
