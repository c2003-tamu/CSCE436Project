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
GET /User - Comprehensive list of users  
GET /Event - Comprehensive list of events  
GET /Room - Comprehensive list of rooms that fit the following query params:  
- `seats` (int): Minimum number of seats required.  
- `has_monitor` (boolean): Specifies if the room should have a monitor (`true` or `false`).  
- `table_type` (string): Specifies the type of table in the room (`square` or `circle`).  
- `has_whiteboard` (boolean): Specifies if the room should have a whiteboard (`true` or `false`).  
If no query params given, GET /Room returns all rooms

Contact Cade/Eunsoo for more needed endpoints  

