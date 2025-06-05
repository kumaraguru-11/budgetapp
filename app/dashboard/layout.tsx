// import React, { ReactNode, useContext } from "react";
// import style from "./layout.module.css";
// import {
//   SidebarProvider,
//   SidebarContent,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// const Layout = ({
//   sidebar,
//   header,
//   main,
// }: {
//   sidebar: ReactNode;
//   header: ReactNode;
//   main: ReactNode;
// }) => {
//   return (
//     <SidebarProvider>
//       <LayoutBody sidebar={sidebar} header={header} main={main} />
//     </SidebarProvider>
//   );
// };

// const LayoutBody = ({
//   sidebar,
//   header,
//   main,
// }: {
//   sidebar: ReactNode;
//   header: ReactNode;
//   main: ReactNode;
// }) => {
//   // const { isCollapsed } = useContext(SidebarContent);

//   return (
//     <div className={style.container}>
//       {/* Sidebar + Main Content Wrapper */}
//       <div className={style.body}>
//         {/* {!isCollapsed && <aside className={style.sidebar}>{sidebar}</aside>} */}
//         <div className={style.content}>
//           <header className={style.header}>
//             <SidebarTrigger />
//             {header}
//           </header>
//           <main className={style.main}>{main}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({
  sidebar,
  header,
  main,
}: {
  sidebar: ReactNode;
  header: ReactNode;
  main: ReactNode;
}) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <aside className="w-full">{sidebar}</aside>
        <main className="flex-1">
          <header>{header}</header>
          {main}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default layout;
