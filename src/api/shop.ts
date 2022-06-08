/**
 * Mocking client-server processing
 */
import _products from "./products.json";

const TIMEOUT = 100;

const shop = {
  getProducts: (cb: any, timeout: number) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload: any, cb: any, timeout: number) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};

export default shop;
