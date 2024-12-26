const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicsSlug: string, postId: string) {
    return `topics/${topicsSlug}/posts/${postId}`;
  },
};

export default paths;
