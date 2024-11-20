-- CreateTable
CREATE TABLE `Order_History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `orderedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order_History` ADD CONSTRAINT `Order_History_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
