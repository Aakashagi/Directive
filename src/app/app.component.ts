import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'title';



//   color: any;

//   fruits:any= [
//     {name:'kiwi',Rs:'10'},
//     {name:'banana',Rs:'20'},
//     {name:'mango',Rs:'40'}



//   ]
 
//   first='';
//   click()  {
//     this.first = 'done';
//   };





//   fruit='banana';



  
//   cone='true';
//   ctwo='false';
//   style='italic';
//   size='30px';
//   no='';

//   buttonn() {
//   }



//   cl1='one';
//   cl2='two'

// tables=[
//   {id:1,name:'pandi'},
//   {id:2,name:'Aakash'},
//   {id:3,name:'Haresh'},
//   {id:4,name:'Jeeva'},

// ];
 
// firstc='one'
// secondc='two'

// yelloww= 'yellow color visible' ;
// redd='red color visible'
// bluee='blue color visible'
// greenn='green color visible'

// open:any= { 'color' : 'green'};



// yellow(){
//     this.first = this.yelloww;
 
// };

// green(){
//   this.first = this.greenn 
// };

// red(){
//   this.first = this.redd 
// };

// blue(){
//   this.first = this.bluee 
// };




name = 'Angular';
colorred = false;
colorgreen = false;
colorblue = false;
coloryellow = false;
conditionOther=false;
otherStyles = {};
match='';




five() {
  this.colorblue = !this.colorblue;
};

six() {
  this.colorgreen= !this.colorgreen;
};

seven() {
  this.coloryellow = !this.coloryellow;
};

eight() {
  this.colorred = !this.colorred;
};

 

toggleOther() {
  this.conditionOther = !this.conditionOther;
  if (this.conditionOther) {
    this.otherStyles = {
      'font-style':  'italic',
      'font-weight': 'bold',
      'font-size': '24px',
      'color': 'green'
    };
  }
  else
    {
    this.otherStyles = {};
  }
};
toggleOtherr() {
  this.conditionOther = !this.conditionOther;
  if (this.conditionOther) {
    this.otherStyles = {
      'font-style':  'italic',
      'font-weight': 'bold',
      'font-size': '24px',
      'color': 'blue'
    };
  }
  else
    {
    this.otherStyles = {};
  }
}


editStyles={};
others=false;


yellown() {
  this.others = !this.others
  if(this.others) {
    this.editStyles = {
      'font-size': '24px',
      'color':'yellow'
    };
  }
};

redn() {
  this.others = !this.others
  if(this.others) {
    this.editStyles = {
      'font-size': '24px',
      'color':'red'
    };
  }

};

bluen() {
  this.others = !this.others
  if(this.others) {
    this.editStyles = {
      'font-size': '24px',
      'color':'blue'
    };
  }

};

greenn() {
  this.others = !this.others
  if(this.others) {
    this.editStyles = {
      'font-size': '24px',
      'color':'green'
    };
  }

};

youth='title';



search: any;
  list = [
    'Pavan',
    'Meena',
    'Mitesh',
    'Vijay'
  ];



}




