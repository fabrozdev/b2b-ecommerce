import {
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineReceiptTax,
} from "react-icons/hi";

export type NavigationIcons = Record<string, JSX.Element>;

const navigationIcon: NavigationIcons = {
  home: <HiOutlineHome />,
  deliver: <HiOutlineTruck />,
  products: <HiOutlineReceiptTax />,
};

export default navigationIcon;
