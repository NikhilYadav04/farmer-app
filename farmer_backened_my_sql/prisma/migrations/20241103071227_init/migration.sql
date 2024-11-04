-- DropForeignKey
ALTER TABLE `shop` DROP FOREIGN KEY `Shop_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `Shop` ADD CONSTRAINT `Shop_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
