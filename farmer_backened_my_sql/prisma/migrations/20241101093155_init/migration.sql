-- DropForeignKey
ALTER TABLE `response` DROP FOREIGN KEY `Response_user_id_fkey`;

-- AlterTable
ALTER TABLE `response` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Response` ADD CONSTRAINT `Response_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
