;(function () {
	'use strict';

	const markdownResultElement = document.querySelector('#markdown-result');
	const lastArticlesElement = document.querySelector('#last-articles');
	const allArticlesElement = document.querySelector('#all-articles');
	const readArticleButton = document.querySelector('#read-article');

	const json = localStorage.getItem('articles');
	const articles = JSON.parse(json);
	const article = articles[articles.length - 1];

	// Опубликовать 200 символов последней из добавленных статей
	markdownResultElement.innerHTML = marked(article.content.substr(0,200) + '...');

	// Вывести список всех статей
	let str = '';
	for (let i = 0; i < articles.length; i++) {
		const currentArticle = articles[i];
		str = str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id + '">' + currentArticle.title + '</a></li>';
	}
	allArticlesElement.innerHTML = str;

	// Вывести список 3-х последних статей
	str = '';
	for (let i = articles.length - 3; i < articles.length; i++) {
		const currentArticle = articles[i];
		str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id + '" class="articles-list-link">' + currentArticle.title + '</a></li>';
	}
	lastArticlesElement.innerHTML = str;

	readArticleButton.addEventListener('click', function () {
		location.replace('article.html?id=' + article.id);
	});
})();