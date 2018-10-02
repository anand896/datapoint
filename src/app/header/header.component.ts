import { Component, OnInit } from '@angular/core'; /*onInit is middleware*/

@Component({   /*decoration*/
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	xyz = 1;

  constructor() { }

  ngOnInit() {
  }

}
