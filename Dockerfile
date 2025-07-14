FROM python:3.11-slim
LABEL maintainer="Ebenezer Isaac Okwodu"
LABEL version="1.1"
LABEL description="Symbolic Temple OS v1.1 with dream rituals and glyph mutation"
WORKDIR /app
COPY . /app
CMD ["python", "main.py"]