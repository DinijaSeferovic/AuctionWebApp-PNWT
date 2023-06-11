INSERT INTO role(
    id, name)
VALUES ('5b62e6b9-c413-4b6f-b890-3aefc0b7eeea', 'admin');

INSERT INTO role(
    id, name)
VALUES ('78985776-f328-4106-a9e3-e5590dde9e8a', 'user');

INSERT INTO users(
    id, active, date_of_birth, email, first_name, image_path, last_name, password, phone_number)
VALUES ('9ea4d548-9713-4bef-bbee-0fdeddb6828b', true, 'admin@gmail.com', 'Admin', null, 'Adminic', '9ea4d548-9713-4bef-bbee-0fdeddb6828b', '$2a$10$PjCKanCd2Huoutm21oME8etYHVtFiaIQDPAc0IEwDrU0f8S4a0teC', null);

INSERT INTO public.user_role(
    user_id, role_id)
VALUES ('9ea4d548-9713-4bef-bbee-0fdeddb6828b', '5b62e6b9-c413-4b6f-b890-3aefc0b7eeea');