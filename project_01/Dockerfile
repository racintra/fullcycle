# Informa a partir de qual imagem será gerada a nova imagem
FROM nginx:latest

# Define qual será o diretório de trabalho
WORKDIR /app

# Realiza a execução de um comando
RUN apt-get update && \
    apt-get install vim -y

# Copia arquivos ou diretórios locais para dentro da imagem
COPY html/ /usr/share/nginx/html