CREATE TABLE "beverages" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" varchar(255) NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dairy" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" varchar(255) NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meat" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" varchar(255) NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "snacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" varchar(255) NOT NULL,
	"quantity" integer NOT NULL
);
