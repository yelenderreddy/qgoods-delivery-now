import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const fruitsAndVegetables = pgTable("fruitsAndVegetables", {
  id: serial("id").primaryKey().notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const dairy = pgTable("dairy", {
  id: serial("id").primaryKey().notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const beverages = pgTable("beverages", {
  id: serial("id").primaryKey().notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const meat = pgTable("meat", {
  id: serial("id").primaryKey().notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const snacks = pgTable("snacks", {
  id: serial("id").primaryKey().notNull(),
  productName: varchar("productName", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});
