
import { useContext } from "react";
import {ShopContext}  from './ShopContext';
export const useShop = () => {
    const context = useContext(ShopContext);
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext");
    }
  
    return context;
  };