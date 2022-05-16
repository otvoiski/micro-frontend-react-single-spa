// Anything exported from this file is importable by other in-browser modules.
export function emitEvent(name, data) {
  console.log("data", data);
  dispatchEvent(new CustomEvent(name, { 
    detail: data
  }));
}

export function listenEvent(name, cb) {
  window.addEventListener(name, cb);
}

export function success(msg) {
  emitEvent("@bko/notificacao/alert/success", {msg});
}
export function error(msg) {
  emitEvent("@bko/notificacao/alert/error", {msg});
}
export function warning(msg) {
  emitEvent("@bko/notificacao/alert/warning", {msg});
}
export function info(msg) {
  emitEvent("@bko/notificacao/alert/info", {msg});
}
