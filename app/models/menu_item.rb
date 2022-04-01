class MenuItem < ApplicationRecord
  validates :price, presence: true, numericality: true
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true

  belongs_to :menu
  belongs_to :restaurant

  has_one :order_item, dependent: :destroy

end
