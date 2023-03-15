-- insert user and admin account
INSERT INTO users (name, email, phone_number, password) VALUES ('test user', 'test.user@example.com', '987-654-3210', 'password');
INSERT INTO users (name, email, phone_number, password, is_admin) VALUES ('Yuqin Hu', 'admin@example.com', '123-456-7890', 'adminpassword', TRUE);

-- insert 3 types of niches
INSERT INTO niches (name) VALUES ('shoes');
INSERT INTO niches (name) VALUES ('clothes');
INSERT INTO niches (name) VALUES ('pants');

-- insert several items
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Nike Air Max 97', 'Black and white running shoes', 150, 'https://static.nike.com/a/images/t_default/17429711-d516-439b-a220-fcd592672743/air-max-97-shoes-P0R4Hb.png');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Adidas Ultraboost', 'Grey and orange sneakers', 180, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/49172f9e42bd4b5d9989abed00994cb0_9366/Ultraboost_WINTER.RDY_Shoes_Grey_EG9800_01_standard.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Converse Chuck Taylor', 'Classic black high tops', 60, 'https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9160_a_107x1_2nd.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Vans Old Skool', 'Black and white skate shoes', 70, 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Vans-Old-Skool-Black-%26-White-Skate-Shoes-_204607-front-US.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 1, 'Puma Suede', 'Red and white suede sneakers', 80, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/02/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Black T-shirt', 'A classic black cotton T-shirt', 20, 'https://www.happycrafters.ca/content/images/thumbs/0004096_gildan-ultra-cotton-youth-t-shirt_550.jpeg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Blue Dress', 'A light blue summer dress', 50, 'https://i.etsystatic.com/6471155/r/il/d9708c/2812631142/il_570xN.2812631142_4w1u.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Jeans', 'Straight leg blue jeans', 40, 'https://www.veromoda.ca/on/demandware.static/-/Sites-bslive/default/dw5cc8b331/images/large/15283853-00AS32-29-1.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Hoodie', 'Grey hoodie with front pocket', 30, 'https://cdn11.bigcommerce.com/s-ty4f9nrj70/images/stencil/1280x1280/products/1136/2416/Hoodie_Grey__47503.1663980641.jpg?c=1');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 2, 'Leather Jacket', 'Black leather jacket with silver zippers', 100, 'https://cdn-images.farfetch-contents.com/15/69/84/43/15698443_29593364_600.jpg');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Black Leggings', 'Stretchy black leggings', 25, 'https://m.media-amazon.com/images/I/51lBfqNoCwL._AC_UX425_.jpg', false, true);
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 3, 'Khaki Pants', 'Straight leg khaki pants', 35, 'https://reddhart.ca/wp-content/uploads/2021/03/103574-253-Dark-Khaki.png');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Denim Shorts', 'Blue denim shorts with frayed hem', 20, 'https://cdn-img.prettylittlething.com/5/8/3/6/5836f54e85a59441e26d7074cebe20e6d821c1f7_CMH1344_6.jpg', true, false);
INSERT INTO items (user_id, niche_id, name, description, price, photo_url)
VALUES (1, 3, 'Yoga Pants', 'Black yoga pants with patterned waistband', 30, 'https://cdn.shopify.com/s/files/1/0267/4075/2568/products/3022_2_1.jpg?v=1639573546');
INSERT INTO items (user_id, niche_id, name, description, price, photo_url, is_featured, is_sold)
VALUES (1, 3, 'Cargo Pants', 'Beige cargo pants with multiple pockets', 45, 'https://media.boohoo.com/i/boohoo/bmm27395_ecru_xl/mens-ecru-plus-multi-pocket-cargo-trouser/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit', true, true);

-- -- insert user 1 favourite items
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 4);
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 8);
-- INSERT INTO favourites (user_id, item_id)
-- VALUES (1, 10);