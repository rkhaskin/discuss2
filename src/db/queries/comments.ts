import type { Comment } from "@prisma/client";
import { db } from "@/db";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export async function fetchCommentsByPostId(
  postId: string
): Promise<CommentWithAuthor[]> {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
