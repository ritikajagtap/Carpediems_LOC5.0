# Carpediems_LOC5.0

This is the project made to solve a problem which stated to design a promotion engine that makes it easy for merchants to manage the coupons, and gift cards for their e-commerce business. Also, the problem statement demanded the creation of a headless promotion engine that can be integrated with any e-commerce website easily.

In our attempt to solve this problem, our project contains 2 modules.

1) Merchant Portal

We designed a portal for the merchant where he/she can create static coupons, dynamic coupons, and gift cards and set rules to manage these gift cards easily. The merchant can create coupons or gift cards in bulk as well as single. The merchant can also view the gift cards which are expired or active. Merchant can set an expiry date for coupons and gift cards as well as delete the gift cards or coupons whenever needed. Merchant can specify which coupons are valid for which orders and also specify the gift card amount. So, this was the first module of the project which focussed on the creation of coupons or gift cards by the merchant.

2) APIs for the implementation of a headless promotion

Now the second module i.e. headless promotion engine can be integrated with any e-commerce platform. So to implement this module we created APIs that can be hit when any customer holding any coupons redeems the coupon or the gift card. The website contains documentation of these APIs for the developer of the e-commerce website to integrate into the e-commerce website of a particular merchant.

The TechStack we used is:-

NodeJS

ExpressJS

MongoDB

ReactJS

Axios

Tailwind CSS

To run the project:-

cd backend

npm i

cd..

cd frontend

npm i 

cd backend 

nodemon index.js

cd frontend

npm start


Screenshots:-

<img width="960" alt="image" src="https://user-images.githubusercontent.com/79222361/227536071-6e873439-283f-4918-b294-df81cede54a2.png">
<img width="958" alt="image" src="https://user-images.githubusercontent.com/79222361/227536135-af9fcd13-9a72-4213-8d5b-42142de41173.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79222361/227536191-6bee7ce2-70a5-44c0-8854-341873416048.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79222361/227536345-bf387dc9-9868-44dd-9269-f21ea804aa1a.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79222361/227536453-726be59a-9bb1-42ea-a8b8-f1df70a3535a.png">
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79222361/227536546-858e62c4-44db-4301-9835-11e1d5ecedfa.png">


