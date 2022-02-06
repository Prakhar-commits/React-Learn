import React from "react";
import { Modal } from "semantic-ui-react";
import { createPortal } from "react-dom";

const Model = ({ title, content, actions, onDismiss }) => {
  return createPortal(
    <div onClick={onDismiss}>
      <Modal size="tiny" dimmer="blurring" open onClick={(e) => e.stopPropagation()}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>{actions}</Modal.Actions>
      </Modal>
    </div>,
    document.getElementById("model")
  );
};

export default Model;
