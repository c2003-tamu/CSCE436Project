# Backend Docs

## Deployment Details
Deployment: 3.89.63.42   
Contact Cade for SSH access

## Deployment Process
git clone https://github.com/c2003-tamu/CSCE436Project  
cd backend  
sudo apt update  
sudo apt install docker.io -y  
sudo docker build -t backend .  
sudo docker pull nginx  
sudo docker network create my_network  
sudo docker run -d --name my-backend-container --network my_network backend  
sudo docker run -d -p 80:80 --name my-nginx-container --network my_network -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro nginx  

## Endpoints
/User - Comprehensive list of users  
/Event - Comprehensive list of events  
/Room - Comprehensive list of rooms  

Contact Cade/Eunsoo for more needed endpoints  

