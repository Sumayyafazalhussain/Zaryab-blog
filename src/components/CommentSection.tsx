"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );

      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Comments</h2>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id} className="shadow-md">
              <CardContent className="p-6 space-y-2">
                <div className="font-semibold text-lg text-gray-800">{comment.author}</div>
                <p className="text-gray-600">{comment.text}</p>
                <button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
                >
                  Edit
                </button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <Input
          type="text"
          value={authorName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
