//페이지를 관리해주는 구성 파일
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
  //Hash
  //https://google.com/#/search
  history: createWebHashHistory(),

  //pages
  //https://google.com/
  //https://google.com/about
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
