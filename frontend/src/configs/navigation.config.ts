import { NavigationTree } from "@/types/navigation.ts";
import { NAV_ITEM_TYPE_ITEM } from "@/constants/navigation.constant.ts";

const navigationConfig: NavigationTree[] = [
  {
    key: "home",
    path: "/home",
    title: "Home",
    translateKey: "nav.home",
    icon: "home",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: "home",
    path: "/products",
    title: "Prodotti",
    translateKey: "nav.home",
    icon: "products",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  {
    key: "home",
    path: "/orders",
    title: "Ordini",
    translateKey: "nav.home",
    icon: "deliver",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
];

export default navigationConfig;
