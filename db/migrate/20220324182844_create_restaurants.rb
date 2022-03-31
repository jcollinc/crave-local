class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.string :description
      t.float :delivery_fee
      t.string :hours
      t.string :image_url

      t.timestamps
    end
  end
end
