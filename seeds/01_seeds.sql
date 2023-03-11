-- insert user and admin account
INSERT INTO users (name, email, phone_number, password) VALUES ('test user', 'test.user@example.com', '987-654-3210', 'password');
INSERT INTO users (name, email, phone_number, password, is_admin) VALUES ('Yuqin Hu', 'admin@example.com', '123-456-7890', 'adminpassword', TRUE);

-- insert 3 types of niches
INSERT INTO niches (name) VALUES ('shoes');
INSERT INTO niches (name) VALUES ('clothes');
INSERT INTO niches (name) VALUES ('pants');

-- insert several items
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Nike Air Max 97', 'Black and white running shoes', 150, 'https://example.com/nike-air-max-97.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Adidas Ultraboost', 'Grey and orange sneakers', 180, 'https://example.com/adidas-ultraboost.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Converse Chuck Taylor', 'Classic black high tops', 60, 'https://example.com/converse-chuck-taylor.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Vans Old Skool', 'Black and white skate shoes', 70, 'https://example.com/vans-old-skool.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Puma Suede', 'Red and white suede sneakers', 80, 'https://example.com/puma-suede.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Black T-shirt', 'A classic black cotton T-shirt', 20, 'https://example.com/black-t-shirt.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Blue Dress', 'A light blue summer dress', 50, 'https://example.com/blue-dress.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Jeans', 'Straight leg blue jeans', 40, 'https://example.com/jeans.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Hoodie', 'Grey hoodie with front pocket', 30, 'https://example.com/hoodie.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Leather Jacket', 'Black leather jacket with silver zippers', 100, 'https://example.com/leather-jacket.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Black Leggings', 'Stretchy black leggings', 25, 'https://example.com/black-leggings.jpg', false, true);
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 3, 'Khaki Pants', 'Straight leg khaki pants', 35, 'https://example.com/khaki-pants.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Denim Shorts', 'Blue denim shorts with frayed hem', 20, 'https://example.com/denim-shorts.jpg', true, false);
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 3, 'Yoga Pants', 'Black yoga pants with patterned waistband', 30, 'https://example.com/yoga-pants.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Cargo Pants', 'Beige cargo pants with multiple pockets', 45, 'https://example.com/cargo-pants.jpg', true, true);

-- -- insert user 1 favourite items
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 4);
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 8);
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 10);