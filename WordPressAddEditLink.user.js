// ==UserScript==
// @name           WordPressAddEditLink
// @namespace      https://github.com/tmsanrinsha
// @description    WordPressでログインしてない時も編集リンクを表示させる
// @include        http://sanrinsha.lolipop.jp/blog/*/*/*.html
// @version        1.0
// @grant          none
// @downloadURL    https://raw.githubusercontent.com/tmsanrinsha/WordPressAddEditLink-user-js/master/WordPressAddEditLink.user.js
// @updateURL      https://raw.githubusercontent.com/tmsanrinsha/WordPressAddEditLink-user-js/master/WordPressAddEditLink.user.js
// @author         tmsanrinsha
// ==/UserScript==

(function (es) {
    if (document.getElementsByClassName('edit-link').length === 1) {
        return;
    }

    var elemSpan = document.createElement('span');
    elemSpan.className = 'edit-link';

    var elemA = document.createElement('a');
    elemA.className = 'post-edit-link';
    elemA.innerHTML = '編集';

    var postId = document.getElementsByClassName('post')[0].id.replace('post-','')
    elemA.href = location.protocol + '//' + location.host + '/wp/wp-admin/post.php?post=' + postId + '&action=edit';

    elemSpan.appendChild(elemA);

    elemEditMeta = document.querySelector('#post-7064 > header > div:nth-child(3)');
    elemEditMeta.appendChild(elemSpan);
})();
