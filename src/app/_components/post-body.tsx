import markdownStyles from "./markdown-styles.module.css";

// 定义组件接收的参数类型
type Props = {
  content: string; // 这里的content 是由 Markdown 转换后的纯 HTML 字符串
};

// 定义组件函数
export function PostBody({ content }: Props) {
  return (
    // 外层容器，控制整体宽度和居中，max-w-5xl 限制最大宽度，mx-auto 实现水平居中,更改此处可以修改正文的宽度，数字可以是234567，或者直接删除max-w-...这个类，或max-w-none
    <div className="max-w-5xl mx-auto">

      {/* 内容容器，应用正文特定的样式 */}
      {/* className={markdownStyles["markdown"]}：这里使用了 CSS Modules */}
      {/* 它将 markdown-styles.module.css 文件里定义的 .markdown 类应用到这个 div 上 */}
      <div
        className={markdownStyles["markdown"]}

        {/* 渲染 HTML,React 为了安全，默认不渲染 HTML 标签。这里明确告诉 React "我知道这是 HTML，请直接渲染" */}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
