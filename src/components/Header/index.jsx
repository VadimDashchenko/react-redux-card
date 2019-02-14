import React from 'react';
import { Menu, List, Popup, Image, Button } from 'semantic-ui-react';

const CartComponent = ({ title, image, id, removeBookFromCart}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeBookFromCart.bind(this, id)} color="red">Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const Header = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item name='name' >
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='result' >
                Итого: &nbsp; <b>{totalPrice}</b> грн.
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item name='cart' >
                         Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default Header;