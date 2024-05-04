FROM nginx

WORKDIR /usr/share/nginx/html 

COPY . . 
# dấu . đầu tiên la copy all,  thứ 2 là workdir

# docker build ./build -t :imageName:imageTag
# demo : docker build ./build -t :image-next:v1

