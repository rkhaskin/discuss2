import { Link } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

// as we are going to run a query here, it needs to be an async function
export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
