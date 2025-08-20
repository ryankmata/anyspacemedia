"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Blog from "@/components/blog";

const BlogPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Blog />
    </div>
  );
};

export default BlogPage;
