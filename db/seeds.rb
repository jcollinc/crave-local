# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
#

puts "Seeding..."

#Users
user = User.create(name: "test", username: "test@test.com", password: "password", address: "456 Main", isRestaurant: false)
user2 = User.create(name: "Ramen Tatsuya", username: "ramen_tatsuya", password: "password", address: "456 Main", isRestaurant: true)
user3 = User.create(name: "Taco Deli", username: "taco_deli", password: "password", address: "456 Main", isRestaurant: true)
user4 = User.create(name: "Kismet Cafe", username: "kismet_cafe", password: "password", address: "456 Main", isRestaurant: true)
user5 = User.create(name: "Chuy's", username: "chuys", password: "password", address: "456 Main", isRestaurant: true)

#Restaurants
restaurant1 = Restaurant.create(name: "Ramen Tatsuya", lat: 30.36, lng: -97.71, description: "A ramen restaurant", delivery_fee: 5.0, hours: "9am - 10pm", image_url: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg")
restaurant2 = Restaurant.create(name: "Taco Deli", lat: 30.25, lng: -97.78, description: "A taco restaurant", delivery_fee: 2.0, hours: "9am - 10pm", image_url: "https://s.hdnux.com/photos/60/74/50/12831281/5/ratio3x2_1200.jpg")
restaurant3 = Restaurant.create(name: "Kismet Cafe", lat: 30.29, lng: -97.72, description: "A Mediterranean restaurant", delivery_fee: 1.0, hours: "9am - 10pm", image_url: "https://fastly.4sqi.net/img/general/600x600/540821_TogVyFlWHtaKXt3bFJlszhKcX_JqCnenmBUg5kZm8d4.jpg")
restaurant4 = Restaurant.create(name: "Chuy's", lat: 30.38, lng: -97.68, description: "A Mexican restaurant", delivery_fee: 5.0, hours: "9am - 10pm", image_url: "https://fox59.com/wp-content/uploads/sites/21/2019/08/chuy-pic-1-1.jpg")

#Orders
order = Order.create(user:user, restaurant:restaurant1, total: 10.0)

#Menus
menu = Menu.create(restaurant_id: restaurant1.id)

#Menu Items
menu_item = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "test menu item", price: 10.0, description: "a test menu item", item_type: "side", image_url: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg")
menu_item2 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "test menu item", price: 10.0, description: "a test menu item", item_type: "side", image_url: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg")


#Order Items
order_item = OrderItem.create(order_id: order.id, menu_item_id: menu_item.id)

puts "Done! 🌱"






