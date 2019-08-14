import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/Store";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ConfirmationOrders from "../components/ConfirmationOrders";
const Authentication = () =>
    import(/* webpackChunkName: "admin" */ "../components/admin/Authentication");
const Admin = () =>
    import(/* webpackChunkName: "admin" */ "../components/admin/Admin");
const ProductAdmin = () =>
    import(/* webpackChunkName: "admin" */ "../components/admin/ProductAdmin");
const OrderAdmin = () =>
    import(/* webpackChunkName: "admin" */ "../components/admin/OrderAdmin");
const ProductEditor = () =>
    import(/* webpackChunkName: "admin" */ "../components/admin/ProductEditor");
import dataStore from "../store";
Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: Cart },
        { path: "/checkout", component: Checkout },
        { path: "/admin", component: Administration,
            beforeEnter(to, from, next) {
                if (dataStore.state.authentication.authenticated) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                { path: "products/:op(create|edit)/:id(\\d+)?", component: ActionsProducts },
                { path: "products", component: AdminProducts },
                { path: "orders", component: AdminOrders },
                { path: "", redirect: "/admin/products"}
            ]
        },
        { path: "/login", component: Authentication },
        { path: "/confirmation/:id", component: ConfirmationOrders },
        { path: "*", redirect: "/" }
    ]
})