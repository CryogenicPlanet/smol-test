import { browser } from 'webextension-polyfill-ts';

function initPopup() {
  document.getElementById('redesign').addEventListener('click', async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    browser.tabs.sendMessage(tabs[0].id, { action: 'REDESIGN_PAGE' });
  });
}

window.onload = initPopup;