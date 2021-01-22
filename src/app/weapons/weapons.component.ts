import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  @Input() name: string;

  @Input() image: string;

  @Input() price: number;

  @Input() desc: string;

  @Input() cartVal: boolean;

  @Output() addToCartStatus = new EventEmitter<any>();

  addToCartVal: boolean;

  constructor() { }

  ngOnInit() {
  }

  onAddToCart(event){
    this.cartVal = !this.cartVal;
    const weaponValue: {name: string, status: boolean } = {
        name: this.name,
        status: this.cartVal
    }
    this.addToCartStatus.emit(weaponValue);
  }

}
