if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/react-pwa-github-page/sw.js', { scope: '/react-pwa-github-page/' })})}