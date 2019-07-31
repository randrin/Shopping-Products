import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
    strict: true,
    state: {
        products: [],
        productsTotal: 0,
        categoriesData: [],
        currentPage: 1,
        pageSize: 4,
        currentCategory: "All"
    },
    getters: {
        productsFilteredByCategory: state => state.products
            .filter(p => state.currentCategory == "All"
                || p.category == state.currentCategory),
        processedProducts: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.productsFilteredByCategory.slice(index, index + state.pageSize)
        },
        pageCount: (state, getters) => Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
        categories: state => ["All", ...state.categoriesData]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.products = data.productsData;
            state.productsTotal = data.productsData.length;
            state.categoriesData = data.categoriesData.sort();
        }
    },
    actions: {
        async getData(context) {
            let productsData = (await Axios.get(productsUrl)).data;
            let categoriesData = (await Axios.get(categoriesUrl)).data;
            context.commit("setData", { productsData, categoriesData} );
        }
    }
})