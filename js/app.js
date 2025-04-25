// app.js
export function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  export function loadUsers() {
    return JSON.parse(localStorage.getItem('users')||'[]');
  }
  export function saveSession(user) {
    localStorage.setItem('session', JSON.stringify(user));
  }
  export function loadSession() {
    return JSON.parse(localStorage.getItem('session')||'null');
  }
  export function clearSession() {
    localStorage.removeItem('session');
  }
  export function renderHeader() {
    const user = loadSession();
    const nav = document.getElementById('site-nav');
    if(user) {
      nav.innerHTML = `Xin chào ${user.name} | <a href="#" id="logout">Thoát</a>`;
      document.getElementById('logout').onclick = ()=>{
        clearSession();
        location.reload();
      };
    } else {
      nav.innerHTML = `<a href="login.html">Đăng nhập / Đăng ký</a>`;
    }
  }