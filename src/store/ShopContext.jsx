import React, { useContext} from 'react'
import { cartItem } from '../items/cartItems'

const shopContext = React.createContext();

const ShopContextProvider = ({children}) => {
    const context = shopContextManager();

    return <shopContext.Provider value={context}>children</shopContext.Provider>
}

const shopContextManager = () => {
    const [cart, setCart] = useState([])

    const addItemToCart = (itemId, name) => {
        let newItem = {
            itemId,
            name,
            amount: 1
        };
        setCart([...cart, newItem]);
    }

    const changeCartAmmount = (itemId, amount) => {
        const foundItem = cart.filter((item) => item.itemId === itemId);
        foundItem.amount = foundItem.amount + 1;
        const index = cart.indexOf(foundItem);
        const newCart = [...cart];
        newCart[index] = foundItem;
        setCart(newCart);
    }
}