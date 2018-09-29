/**
 * MediaWiki:Common.js
 */

const wikiBody: Element | null = document.querySelector('#wiki-body');

if (wikiBody && document.querySelector('#test-app')) {
  const iFrame: HTMLIFrameElement = document.createElement('iframe');
  iFrame.setAttribute('id', 'app');
  iFrame.setAttribute('title', 'dota2 wiki');
  iFrame.setAttribute('width', '100%');
  iFrame.setAttribute('height', '920');
  iFrame.setAttribute('src', 'https://dota2wiki.duduluu.com/wiki/schinese/heroes');

  (wikiBody.parentNode as Node).insertBefore(iFrame, wikiBody);
}
