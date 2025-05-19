CREATE TABLE "userDetails" (
	"userId" serial PRIMARY KEY NOT NULL,
	"userName" varchar(255) NOT NULL,
	"userEmail" varchar(255) NOT NULL,
	"userMobileNumber" varchar(20) NOT NULL,
	"userPassword" varchar(255) NOT NULL,
	"userDefaultDeliveryAddress" varchar(255)
);
