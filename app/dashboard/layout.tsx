// import React, { ReactNode } from "react";
// import { SidebarProvider } from "@/components/ui/sidebar";

// const layout = ({
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
//       <div className="flex">
//         {/* Sidebar with fixed width */}
//         <aside>{sidebar}</aside>

//         {/* Content area takes remaining space */}
//         <div className="flex-1">
//           <header>{header}</header>
//           <main>{main}</main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// };

// export default layout;

// app/dashboard/layout.tsx
"use client";

import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import styles from "./layout.module.css";

const LayoutContent = ({
  sidebar,
  header,
  main,
}: {
  sidebar: ReactNode;
  header: ReactNode;
  main: ReactNode;
}) => {
  // Remove usage of SidebarContext and isOpen, fallback to default sidebar class
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        {/* Sidebar with default class */}
        <aside className={styles.sidebar}>{sidebar}</aside>

        {/* Content area */}
        <div className={styles.content}>
          <header className={styles.header}>{header}</header>
          <main className={styles.main}>{main}</main>
        </div>
      </div>
    </div>
  );
};

const Layout = ({
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
      <LayoutContent sidebar={sidebar} header={header} main={main} />
    </SidebarProvider>
  );
};

export default Layout;
