import styled from "@emotion/styled";
import {
  NodeViewRendererProps,
  NodeViewWrapper,
  NodeViewContent,
} from "@tiptap/react";
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

      <button onClick={onButtonClick}>
        Click this button and see what happens
      </button>

      <div>{node.attrs?.count}</div>
      <div>{node.attrs?.style}</div>
    </NodeViewWrapper>
  );
};

export default styled(FooterNodeView)`
  padding: 20px;
  border: 2px solid magenta;
`;
