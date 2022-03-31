class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :items
  has_one :user
  has_one :restaurant
end
