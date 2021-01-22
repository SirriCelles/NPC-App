import { Component } from '@angular/core';
import { Item } from './items.model';
import { AppServiceService } from './service/app-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weapons: Item[];
  addedItems: Item[];
  total = 0;
  orders: Item[];

  constructor(private appService: AppServiceService, public toastr: ToastrService) {}
   
  ngOnInit(): void {
    this.weapons = this.appService.getItems();
    this.getAddedItems();
    this.getTotal();
  }

  setCartStatus(value){
    this.appService.updateItem(value.name, value.status);
    this.getAddedItems();
    this.getTotal();
  }

  getAddedItems(){
    this.addedItems = this.appService.getCartItems();
  }

  getTotal(){
    if(this.addedItems.length !== 0) {
      this.total = this.addedItems.map(el => el.price)
      .reduce((sum, next) => sum + next);
    }  else {
      this.total = 0;
    }
  }

  onBuy($event){
    if(this.addedItems.length !== 0 || this.total !== 0) {
      this.toastr.success('Transaction Successful');
      // could be sent to some Service of Buy orders
      this.orders = [...this.addedItems];
    } else {
      this.toastr.warning('No Item in Cart');
    }

  }

}
