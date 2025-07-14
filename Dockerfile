# Dockerfile for Symbolic Temple OS
FROM python:3.11-slim

LABEL maintainer="Ebenezer Isaac Okwodu"
LABEL version="1.0"
LABEL description="Symbolic Temple OS: A ritual symbolic system"

WORKDIR /app
COPY . /app

CMD ["python", "main.py"]