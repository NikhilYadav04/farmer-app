-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `reply` DROP FOREIGN KEY `Reply_q_id_fkey`;

-- DropForeignKey
ALTER TABLE `reply` DROP FOREIGN KEY `Reply_user_id_fkey`;

-- CreateTable
CREATE TABLE `Shop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `location_latitude` DOUBLE NOT NULL,
    `location_longitude` DOUBLE NOT NULL,
    `locality` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Shop_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `s_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Product_title_key`(`title`),
    UNIQUE INDEX `Product_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_q_id_fkey` FOREIGN KEY (`q_id`) REFERENCES `Question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_s_id_fkey` FOREIGN KEY (`s_id`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
