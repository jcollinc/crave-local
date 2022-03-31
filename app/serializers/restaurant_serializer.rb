class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng, :description, :delivery_fee, :hours, :image_url
  has_many :menu_items
end
