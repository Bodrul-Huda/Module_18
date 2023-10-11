-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `authorId_foreign` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
