/*
  Warnings:

  - You are about to drop the column `location_latitude` on the `shop` table. All the data in the column will be lost.
  - You are about to drop the column `location_longitude` on the `shop` table. All the data in the column will be lost.
  - Added the required column `address` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shop` DROP COLUMN `location_latitude`,
    DROP COLUMN `location_longitude`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL;
