FROM python:3.11

ENV PYTHONUNBUFFERED 1
WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .

RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]