/**
 * Created by ippil on 1/2/2017.
 */

import {Component} from "@angular/core";
import {TreeService} from "../service/tree.service";
@Component({
  selector: 'tree-hierarchy',
  templateUrl: 'app/TreeHierarchy/tree.hierarchy.html',
})
export class TreeHierarchy {
  JsonData:any;

  constructor(private tService: TreeService) {
    this.tService.loadTreeData().subscribe(
      data => this.JsonData = JSON.parse(JSON.stringify(data)),
      error => alert(error),
    );
  }

  insertnewlevel() {
    var a = new Object({"data": [{"first_name":"Test 1","last_name":"Test 2","title": "Test 1 Test 2", "nodes": []}]});
    if(this.JsonData.length > 0){
      this.JsonData.push(a);
    }
    this.tService.insertnewdata();

  }

}
