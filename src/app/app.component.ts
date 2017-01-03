import {Component} from '@angular/core';
import {TreeHierarchy} from "./TreeHierarchy/app.treehierarchy";
import {TreeService} from "./service/tree.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TreeService, TreeHierarchy]
})
export class AppComponent {
  title = 'app works!';
  detailsdata;

  constructor(private service: TreeService) {
    this.service.getshareddata()
      .subscribe(
        data => {
          console.log("Data Received");
          this.detailsdata = data;

        });
  }

}
