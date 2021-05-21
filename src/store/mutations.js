import Vue from 'vue'
import Vuex from 'vuex'

export default {
    // addCart(state, payload) {
    // state.cartList.map(item => {
    //     if (item.id === payload.id) {
    //         item.count += 1
    //     }else {
    //         state.cartList.push(payload)
    //         payload.count = 1
    //     }
    // });

    // let oldProduct = state.cartList.find(item => {
    //    return item.id === payload.id
    // })

    // if (oldProduct){
    //     oldProduct.count += 1
    // }else{
    //     payload.count = 1
    //     state.cartList.push(payload)
    // }

    addCart(state, payload) {
        state.cartList.push(payload)
    },
    addCount(state, payload) {
        payload.checked = true
        payload.count++
    },

    checked(state, payload) {
        payload.checked = !payload.checked
    }

    //     }
}