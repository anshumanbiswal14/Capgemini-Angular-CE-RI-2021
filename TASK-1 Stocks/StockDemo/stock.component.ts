import { Component, OnInit } from '@angular/core';

interface stockDetails{
  companyName: string,
  costPrice : number,
  volume : number,
  vwap : number,
  holding : boolean,
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 isAccepted = false;
  isColored = false;
  stockName:string="";
  stocks: stockDetails[]=[
    {
    companyName:"Infosys",
    costPrice : 1400,
    volume : 5,
    vwap : 1390,
    holding:false, 
    },
    {
    companyName:"TCS",
    costPrice : 950,
    volume : 7,
    vwap : 960,
    holding:false,
    }
  ];

  boughtStocks:stockDetails[] = [];

  getAllStocks():stockDetails[]{
    return this.stocks;
  }

  getCostFromUser(cost:string, name:string){
    let userCost:number = parseInt(cost);

    this.stocks.forEach(stock=>{
      let buyCost:number = stock.costPrice - (0.01*stock.costPrice);
      if(stock.companyName.localeCompare(name) == 0 && (userCost<=stock.costPrice && userCost>= buyCost)){
        this.isAccepted = true;
        this.stockName=name;
      }
    });
  }
  
  doBuyStock(){
    this.stocks.forEach(stock=>{
      if(stock.companyName.localeCompare(this.stockName) == 0){
        stock.holding=true;
        this.boughtStocks.push(stock);
      }
  });
}
 
}
