# 🔮 Sentiment Analysis in Portuguese

This is a [simple, but complete, application](https://sentiment.kuch.dev) with back-end and front-end for an artificial intelligence model that analyzes and predicts the sentiment of a text written in **Brazilian Portuguese**.

[BERT](https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html) (Bidirectional Encoder Representations from Transformers) was used to create this model, transferring the learning through a dataset [extracted from the Play Store](https://github.com/JoMingyu/google-play-scraper). The training was carried out in the [Colaboratory](https://colab.research.google.com/) and the files generated are at `/ai` folder.

The model was put into production from an back-end API built using FastAPI and Uvicorn at `/api`. The front-end is a React application built with the Context API/Hooks for state management and the generated data is saved in localstorage, which can be manipulated through the user interface; it's at `/web` folder.

<div align="center">

![example](https://user-images.githubusercontent.com/3791148/146606328-cb32fd6c-b39c-47ad-8fc7-9b634f1baf25.png)

</div>

## This app was built with

<div align="center">

![Colab](https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=google-colab&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)

</div>

## How to start

To try this project just run this lines in your terminal:

```bash
git clone https://github.com/mkuchak/sentiment-analysis.git
cd sentiment-analysis
docker-compose up -d
```

So then you will be able to access the project on [localhost:3000](http://localhost:3000).

😃😐😡