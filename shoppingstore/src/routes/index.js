import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/Store";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ConfirmationOrders from "../components/ConfirmationOrders";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: Cart },
        { path: "/checkout", component: Checkout },
        { path: "/confirmation/:id", component: ConfirmationOrders },
        { path: "*", redirect: "/" }
    ]
})
