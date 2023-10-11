import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  // *-------------------------- Crud Operation for user model starts Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.create({
  //       data: {
  //         firstName: "Bodrul",
  //         middleName: "Huda",
  //         lastName: "Attasham",
  //         mobile: "01111111",
  //         email: "b@email.com",
  //         passwordHash: "hfnch232&&",
  //         intro: "Text",
  //         profile: "Text",
  //         posts: {
  //           create: {
  //             parendId: 1,
  //             title: "Hi",
  //             metaTitle: "I am Using App",
  //             slug: "Unique",
  //             summary: "See u Again",
  //             published: 1,
  //             content: "Description",
  //           },
  //         },
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** For Multiple entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.createMany({
  //       data: [
  //         {
  //           firstName: "Bodrul",
  //           middleName: "Huda",
  //           lastName: "Attasham",
  //           mobile: "01111111",
  //           email: "user4@email.com",
  //           passwordHash: "hfnch232&&",
  //           intro: "Text",
  //           profile: "Text",
  //         },
  //         {
  //           firstName: "Bodrul_2",
  //           middleName: "Huda",
  //           lastName: "Attasham",
  //           mobile: "01111111",
  //           email: "user5@email.com",
  //           passwordHash: "hfnch232&&",
  //           intro: "Text",
  //           profile: "Text",
  //         },
  //       ],
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.findUnique({
  //       where: {
  //         email: "user@email.com",
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.findMany({
  //       select: {
  //         id: true,
  //         firstName: true,
  //         middleName: true,
  //         lastName: true,
  //         mobile: true,
  //         email: true,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.update({
  //       where: { email: "user2@email.com" },
  //       data: { mobile: "0122222222" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.updateMany({
  //       where: {
  //         firstName: "Bodrul",
  //         middleName: "Huda",
  //         lastName: "Attasham",
  //       },
  //       data: { firstName: "BODRUL", middleName: "HUDA", lastName: "ATTASHAM" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.delete({
  //       where: { email: "user3@email.com" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.users.deleteMany({
  //       where: { firstName: "Bodrul" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for user model ended Here ------------------------------*
  //          ||
  //           ||
  //           ||
  //   *-------------------------- Crud Operation for post model ended Here ------------------------------*

  // *********** For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.create({
  //       data: {
  //         parendId: 1,
  //         title: "Any",
  //         metaTitle: "Data",
  //         slug: "Unique",
  //         summary: "Text",
  //         published: 1,
  //         content: "Description",
  //         author: {
  //           connect: {
  //             id: 2,
  //           },
  //         },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.findMany({
  //       select: {
  //         id: true,
  //         title: true,
  //         metaTitle: true,
  //         summary: true,
  //         published: true,
  //         content: true,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.update({
  //       where: { id: 1 },
  //       data: { title: "my title" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.updateMany({
  //       where: {
  //         id: 1,
  //       },
  //       data: {
  //         metaTitle: "loream ispum",
  //         summary: "loream ispum",
  //         content: "loream ispum",
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.delete({
  //       where: { id: 1 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.posts.deleteMany({
  //       where: { title: "Any" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for post model ended Here ------------------------------*
  //          ||
  //           ||
  //           ||
  //   *-------------------------- Crud Operation for post_comment model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.create({
  //       data: {
  //         parendId: 1,
  //         title: "Text2",
  //         published: 2,
  //         content: "Text3",
  //         posts: {
  //           connect: {
  //             id: 7,
  //           },
  //         },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.findMany({
  //       select: {
  //         id: true,
  //         title: true,
  //         published: true,
  //         content: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.update({
  //       where: { id: 3 },
  //       data: { title: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.updateMany({
  //       where: {
  //         title: "Updated",
  //       },
  //       data: { content: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comments.deleteMany({
  //       where: { title: "Text" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for post_comment ended Here ------------------------------*
  //          ||
  //           ||
  //           ||
  //   *-------------------------- Crud Operation for Category model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.create({
  //       data: {
  //         parendId: 1,
  //         title: "Text3",
  //         metaTitle: "loream ipsum",
  //         slug: "unique",
  //         content: "loream ipsum",
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // ***********  For Multiple entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.createMany({
  //       data: [
  //         {
  //           parendId: 1,
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //         {
  //           parendId: 1,
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //         {
  //           parendId: 1,
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //       ],
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.findMany({
  //       select: {
  //         id: true,
  //         title: true,
  //         content: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.update({
  //       where: { id: 3 },
  //       data: { title: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  // try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.updateMany({
  //     where: {
  //         title: "Updated",
  //     },
  //     data: { content: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  // } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  // }

  // *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.category.deleteMany({
  //       where: { title: "Text" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for Category  ended Here ------------------------------*
  //          ||
  //           ||
  //           ||

  //   *-------------------------- Crud Operation for Tag  model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.create({
  //       data: {
  //         title: "Text3",
  //         metaTitle: "loream ipsum",
  //         slug: "unique",
  //         content: "loream ipsum",
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // ***********  For Multiple entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.createMany({
  //       data: [
  //         {
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //         {
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //         {
  //           title: "Text3",
  //           metaTitle: "loream ipsum",
  //           slug: "unique",
  //           content: "loream ipsum",
  //         },
  //       ],
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.findMany({
  //       select: {
  //         id: true,
  //         title: true,
  //         metaTitle: true,
  //         content: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.update({
  //       where: { id: 3 },
  //       data: { title: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.updateMany({
  //       where: {
  //         title: "Updated",
  //       },
  //       data: { content: "New" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.tag.deleteMany({
  //       where: { title: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for Tag ended Here ------------------------------*
  //          ||
  //           ||
  //           ||
  //          ||
  //           ||
  //           ||

  //   *-------------------------- Crud Operation for Post_Tag  model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_tag.create({
  //       data: {
  //         posts: {
  //           connect: {
  //             id: 7,
  //           },
  //         },
  //         tag: {
  //           connect: {
  //             id: 1,
  //           },
  //         },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_tag.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_tag.findMany({});
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_tag.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for Post_Tag ended Here ------------------------------*
  //          ||
  //           ||
  //           ||
  //   *-------------------------- Crud Operation for Post_Meta model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.create({
  //       data: {
  //         key: "unah7h",
  //         content: "loreum ipsum",
  //         posts: {
  //           connect: {
  //             id: 7,
  //           },
  //         },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.findMany({});
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.update({
  //       where: { id: 3 },
  //       data: { content: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To Update Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.updateMany({
  //       where: {
  //         key: "unah7h",
  //       },
  //       data: { content: "Updated" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *********** To Delete Multiple Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_meta.deleteMany({
  //       where: { key: "unah7h" },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for Post_Meta ended Here ------------------------------*
  //          ||
  //           ||
  //           ||

  //   *-------------------------- Crud Operation for Post_Category  model ended Here ------------------------------*

  // ***********  For Single entry ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_category.create({
  //       data: {
  //         posts: {
  //           connect: {
  //             id: 7,
  //           },
  //         },
  //         category: {
  //           connect: {
  //             id: 5,
  //           },
  //         },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_category.findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  // *********** To get All Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_category.findMany({});
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *********** To Delete Single Data ***********

  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_category.delete({
  //       where: { id: 2 },
  //     });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //   *-------------------------- Crud Operation for Post_Category ended Here ------------------------------*
}
