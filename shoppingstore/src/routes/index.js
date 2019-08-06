import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/Store";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ConfirmationOrders from "../components/ConfirmationOrders";
import Administration from "../components/admin/Administration";
import Authentication from "../components/admin/Authentication";
import AdminProducts from "../components/admin/AdminProducts";
import AdminOrders from "../components/admin/AdminOrders";
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
                { path: "/admin/products", component: AdminProducts },
                { path: "/admin/orders", component: AdminOrders },
                { path: "", redirect: "/admin/products"}
            ]
        },
        { path: "/login", component: Authentication },
        { path: "/confirmation/:id", component: ConfirmationOrders },
        { path: "*", redirect: "/" }
    ]
})
