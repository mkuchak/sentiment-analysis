FROM python:3.8-slim-buster
WORKDIR /api

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .

EXPOSE 8000
RUN mkdir -p ./assets
CMD ["bin/start_server"]

# create and run new image without docker-compose, for only api container
# docker build -t sentiment-analysis-api .
# docker run --name sentiment-analysis-api -e MODEL_ID=10rThD6G29uwQelsIsX_QqlYBFUZldmxB -p 8000:8000 sentiment-analysis-api:latest
