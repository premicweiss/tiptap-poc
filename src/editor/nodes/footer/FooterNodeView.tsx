import styled from "@emotion/styled";
import { NodeViewRendererProps, NodeViewWrapper } from "@tiptap/react";
import { FC } from "react";

interface FooterNodeViewProps extends NodeViewRendererProps {
  className?: string;
}

const FooterNodeView: FC<FooterNodeViewProps> = ({
  className,
  node,
  editor,
}) => {
  const onButtonClick = () => {
    editor.commands.addFooterNode({ count: Math.random() * 10 });
  };

  return (
    <NodeViewWrapper contentEditable={false} className={className}>
      <p>React component</p>

      <button onClick={onButtonClick}>Add another footer</button>

      <div>{node.attrs?.count}</div>
    </NodeViewWrapper>
  );
};

export default styled(FooterNodeView)`
  padding: 20px;
  border: 2px solid magenta;

  margin: 10px 0;
`;
