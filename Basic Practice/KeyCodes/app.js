const wrapper = document.querySelector(".wrapper");

const load = (e) => {
  // console.log(e);
  let key = e.key;
  let code = e.code;
  let keyCodes = e.keyCode;
  wrapper.innerHTML = `

        <div class="key">
        <h3> Key</h3>
        <h4> ${key}</h4>
      </div>
      <div class="key">
      <h3> KeyCode</h3>
        <h4>${keyCodes}</h4>
      </div>
      <div class="key">
      <h3> Code</h3>
        <h4> ${code}</h4>
      </div>
  `;
  //   <div class="wrapper">
  //   <h1>"Press any key"</h1>
  // </div>
};

window.addEventListener("keydown", load);

