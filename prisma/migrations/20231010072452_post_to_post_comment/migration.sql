-- AddForeignKey
ALTER TABLE `post_comments` ADD CONSTRAINT `post_comments_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
