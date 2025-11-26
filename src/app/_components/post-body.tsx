import markdownStyles from "./markdown-styles.module.css";

// 定义组件接收的参数类型
type Props = {
  content: string; // 这里的content 是由 Markdown 转换后的纯 HTML 字符串
};

// 定义组件函数
export function PostBody({ content }: Props) {
  return (
    // 外层容器，控制整体宽度和居中，max-w-5xl 限制最大宽度，mx-auto 实现水平居中,更改此处可以修改正文的宽度，数字可以是234567，或者直接删除max-w-...这个类，或max-w-none
    <div className="max-w-6xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
