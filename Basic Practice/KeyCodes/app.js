const wrapper = document.querySelector(".wrapper");

const load = (e) => {
  // console.log(e);
  let key = e.key;
  let code = e.code;
  let keyCodes = e.keyCode;
  wrapper.innerHTML = `
        <div class="key">
        <h4> ${key}</h4>
      </div>
      <div class="key">
        <h4>${keyCodes}</h4>
      </div>
      <div class="key">
        <h4> ${code}</h4>
      </div>
  `;
  //   <div class="wrapper">
  //   <h4>"Press any key"</h4>
  // </div>
};

window.addEventListener("keydown", load);
