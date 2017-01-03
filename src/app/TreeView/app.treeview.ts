/**
 * Created by ippil on 1/2/2017.
 */


import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {TreeService} from "../service/tree.service";
import {SharedData} from "../shared/app.sharedData";
@Component({
  selector: 'tree-view',
  templateUrl: 'app/TreeView/app.treeview.html'
})
export class TreeView {
  @Input() nodes;
  @Input() id;
  isExpanded: boolean = false;
  private sharedadata: SharedData = {first_name: 'test123', last_name: 'test1234', title:'', details:''};

  constructor(private tservice: TreeService) {
  }

  injectdata(n3) {
    this.sharedadata.title = n3.title;
    this.sharedadata.details = n3;
    this.tservice.setshareddata(this.sharedadata);
  }

  updateData(data) {
    this.tservice.updateTreeData(this.id, this.nodes);
  }

  addSubNodes(node) {
    var a = new Object({"first_name":"Test 1","last_name":"Test 2","title": "Test 1 Test 2",  "nodes": []});
    node.nodes.push(a);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
