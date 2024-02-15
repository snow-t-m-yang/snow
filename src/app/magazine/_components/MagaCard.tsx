import Link from "next/link";
import blogs from "../data-blogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};
export default function MagaCard({}: Props) {
  return (
    <>
      <section className="grid">
        {blogs.map((blog) => {
          const { id, title, author, date, tag, src } = blog;
          return (
            <Card key={id}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{date}</p>
              </CardContent>
              <CardFooter>
                <p>{tag}</p>
                <p>{date}</p>
                <Link
                  href={src}
                  target="_blank"
                >
                  <p>Read More</p>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </>
  );
}
