class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :username
      t.string :address
      t.string :description
      t.float :delivery_fee
      t.string :hours
      t.string :password_digest

      t.timestamps
    end
  end
end