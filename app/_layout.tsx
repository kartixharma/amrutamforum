import { Slot, Stack } from "expo-router";
import "../global.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import Navbar from "@/components/navbar";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
      <Navbar />
    </Provider>
  );
}
