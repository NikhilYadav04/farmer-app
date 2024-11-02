/*
  Warnings:

  - A unique constraint covering the columns `[reply]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Reply_reply_key` ON `Reply`(`reply`);
