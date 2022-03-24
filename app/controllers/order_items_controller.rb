class OrderItemsController < ApplicationController

  def index  
    render json: OrderItem.all
  end

  def create 
    order_item = OrderItem.create(order_item_params)
    render json: order_item, status: :created
  end

  def destroy   
    order_item = OrderItem.find(params[:id])
    order_item.destroy, status: :deleted
    head :no_content
  end

  private

  def order_item_params
    params.permit(:order_id, :menu_item_id, :price)
  end

end