(function () {
  "use strict";

  function wrapTables() {
    var tables = document.querySelectorAll("#R-body-inner article table");

    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];

      if (table.closest(".table-scroll")) continue;

      var wrapper = document.createElement("div");
      wrapper.className = "table-scroll";

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wrapTables);
  } else {
    wrapTables();
  }
})();
