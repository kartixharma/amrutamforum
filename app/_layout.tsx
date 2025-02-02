import { Slot, Stack, usePathname } from "expo-router";
import "../global.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import Navbar from "@/components/navbar";

export default function RootLayout() {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <Slot />
      {pathname != '/addThoughts' && <Navbar />}
    </Provider>
  );
}
