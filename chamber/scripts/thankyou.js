const params = new URLSearchParams(window.location.search);
    document.getElementById("firstname").textContent = params.get("firstname") || "-";
    document.getElementById("lastname").textContent = params.get("lastname") || "-";
    document.getElementById("email").textContent = params.get("email") || "-";
    document.getElementById("phone").textContent = params.get("phone") || "-";
    document.getElementById("organization").textContent = params.get("organization") || "-";
    document.getElementById("timestamp").textContent = params.get("timestamp") || "-";
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


    function fillField(id, name) {
      const value = params.get(name);
      document.getElementById(id).textContent = value ? decodeURIComponent(value) : '-';
    }

    fillField("firstname", "firstname");
    fillField("lastname", "lastname");
    fillField("email", "email");
    fillField("phone", "phone");
    fillField("organization", "organization");
    fillField("timestamp", "timestamp");

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;