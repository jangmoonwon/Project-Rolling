import { Layout } from "layout/Layout";
import { PostCardLayout } from "../../sharing/PostCardLayout/PostCardLayout";

export const ListPage = () => {
  return (
    <Layout isHiddenButton={false}>
      <h1>ListPage 입니다.</h1>
      <PostCardLayout />
    </Layout>
  );
};
