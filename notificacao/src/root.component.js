import { listenEvent } from "@bko/util";

export default function Root(props) {
  var notyf = new Notyf({
    duration: 5000,
    dismissible: true,
    position: {
      x: "right",
      y: "bottom",
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "fa-solid fa-triangle-exclamation",
          color: "white",
        },
      },
      {
        type: "info",
        background: "blue",
        icon: {
          className: "fa-solid fa-circle-info",
          color: "white",
        },
      },
    ],
  });

  listenEvent("@bko/notificacao/alert/success", (event) => {
    notyf.success(event.detail.msg);
  });

  listenEvent("@bko/notificacao/alert/error", (event) => {
    notyf.error(event.detail.msg);
  });

  listenEvent("@bko/notificacao/alert/warning", (event) => {
    notyf.open({
      type: "warning",
      message: event.detail.msg,
    });
  });

  listenEvent("@bko/notificacao/alert/info", (event) => {
    notyf.open({
      type: "info",
      message: event.detail.msg,
    });
  });

  return <></>
}
