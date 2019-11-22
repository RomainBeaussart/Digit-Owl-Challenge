import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store: {
    state: {
        command: Array<any>
    },
    mutations: {
        add: any,
        remove: any
    },
    actions: any,
    modules: any
} = {
    state: {
        command: []
    },
    mutations: {
        add(state: any, add: any) {
            let item = state.command.find((element: any) => element.short_name === add.short_name 
                && element.portion_name === add.portion_name)
            if (item){
                item.quantity ++
            } else {
                add['quantity'] = 1
                state.command.push(add)
            }
        },
        remove(state: any, remove: any) {
            let indexItem = state.command.findIndex((element: any) => element.short_name === remove.short_name && element.portion_name === remove.portion_name)
            state.command[indexItem].quantity --
            console.log('testQtt', state.command[indexItem])
            if(state.command[indexItem].quantity === 0){
                state.command.splice(indexItem, 1)
            }
        }

    },
    actions: {
    },
    modules: {
    },
}

export default new Vuex.Store(store);
