import { Component } from '@angular/core';
import { OrderService } from 'src/app/Servecis/order.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {


  reviews:any
  constructor(private OrderService: OrderService ){
  }
  ngOnInit(): void {
    this.OrderService.GetAllReviews().subscribe({
      next:(data)=>{
        this.reviews=data
        // this._router.navigate(['/showOrders']) 
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
  }

}
