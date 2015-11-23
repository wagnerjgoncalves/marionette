User.create(first_name: 'John', last_name: 'Deep')
List.create(name: 'wishlist', user: User.last)
Product.create(list: List.last, name: 'Smart TV LED 3D Ultra Slim Curva Ultra HD 55" 4K LG 55UG8700', price: 'R$ 4.999,00', bought: false)
Product.create(list: List.last, name: 'Home Theater Sony BDV-N9100WL com 5.1 Canais', price: 'R$ 2.369,00', bought: false)
