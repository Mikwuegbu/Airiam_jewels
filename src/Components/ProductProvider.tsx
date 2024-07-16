import { Reducer, useReducer } from 'react';
import { createContext, Dispatch } from 'react';

export interface productType {
	id: number;
	name: string;
	image: string;
	price: number;
	rating: number;
}

// Define action types
type ProductAction =
	| { type: 'ADD_TO_CART'; payload: productType }
	| { type: 'REMOVE_FROM_CART'; payload: number };

//type for the Context<
type ProductContextType = {
	cartItems: productType[];
	dispatch: Dispatch<ProductAction>;
};

//create the context with initial values
export const ProductContext = createContext<ProductContextType | undefined>(
	undefined
);

const CartReducer: Reducer<productType[], ProductAction> = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, action.payload];
		case 'REMOVE_FROM_CART':
			return state.filter((product) => product.id !== action.payload);
		default:
			return state;
	}
};

//Provider Component where state and functions are managed
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cartItems, dispatch] = useReducer<
		Reducer<productType[], ProductAction>
	>(CartReducer, []);

	return (
		<ProductContext.Provider value={{ cartItems, dispatch }}>
			{children}
		</ProductContext.Provider>
	);
};
