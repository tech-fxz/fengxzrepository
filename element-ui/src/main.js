/**
 * Created by zhen on 2017/12/11.
 */
const User = {
    template: `<div>User {{ $route.params.id }}</div>`
};

const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User }
    ]
});
new Vue({
    el: '#app',
    router,
    data: function() {
        return { visible: false }
    }
});