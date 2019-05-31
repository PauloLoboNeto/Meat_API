class Order{
  constructor(
    public adress: string,
    public number: number,
    public optional: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = []
  ){}

}

class OrderItem{
  constructor(public quantidadeItem: number, public menuId: string){}
}

export {Order, OrderItem}
