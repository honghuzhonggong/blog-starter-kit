import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    // 更改此处可以修改正文的宽度，数字可以是234567，或者直接删除max-w-...这个类，或max-w-none
    <div className="max-w-5xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
