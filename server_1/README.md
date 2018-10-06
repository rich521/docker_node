1. docker build -t <your username>/node-web-app .
2. docker images
3. docker run -p 49160:8080 -d <your username>/node-web-app
4. docker ps
5. docker logs <container id>
6. docker exec -it <container id> /bin/bash



Running on minikube:

1. minikube start
2. eval $(minikube docker-env)
3. 



