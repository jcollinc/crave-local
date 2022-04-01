#Restaurants
restaurant1 = Restaurant.create(name: "Ramen Tatsuya", lat: 30.36, lng: -97.71, description: "A ramen restaurant", delivery_fee: 5.0, hours: "9am - 10pm", image_url: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg")
restaurant2 = Restaurant.create(name: "Taco Deli", lat: 30.25, lng: -97.78, description: "A taco restaurant", delivery_fee: 2.0, hours: "9am - 10pm", image_url: "https://s.hdnux.com/photos/60/74/50/12831281/5/ratio3x2_1200.jpg")
restaurant3 = Restaurant.create(name: "Kismet Cafe", lat: 30.29, lng: -97.72, description: "A Mediterranean restaurant", delivery_fee: 1.0, hours: "9am - 10pm", image_url: "https://fastly.4sqi.net/img/general/600x600/540821_TogVyFlWHtaKXt3bFJlszhKcX_JqCnenmBUg5kZm8d4.jpg")
restaurant4 = Restaurant.create(name: "Chuy's", lat: 30.38, lng: -97.68, description: "A Mexican restaurant", delivery_fee: 5.0, hours: "9am - 10pm", image_url: "https://fox59.com/wp-content/uploads/sites/21/2019/08/chuy-pic-1-1.jpg")

#Orders
order = Order.create(user:user, restaurant:restaurant1, total: 10.0)

#Menus
menu = Menu.create(restaurant_id: restaurant1.id)
menu2 = Menu.create(restaurant_id: restaurant2.id)
menu3 = Menu.create(restaurant_id: restaurant3.id)
menu4 = Menu.create(restaurant_id: restaurant4.id)

#Menu Items

#ramen tatsuya
menu_item = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "OG", price: 10.0, description: "pork bone broth, chashu pork, ajitama egg, woodear mushroom, scallion, sesame seeds", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2017/07/OG6.jpg")
menu_item2 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "SHO-YU", price: 10.0, description: "pork bone broth, soy sauce blend, chashu pork, ajitama egg, menma, scallion, nori, pepper", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2017/07/shoyu2.jpg")
menu_item3 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "MI-SO-NOT", price: 10.0, description: "MI-SO-NOT", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2017/07/Miso-not.jpg")
menu_item4 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "MI-SO-HOT", price: 10.0, description: "spicy pork bone broth, miso blend, goma pork, ajitama egg, scallions, napa cabbage, bean sprout, corn, sesame seeds", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2017/07/Miso2.jpg")
menu_ite5 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "TSUKEMEN", price: 10.0, description: "condensed pork bone dipping broth, chashu pork, ajitama egg, nori, lime", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2017/07/TSUKEMEN.jpg")
menu_item6 = MenuItem.create(menu_id: menu.id, restaurant_id: restaurant1.id, name: "CURRY NU SKOOL", price: 10.0, description: "domo curry spice, almond milk tonkotsu, shroom abura, spinach, atsuage tofu, corn, kikurage", item_type: "plate", image_url: "https://ramen-tatsuya.com/wp-content/uploads/2022/02/2021-1-29-RT-Curry-Nu-Skool.jpg")


#taco deli
menu_item7 = MenuItem.create(menu_id: menu2.id, restaurant_id: restaurant2.id, name: "DELIBELLY", price: 10.0, description: "organic pork belly, goodflow honey tomatillo-serrano salsa, avocado, cilantro, onion", item_type: "plate", image_url: "https://olo-images-live.imgix.net/39/3951395a7036419f9bf47b5a316eef85.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=0efc1a1216f374266ad6069ec597d5c3")
menu_item8 = MenuItem.create(menu_id: menu2.id, restaurant_id: restaurant2.id, name: "SPACE COWBOY", price: 10.0, description: "roasted baby portabella mushrooms, grilled corn, roasted peppers, caramelized onion, guacamole, queso fresco", item_type: "plate", image_url: "https://media.thanx.com/image/eyJ1cmwiOiJodHRwczovL29sby1pbWFnZXMtbGl2ZS5pbWdpeC5uZXQvNTMvNTMwZTcwOGQ4NjU5NGQwMWI0NjAyYWRmOTY2NzYzNmQuanBnP2F1dG89Zm9ybWF0JTJDY29tcHJlc3MmcT02MCZjcz10aW55c3JnYiZ3PTEyMDAmaD04MDAmZml0PWZpbGwmZm09cG5nMzImYmc9dHJhbnNwYXJlbnQmcz0zYzc0MTU5ZWI2OTAwZGU4NmYxYzRhYWRmZjFlZWIxNiIsImVkaXRzIjpbeyJ0eXBlIjoicmVzaXplIiwid2lkdGgiOjQzMH1dfQ%3D%3D?c=EXDsHXAJUcg4dkGzaXDJDpvi%2FlMFyGCU4s78%2Bwv7xg0%3D")
menu_item9 = MenuItem.create(menu_id: menu2.id, restaurant_id: restaurant2.id, name: "SHRIMPOSITO", price: 10.0, description: "grilled texas gulf shrimp, chipotle-sesame adobo, queso fresco, avocado", item_type: "plate", image_url: "https://media.thanx.com/image/eyJ1cmwiOiJodHRwczovL29sby1pbWFnZXMtbGl2ZS5pbWdpeC5uZXQvZmEvZmFjYjc2MDMwZGJiNDg5OGI1ZGEwMWI2MzNhYjRjMDAuanBnP2F1dG89Zm9ybWF0JTJDY29tcHJlc3MmcT02MCZjcz10aW55c3JnYiZ3PTEyMDAmaD04MDAmZml0PWZpbGwmZm09cG5nMzImYmc9dHJhbnNwYXJlbnQmcz1kMzM1NWEzOWZmNzRiZDU4N2UxZDM1MzQ3N2MzYTEwOSIsImVkaXRzIjpbeyJ0eXBlIjoicmVzaXplIiwid2lkdGgiOjQzMH1dfQ%3D%3D?c=2p%2FKAwVVuBrXNPKd8nZl4ITWFyasg2bgQY9ny1k%2BonM%3D")
menu_item10 = MenuItem.create(menu_id: menu2.id, restaurant_id: restaurant2.id, name: "SABROSITA BARBACOA", price: 10.0, description: "Texas-sourced braised beef cheek, salsa de arbol, cilantro, onion, avocado", item_type: "plate", image_url: "https://media.thanx.com/image/eyJ1cmwiOiJodHRwczovL29sby1pbWFnZXMtbGl2ZS5pbWdpeC5uZXQvZmYvZmZkM2FiYTUzMjg4NDc0Nzk1ZTc2MjEwNTExZGJjZTUuanBnP2F1dG89Zm9ybWF0JTJDY29tcHJlc3MmcT02MCZjcz10aW55c3JnYiZ3PTEyMDAmaD04MDAmZml0PWZpbGwmZm09cG5nMzImYmc9dHJhbnNwYXJlbnQmcz02N2FmZGY0YjBiM2JiODRjM2Q1MjA1YzYxZDdmNDhlNiIsImVkaXRzIjpbeyJ0eXBlIjoicmVzaXplIiwid2lkdGgiOjQzMH1dfQ%3D%3D?c=xfsnomfg962yAwh8UEFfXXBbqWdJMA%2BEWM0B51Gwzd0%3D")
menu_item11 = MenuItem.create(menu_id: menu2.id, restaurant_id: restaurant2.id, name: "POLLO EN MOLE", price: 10.0, description: "Shredded chicken, housemade mole, queso fresco, cilantro, onion (contains nuts)", item_type: "plate", image_url: "https://media.thanx.com/image/eyJ1cmwiOiJodHRwczovL29sby1pbWFnZXMtbGl2ZS5pbWdpeC5uZXQvZDgvZDg5ZGU4MDgxN2ZjNDVkZDlmNWNmNTE0MDBiY2I4ZTMuanBnP2F1dG89Zm9ybWF0JTJDY29tcHJlc3MmcT02MCZjcz10aW55c3JnYiZ3PTEyMDAmaD04MDAmZml0PWZpbGwmZm09cG5nMzImYmc9dHJhbnNwYXJlbnQmcz1kMzZjMTZkNTNhMDBlOGZhYTJlNmU0ZWMzZTliNTIwZCIsImVkaXRzIjpbeyJ0eXBlIjoicmVzaXplIiwid2lkdGgiOjQzMH1dfQ%3D%3D?c=xhd%2BFq74IXw5ELn6bNOMcBxmVPeyG9xtdBX5pzwn4Ik%3D")


#Kismet Cafe
menu_item12 = MenuItem.create(menu_id: menu3.id, restaurant_id: restaurant3.id, name: "P17 Jalapeno Sauce", price: 10.0, description: "Sauce Drizzled Rice and Salad Bowl", item_type: "plate", image_url: "https://files.secure.website/wscfus/10501757/8386372/img-5715-w300-o.jpg")
menu_item13 = MenuItem.create(menu_id: menu3.id, restaurant_id: restaurant3.id, name: "Gyro Wrap", price: 10.0, description: "Lettuce, Tomato, Taziki", item_type: "plate", image_url: "https://files.secure.website/wscfus/10501757/8387157/shawarma-cut-w300-o.png")
menu_item14 = MenuItem.create(menu_id: menu3.id, restaurant_id: restaurant3.id, name: "Gyro Over Rice", price: 10.0, description: "Hummos, Salad, Taziki S. Pita", item_type: "plate", image_url: "https://files.secure.website/wscfus/10501757/8386372/img-5715-w300-o.jpg")
menu_item15 = MenuItem.create(menu_id: menu3.id, restaurant_id: restaurant3.id, name: "Sheesh Kabab", price: 10.0, description: "Hummos, Tabouleh, Tomato S. Pita", item_type: "plate", image_url: "https://media.istockphoto.com/photos/beef-shish-kababs-skewers-picture-id493765969")

#chuy's
menu_item16 = MenuItem.create(menu_id: menu4.id, restaurant_id: restaurant4.id, name: "Chuychanga", price: 10.0, description: "A flour tortilla filled with roasted chicken, cheese, cilantro & green chiles, deep fried & served with one of our Signature Sauces & a scoop of sour cream.", item_type: "plate", image_url: "https://www.chuys.com/uploads/store-images/bayfsb_specialties-img.png")
menu_item17 = MenuItem.create(menu_id: menu4.id, restaurant_id: restaurant4.id, name: "Fajitas", price: 10.0, description: "Every handmade tortilla is fresh off our very own comal. Your choice of beef, chicken or a combination, marinated in our signature blend of Shiner Bock® beer, serrano peppers, lime juice & secret spices. Grilled with onions & peppers. Served with lettuce, guacamole, sour cream, cheese, pico de gallo, flour tortillas, Mexican rice & refried beans.", item_type: "plate", image_url: "https://www.chuys.com/uploads/Menu_Images/fajitas.png")
menu_item18 = MenuItem.create(menu_id: menu4.id, restaurant_id: restaurant4.id, name: "Chicka-Chicka Boom-Boom", price: 10.0, description: "Roasted chicken & cheese with our fan favorite Boom-Boom Sauce.", item_type: "plate", image_url: "https://www.chuys.com/uploads/Menu_Images/ENCH1LADAS.png")
