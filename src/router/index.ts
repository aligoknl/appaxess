import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsConditions from "../pages/TermsConditions.vue";
import AccessibilityStatement from "../pages/AccessibilityStatement.vue";
import SuccessPage from "../pages/SuccessPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/privacy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/terms",
      name: "TermsConditions",
      component: TermsConditions,
    },
    {
      path: "/accessibility",
      name: "AccessibilityStatement",
      component: AccessibilityStatement,
    },
    {
      path: "/success",
      name: "SuccessPage",
      component: SuccessPage,
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
