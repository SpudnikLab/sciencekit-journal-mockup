/**
 * ScienceKit Journal — App Navigation
 * Handles SPA page switching, sidebar & bottom nav state.
 */

var pages    = ['login','register','dashboard','journals','create','recording','save','citizen','p2p','usecases','archive'];
var authPages = ['login','register'];

// Sidebar nav item IDs
var navIds = {
  dashboard : 'nav-dashboard',
  journals  : 'nav-journals',
  create    : 'nav-create',
  citizen   : 'nav-citizen',
  p2p       : 'nav-p2p',
  usecases  : 'nav-usecases',
  archive   : 'nav-archive'
};

// Bottom nav item IDs (mobile)
var bnavIds = {
  dashboard : 'bn-dashboard',
  journals  : 'bn-journals',
  create    : 'bn-create',
  citizen   : 'bn-citizen',
  p2p       : 'bn-p2p'
};

/**
 * Navigate to a page by key.
 * Shows the target page, hides all others.
 * Toggles sidebar & bottom nav visibility.
 */
function nav(p) {
  // Hide all pages, show target
  pages.forEach(function(id) {
    var el = document.getElementById('pg-' + id);
    if (el) el.classList.remove('on');
  });
  var pg = document.getElementById('pg-' + p);
  if (pg) pg.classList.add('on');

  // Sidebar: hidden on auth pages
  var sb = document.getElementById('sidebar');
  var bn = document.getElementById('bnav');
  var isAuth = authPages.indexOf(p) >= 0;

  if (isAuth) {
    if (sb) sb.style.display = 'none';
    if (bn) bn.style.display = 'none';
  } else {
    if (sb) sb.style.display = 'flex';
    if (bn) bn.style.display = '';
  }

  // Update sidebar active state
  Object.keys(navIds).forEach(function(k) {
    var el = document.getElementById(navIds[k]);
    if (el) el.classList.remove('on');
  });
  if (navIds[p]) {
    var el = document.getElementById(navIds[p]);
    if (el) el.classList.add('on');
  }

  // Update bottom nav active state
  Object.keys(bnavIds).forEach(function(k) {
    var el = document.getElementById(bnavIds[k]);
    if (el) el.classList.remove('on');
  });
  if (bnavIds[p]) {
    var el = document.getElementById(bnavIds[p]);
    if (el) el.classList.add('on');
  }
}

/** Called by Sign in / Create account buttons */
function doLogin() {
  nav('dashboard');
}

// Expose to global scope (needed for inline onclick handlers)
window.nav     = nav;
window.doLogin = doLogin;
