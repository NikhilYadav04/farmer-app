/*
  Warnings:

  - Added the required column `image` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `response` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `response` VARCHAR(191) NOT NULL;
