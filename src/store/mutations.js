export const GET_CATEGORIS = (state,categories) => {
    state.categories = categories.data;
};
export const GET_RECOMMANDEDPRODUCTS = (state,items) => {
    state.items = items.data;
};