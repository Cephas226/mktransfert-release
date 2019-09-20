import { Component, OnInit } from '@angular/core';
 
import { DataService } from './data.service';
import { SortablejsOptions } from 'angular-sortablejs';
import { List } from './list.interface';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {

  public lists: Array<List>;
  public addListText: String;
    public dataService: DataService;
    public sortableOptions: SortablejsOptions = {
        group: 'listSortable',
        animation: 150,
        handle: '.handle' ,
        onUpdate: (event: any) => {
            this.dataService.save();
        }
    };
    constructor( dataServ: DataService ) {
        dataServ.subscribeToLists((data) => {
            this.lists = data;
        });
        
        this.dataService = dataServ;
    }
    onSaveNewList() {
        if (this.addListText.trim() !== '') {
            this.dataService.saveNewList(this.addListText.trim());
            this.addListText = '';
        }
    }
  ngOnInit() {
  }

}
