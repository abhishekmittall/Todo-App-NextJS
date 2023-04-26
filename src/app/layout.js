import "@/app/styles/app.scss";
import Header from "./components/Header";
import { ContextProvider } from "./components/Clients";

export const metadata = {
  title: "Todo App",
  description: "This is Todo App Project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
