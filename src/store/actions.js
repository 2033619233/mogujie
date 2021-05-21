
export default  {
    addCart(context, payload) {
        // context.state.cartList.map(item => {
        //     console.log(item);
        //     console.log(payload.id);
        //     if (item.id === payload.id) {
        //         context.commit('addCount',item)
        //     }else {
        //         payload.count = 1
        //         context.commit('addCart',payload)
        //     }
        // })

         let oldProduct = context.state.cartList.find(item => {
           return item.id === payload.id
        })

        if (oldProduct){
            context.commit('addCount', oldProduct)
        }else{
            payload.count = 1
            context.commit('addCart', payload)
        }

    },

}