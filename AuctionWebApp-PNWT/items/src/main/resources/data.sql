INSERT INTO category(
    id, name)
VALUES ('8fa3d528-9213-4cef-abee-0fdeddb6828b', 'Fashion');

INSERT INTO subcategory(
    id, name, category_id)
VALUES ('ad1456a1-abc2-145f-ab4e-1afed4b3828b', 'Dress', '8fa3d528-9213-4cef-abee-0fdeddb6828b');

INSERT INTO product(
    id, buyer_id, description, end_date, name, paid, seller_id, start_date, start_price, category_id, subcategory_id)
VALUES ('2a2557ad-dbc2-d4df-2b4e-4afe54b3528b',
        null,
        'New modern dress summer collection, flowy fun and comfortable, suitable for any occasion.',
        '2023-08-25 12:30:00',
        'Light Blue Dress',
        false,
        '9ea4d548-9713-4bef-bbee-0fdeddb6828b',
        '2023-05-25 12:30:00',
        28.00,
        '8fa3d528-9213-4cef-abee-0fdeddb6828b',
        'ad1456a1-abc2-145f-ab4e-1afed4b3828b');

INSERT INTO image(
    id, image_path, product_id)
VALUES ('0686ec15-74d9-4f06-ab2a-d9a842fe1fd5', '/products/product-dress.jpg', '2a2557ad-dbc2-d4df-2b4e-4afe54b3528b');