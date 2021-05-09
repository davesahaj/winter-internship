from django.db import models
from hashlib import blake2b
import requests
from bs4 import BeautifulSoup
from bs4.element import Comment
from googlesearch import search


class Crawler:

    def WebCrawler(url):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'}

        res = requests.get(url, headers=headers)
        html_page = res.content
        soup = BeautifulSoup(html_page, 'html.parser')
        text = soup.find_all(text=True)

        output = ''
        blacklist = [
            '[document]',
            'noscript',
            'header',
            'html',
            'meta',
            'button',
            'head',
            'input',
            'script',
            'image',
            'style',
            'nav',
            'header',
            'footer',
        ]

        whitelist = ['body']

        title = soup.title.string
        print(title)

        for t in text:
            print(t.name)
            if t.parent.name not in blacklist:
                output += '{}\n'.format(t)

        print(output)

    def SearchCrawler(query, country=".co.in", num=10, stop=10, pause=2):
        for j in search(query, country, num, stop, pause):
            print(j)
            print("\n")

    def textProcessor():
        x = 1
