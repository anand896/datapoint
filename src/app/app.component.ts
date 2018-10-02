import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = ["ajay","akshay"];
  person = {name:"ajaya",age:20} /*property bindings*/
  result = false;

show()
{
  alert(1)   /*event binding*/
}

mgs:string=""
validate(data)
{
	if(data.length == 0)
	{
		this.result = true
	}
	else
	{
		this.result= false
		this.mgs="valid data"
	}
}
path = "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"

colval = 1;


btntype1 = true;
btntype2 = false;

colorname1 = "green"
colorname2 = "blue"


callMethod()
{
	alert(2);
}

useremail = "abs@gmail.com"
usermobile = 9837267478


}

