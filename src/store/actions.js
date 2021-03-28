import axios from "axios";
export const getCategories = ({ commit }) => {
    axios.get('http://funtravelegypt.com/ecommerce/public_html/api/categories')
    .then(res => {
        commit('GET_CATEGORIS', res.data)
    });
};
export const getRecommandedItems = ({ commit }) => {
    axios.get('http://funtravelegypt.com/ecommerce/public_html/api/items')
    .then(res => {
        commit('GET_RECOMMANDEDPRODUCTS', res.data)
    });
}
/*export const REGISTER = ({full_name ,account_name , account_type , email ,  password , password_confirmation }) => {
    return new Promise(() => {
        axios.post('http://funtravelegypt.com/ecommerce/public_html/api/RegisterApi' ,
        {full_name , account_name , account_type , email ,  password , password_confirmation})
    })
}*/