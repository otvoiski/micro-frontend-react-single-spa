import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@bko/menu",
  app: () => System.import("@bko/menu"),
  activeWhen: ["/"],
});

fetch(
  "https://55b9883a-7e3a-463a-b3a8-f7d303f27470.mock.pstmn.io/GetApplications"
)
  .then((resp) => resp.json())
  .then((data) => {
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
