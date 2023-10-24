import Image from "next/image";
import { useEffect, useRef } from "react";

type ModalProps = {
  shouldDisplayModal: boolean;
};

import styles from "./modal.module.css";

export const Modal = ({ shouldDisplayModal }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (shouldDisplayModal) modalRef.current?.showModal();
  }, [shouldDisplayModal]);

  return (
    <dialog ref={modalRef} className={styles.modal}>
      <div className={styles.card}>
        <button onClick={() => modalRef.current?.close()}>
          <Image
            src="/icons/close.svg"
            alt="x icon to close the modal"
            width={24}
            height={24}
          />
        </button>
        <Image
          src="/icons/water.svg"
          alt="glass of water"
          height={60}
          width={60}
        />
        <strong>Lembrete para beber água!</strong>
      </div>
    </dialog>
  );
};
