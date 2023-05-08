import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
      <Avatar src="https:/github.com/felipenobrg.png"/>

        <strong>Felipe Nóbrega</strong>
        <span>Web Developer</span>
      </div>

      <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu Pefil
      </a>
      </footer>
    </aside>
  );
};
