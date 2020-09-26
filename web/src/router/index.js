import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "/home",
        meta: { title: "首页" },
        component: () => import("../views/ArticleListPage.vue")
      },
      {
        path: "/article/:id",
        meta: { title: "文章" },
        props: true,
        component: () => import("../views/ArticlePage.vue")
      },
      {
        path: "/category",
        meta: { title: "分类" },
        component: () => import("../views/CategoryPage.vue")
      },
      {
        path: "/timeLine",
        meta: { title: "时光机" },
        component: () => import("../views/TimeLinePage.vue")
      },
      {
        path: "/friend",
        meta: { title: "友链" },
        component: () => import("../views/FriendPage.vue")
      },
      {
        path: "about",
        meta: { title: "关于" },
        component: () => import("../views/AboutPage")
      }
    ]
  },
  {
    path: "*",
    name: "404",
    meta: { title: "失踪了哦！" },
    component: () => import("@/views/Layout"),
    children: [
      {
        path: "*",
        name: "404 NotFound!",
        component: () => import("@/views/404")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : "...";
  next();
});

// vue报错：Avoided redundant navigation to current location: "/"的解决方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
