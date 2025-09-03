FROM node

WORKDIR /app

RUN apt update && \
    git clone https://github.com/jaya-vardhan-9/Devara-Part2.git . && \
    npm install

EXPOSE 5173
    
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]